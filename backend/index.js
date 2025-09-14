const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Example plant data
const plants = [
  { id: 1, name: 'Monstera', description: 'Tropical plant with split leaves.' },
  { id: 2, name: 'Fiddle Leaf Fig', description: 'Popular indoor tree with large leaves.' },
  { id: 3, name: 'Snake Plant', description: 'Hardy plant with upright leaves.' }
];

// API endpoint to get all plants
app.get('/api/plants', (req, res) => {
  res.json(plants);
});

// Proxy Wikipedia summary requests to avoid CORS issues
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

app.get('/api/wiki-summary', async (req, res) => {
  const { title } = req.query;
  if (!title) return res.status(400).json({ error: 'Missing title parameter' });
  try {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
    const wikiRes = await fetch(url);
    if (!wikiRes.ok) throw new Error('Not found');
    const data = await wikiRes.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch Wikipedia summary' });
  }
});


const fs = require('fs');
const path = require('path');

app.post('/api/create-empty-file', (req, res) => {
  const fileName = req.query.name;
  if (!fileName) return res.status(400).json({ error: 'Missing file name' });
  const filePath = path.join(__dirname, '../projects', fileName);
  fs.writeFile(filePath, '', { flag: 'wx' }, err => {
    if (err && err.code !== 'EEXIST') {
      return res.status(500).json({ error: 'Failed to create file' });
    }
    res.json({ success: true, file: fileName });
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
