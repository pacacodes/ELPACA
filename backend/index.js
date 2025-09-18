
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Utility: Append a new user to users.json
async function appendUser(user) {
  const filePath = path.join(__dirname, 'data', 'users.json');
  let users = [];
  try {
    const content = await fs.promises.readFile(filePath, 'utf-8');
    users = JSON.parse(content);
  } catch (err) {
    if (err.code !== 'ENOENT') throw err;
  }
  users.push(user);
  await fs.promises.writeFile(filePath, JSON.stringify(users, null, 2));
}

// API: Append a new user (POST /api/users)
app.post('/api/users', async (req, res) => {
  const user = req.body;
  if (!user || !user.id) {
    return res.status(400).json({ error: 'Missing user data or id' });
  }
  try {
    await appendUser(user);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to append user', details: err.message });
  }
});

// Utility: Add or update a Wikipedia entry in wikipedia.json
async function upsertWikipediaEntry(entry) {
  const filePath = path.join(__dirname, 'data', 'wikipedia.json');
  let wikiData = {};
  try {
    const content = await fs.promises.readFile(filePath, 'utf-8');
    wikiData = JSON.parse(content);
  } catch (err) {
    if (err.code !== 'ENOENT') throw err;
  }
  // Use scientific name as key
  if (entry && entry.scientific && entry.wikipedia) {
    wikiData[entry.scientific] = entry.wikipedia;
    await fs.promises.writeFile(filePath, JSON.stringify(wikiData, null, 2));
  }
}

// API: Add or update a Wikipedia entry (POST /api/wikipedia)
app.post('/api/wikipedia', async (req, res) => {
  const entry = req.body;
  if (!entry || !entry.scientific || !entry.wikipedia) {
    return res.status(400).json({ error: 'Missing scientific or wikipedia data' });
  }
  try {
    await upsertWikipediaEntry(entry);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to upsert wikipedia entry', details: err.message });
  }
});

// Utility: Save JSON data to a file
function saveJsonToFile(filename, data) {
  const filePath = path.join(__dirname, 'data', filename);
  return fs.promises.writeFile(filePath, JSON.stringify(data, null, 2));
}

// Utility: Read JSON data from a file
async function readJsonFromFile(filename) {
  const filePath = path.join(__dirname, 'data', filename);
  const content = await fs.promises.readFile(filePath, 'utf-8');
  return JSON.parse(content);
}

// API: Save a user project (POST /api/projects)
app.post('/api/projects', async (req, res) => {
  const project = req.body;
  if (!project || !project.name) {
    return res.status(400).json({ error: 'Missing project data or name' });
  }
  try {
    await saveJsonToFile(`${project.name.replace(/\s+/g, '_')}.project.json`, project);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save project', details: err.message });
  }
});

// API: Get a user project (GET /api/projects/:name)
app.get('/api/projects/:name', async (req, res) => {
  const name = req.params.name;
  try {
    const project = await readJsonFromFile(`${name.replace(/\s+/g, '_')}.project.json`);
    res.json(project);
  } catch (err) {
    res.status(404).json({ error: 'Project not found', details: err.message });
  }
});

// API: Save plant selections for a project (POST /api/projects/:name/plants)
app.post('/api/projects/:name/plants', async (req, res) => {
  const name = req.params.name;
  const plants = req.body;
  if (!Array.isArray(plants)) {
    return res.status(400).json({ error: 'Plants data must be an array' });
  }
  try {
    await saveJsonToFile(`${name.replace(/\s+/g, '_')}.plants.json`, plants);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save plant selections', details: err.message });
  }
});

// API: Get plant selections for a project (GET /api/projects/:name/plants)
app.get('/api/projects/:name/plants', async (req, res) => {
  const name = req.params.name;
  try {
    const plants = await readJsonFromFile(`${name.replace(/\s+/g, '_')}.plants.json`);
    res.json(plants);
  } catch (err) {
    res.status(404).json({ error: 'Plant selections not found', details: err.message });
  }
});


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
    // Try to filter for canopy trees (9m+ or matching canopy keywords)
    function isCanopy(plant) {
      const canopyWords = ['canopy','overstory','tall tree','oak','hackberry','walnut','pecan','hickory','elm','maple','beech','chestnut','sycamore'];
      // Try to parse height if available
      const heightFields = [plant.height, plant.matureHeight, plant.maxHeight, plant.size, plant.height_m, plant.height_ft, plant['mature height']];
      for (const h of heightFields) {
        if (!h) continue;
        const m = /([0-9]+(?:\.[0-9]+)?)\s*(m|meter|meters)/i.exec(h);
        if (m && parseFloat(m[1]) >= 9) return true;
        const ft = /([0-9]+(?:\.[0-9]+)?)\s*(ft|feet|foot)/i.exec(h);
        if (ft && parseFloat(ft[1]) >= 30) return true;
        const range = /([0-9]+(?:\.[0-9]+)?)[-–]([0-9]+(?:\.[0-9]+)?)\s*(m|meter|meters|ft|feet|foot)/i.exec(h);
        if (range) {
          let v = parseFloat(range[2]);
          if (/ft|feet|foot/i.test(range[3])) v *= 0.3048;
          if (v >= 9) return true;
        }
      }
      // Fallback to keyword matching
      const fields = [plant.name, plant.scientific, plant.category, plant.layer, plant.type, plant.description];
      const text = fields.filter(Boolean).join(' ').toLowerCase();
      return canopyWords.some(m => text.includes(m));
    }
    // Cross-reference with Wikipedia
    const checked = [];
    // Try to get at least 3 canopy trees if possible
    const canopyCandidates = plants.filter(isCanopy);
    for (const plant of canopyCandidates) {
      const wikiTitle = await crossReferenceWikipedia(plant.scientific);
      if (wikiTitle) {
        checked.push({ ...plant, wikipedia: wikiTitle });
      }
      if (checked.length >= 3) break;
    }
    // If not enough, fill with other plants
    if (checked.length < 3) {
      for (const plant of plants) {
        if (checked.find(p => p.scientific === plant.scientific)) continue;
        const wikiTitle = await crossReferenceWikipedia(plant.scientific);
        if (wikiTitle) {
          checked.push({ ...plant, wikipedia: wikiTitle });
        }
        if (checked.length >= 3) break;
      }
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

