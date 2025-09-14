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

app.post('/api/create-empty-file', (req, res) => {
  const fileName = req.query.name;
  if (!fileName) return res.status(400).json({ error: 'Missing file name' });
  const filePath = path.join(__dirname, '../saved_files', fileName);
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

