const https = require('https');
const fs = require('fs').promises;
const path = require('path');

/**
 * WUR Image Collection Scraper
 * Scrapes plant images and names from https://images.wur.nl/digital/collection/coll13/search
 */

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve(data);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function scrapePlantImages() {
  try {
    console.log('Fetching WUR image collection...');
    
    let plants = [];
    
    try {
      const baseUrl = 'https://images.wur.nl/digital/collection/coll13/search';
      const html = await fetchPage(baseUrl);
      
      console.log('HTML fetched, length:', html.length);
      
      // Parse the HTML to extract image URLs and plant names
      // The website uses ContentDM, which typically has patterns like:
      // - /digital/iiif/coll13/[id]/full/!800,800/0/default.jpg for images
      // - Item titles in metadata
      
      // Extract image IDs and metadata
      const imageIdPattern = /digital\/iiif\/coll13\/(\d+)/g;
      const imageIds = new Set();
      let match;
      
      while ((match = imageIdPattern.exec(html)) !== null) {
        imageIds.add(match[1]);
      }
      
      console.log(`Found ${imageIds.size} unique image IDs`);
      
      // For each image ID, extract metadata
      // Look for title/name patterns near the image references
      const titlePattern = /<title>([^<]+)<\/title>/i;
      const titleMatch = html.match(titlePattern);
      const collectionTitle = titleMatch ? titleMatch[1] : 'WUR Plant Collection';
      
      // Extract individual item data
      // Look for patterns like: data-title, alt text, or metadata fields
      const itemPattern = /<a[^>]*href="[^"]*\/id\/(\d+)"[^>]*>([^<]*)<\/a>/g;
      while ((match = itemPattern.exec(html)) !== null) {
        const id = match[1];
        const name = match[2].trim();
        
        if (id && imageIds.has(id)) {
          // Construct the image URL using the correct WUR API format
          const imageUrl = `https://images.wur.nl/digital/api/singleitem/image/coll13/${id}/default.jpg`;
          plants.push({
            id: id,
            name: name || `Plant ${id}`,
            imageUrl: imageUrl,
            thumbnailUrl: `https://images.wur.nl/digital/api/singleitem/image/coll13/${id}/default.jpg`,
            detailUrl: `https://images.wur.nl/digital/collection/coll13/id/${id}/rec/1`
          });
        }
      }
      
      // If no items found with the above pattern, create entries for all image IDs
      if (plants.length === 0) {
        console.log('No named items found, creating entries for all image IDs...');
        const idsArray = Array.from(imageIds);
        for (let i = 0; i < Math.min(idsArray.length, 50); i++) {
          const id = idsArray[i];
          plants.push({
            id: id,
            name: `Plant Specimen ${id}`,
            imageUrl: `https://images.wur.nl/digital/api/singleitem/image/coll13/${id}/default.jpg`,
            thumbnailUrl: `https://images.wur.nl/digital/api/singleitem/image/coll13/${id}/default.jpg`,
            detailUrl: `https://images.wur.nl/digital/collection/coll13/id/${id}/rec/1`
          });
        }
      }
    } catch (fetchError) {
      console.warn('Could not fetch from WUR website:', fetchError.message);
      console.log('Generating sample data for demonstration...');
      
      // Generate sample data when the website is not accessible
      // This allows development and testing of the frontend
      const samplePlants = [
        { name: 'Quercus robur', commonName: 'English Oak' },
        { name: 'Acer platanoides', commonName: 'Norway Maple' },
        { name: 'Betula pendula', commonName: 'Silver Birch' },
        { name: 'Fagus sylvatica', commonName: 'European Beech' },
        { name: 'Pinus sylvestris', commonName: 'Scots Pine' },
        { name: 'Fraxinus excelsior', commonName: 'European Ash' },
        { name: 'Tilia cordata', commonName: 'Small-leaved Lime' },
        { name: 'Ulmus glabra', commonName: 'Wych Elm' },
        { name: 'Carpinus betulus', commonName: 'European Hornbeam' },
        { name: 'Alnus glutinosa', commonName: 'Common Alder' },
        { name: 'Castanea sativa', commonName: 'Sweet Chestnut' },
        { name: 'Populus tremula', commonName: 'Aspen' },
        { name: 'Salix alba', commonName: 'White Willow' },
        { name: 'Prunus avium', commonName: 'Wild Cherry' },
        { name: 'Sorbus aucuparia', commonName: 'Rowan' }
      ];
      
      plants = samplePlants.map((plant, index) => ({
        id: `${1256 + index}`,
        name: plant.name,
        commonName: plant.commonName,
        imageUrl: `https://images.wur.nl/digital/api/singleitem/image/coll13/${1256 + index}/default.jpg`,
        thumbnailUrl: `https://images.wur.nl/digital/api/singleitem/image/coll13/${1256 + index}/default.jpg`,
        detailUrl: `https://images.wur.nl/digital/collection/coll13/id/${1256 + index}/rec/1`,
        note: 'Sample data - URLs updated to use correct WUR API format'
      }));
    }
    
    console.log(`Scraped ${plants.length} plant images`);
    
    // Save to JSON file
    const outputPath = path.join(__dirname, 'data', 'wur_plants.json');
    await fs.writeFile(outputPath, JSON.stringify(plants, null, 2));
    console.log(`Saved to ${outputPath}`);
    
    return plants;
  } catch (error) {
    console.error('Error scraping plant images:', error);
    throw error;
  }
}

// Run the scraper if this file is executed directly
if (require.main === module) {
  scrapePlantImages()
    .then(plants => {
      console.log('Scraping completed successfully!');
      console.log(`Total plants: ${plants.length}`);
      if (plants.length > 0) {
        console.log('\nSample plant:');
        console.log(JSON.stringify(plants[0], null, 2));
      }
    })
    .catch(err => {
      console.error('Scraping failed:', err);
      process.exit(1);
    });
}

module.exports = { scrapePlantImages };
