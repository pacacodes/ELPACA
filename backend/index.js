const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// API endpoint to create empty project files (.rvt, .pln, .ifc)
// ...existing code...

// Create all project files, but .epc is the main file
app.post('/api/create-project-files', async (req, res) => {
  const { baseName } = req.body;
  if (!baseName) return res.status(400).json({ error: 'Missing baseName' });
  const files = [
    `${baseName}.epc`, // main file
    `${baseName}.pln`,
    `${baseName}.rvt`,
    `${baseName}.ifc`
  ];
  const results = {};
  for (const file of files) {
    const filePath = path.join(__dirname, '../saved_files', file);
    try {
      await fs.promises.writeFile(filePath, '', { flag: 'wx' });
      results[file] = 'created';
    } catch (err) {
      if (err.code === 'EEXIST') {
        results[file] = 'exists';
      } else {
        results[file] = 'error';
      }
    }
  }
  res.json({ success: true, mainFile: `${baseName}.epc`, files: results });
});

// API endpoint to fetch native plants by address
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// Helper: Geocode address to lat/lon using OpenStreetMap Nominatim
async function geocodeAddress(address) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'ELPACA-app/1.0 (your-email@example.com)'
    }
  });
  const data = await res.json();
  if (data && data.length > 0) {
    return { lat: data[0].lat, lon: data[0].lon };
  }
  return null;
}

// Helper: Query iNaturalist for plants near lat/lon
async function getNativePlants(lat, lon) {
  const url = `https://api.inaturalist.org/v1/observations?lat=${lat}&lng=${lon}&taxon_id=47126&per_page=10&order=desc&order_by=created_at`;
  const res = await fetch(url);
  const data = await res.json();
  // Get unique plant species
  const seen = new Set();
  const plants = [];
  for (const obs of data.results) {
    const taxon = obs.taxon;
    if (taxon && taxon.name && !seen.has(taxon.name)) {
      seen.add(taxon.name);
      plants.push({
        name: taxon.preferred_common_name || taxon.name,
        scientific: taxon.name,
        image: taxon.default_photo ? taxon.default_photo.medium_url : null
      });
      if (plants.length >= 6) break;
    }
  }
  return plants;
}

// Helper: Cross-reference plant with Wikipedia
async function crossReferenceWikipedia(scientificName) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(scientificName)}&format=json&origin=*`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.query && data.query.search && data.query.search.length > 0) {
    // Return Wikipedia page title
    return data.query.search[0].title;
  }
  return null;
}

app.post('/api/native-plants', async (req, res) => {
  try {
    console.log('POST /api/native-plants body:', req.body);
    const { address } = req.body;
    if (!address) {
      console.error('Missing address in request body');
      return res.status(400).json({ error: 'Missing address' });
    }
    const geo = await geocodeAddress(address);
    if (!geo) {
      console.error('Could not geocode address:', address);
      return res.status(404).json({ error: 'Could not geocode address' });
    }
    const plants = await getNativePlants(geo.lat, geo.lon);
    // Cross-reference with Wikipedia
    const checked = [];
    for (const plant of plants) {
      const wikiTitle = await crossReferenceWikipedia(plant.scientific);
      if (wikiTitle) {
        checked.push({ ...plant, wikipedia: wikiTitle });
      }
      if (checked.length >= 3) break;
    }
    res.json({ plants: checked });
  } catch (err) {
    console.error('Error in /api/native-plants:', err);
    res.status(500).json({ error: 'Failed to fetch native plants', details: err.message });
  }
});


app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});

