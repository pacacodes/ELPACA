// getLayerPlants.js
// Utility to load and merge all JSON files for a given layer

export async function getLayerPlants(layer) {
  // Map layer names to file patterns
  const fileMap = {
    'Canopy': ['canopy.json', 'canopy_ensembl.json', 'canopy_wiki.json'],
    'Understory': ['understory.json', 'understory_ensembl.json', 'understory_wiki.json'],
    'Shrub': ['shrub.json', 'shrub_ensembl.json', 'shrub_wiki.json'],
    'Herbaceous': ['herbaceous.json', 'herbaceous_ensembl.json', 'herbaceous_wiki.json'],
    'Ground Cover': ['groundcover.json', 'groundcover_ensembl.json', 'groundcover_wiki.json'],
    'Root Crop': ['rootcrop.json', 'rootcrop_ensembl.json', 'rootcrop_wiki.json'],
    'Vine': ['vine.json', 'vine_ensembl.json', 'vine_wiki.json'],
    'Fungi': ['fungi.json', 'fungi_ensembl.json', 'fungi_wiki.json']
  };
  const files = fileMap[layer] || [];
  let allPlants = [];
  for (const file of files) {
    try {
      const res = await fetch(`/src/plants/${file}`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          allPlants = allPlants.concat(data);
        }
      }
    } catch (e) {
      // Ignore errors for missing files
    }
  }
  return allPlants;
}

// Usage:
// const plants = await getLayerPlants('Canopy');
