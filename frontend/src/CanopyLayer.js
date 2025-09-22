import React, { useEffect, useState } from 'react';

// Import the canopy_wiki.json data
import canopyPlants from './plants/canopy_wiki.json';

function CanopyLayer() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    // For now, just use the imported JSON directly
    setPlants(canopyPlants.slice(0, 3)); // Only show 3 examples
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>Canopy Layer Example Plants</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {plants.map((plant, idx) => (
          <li key={idx} style={{ marginBottom: '1.2rem', background: '#e8f5e9', borderRadius: '8px', padding: '0.8rem' }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{plant.common}</div>
            <div style={{ fontStyle: 'italic', color: '#555', fontSize: '0.98rem' }}>{plant.scientific}</div>
            <a href={plant.wiki} target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline', fontSize: '0.95rem' }}>
              Wikipedia
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CanopyLayer;
