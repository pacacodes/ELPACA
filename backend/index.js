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

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
