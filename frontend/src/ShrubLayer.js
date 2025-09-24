import React, { useEffect, useState } from 'react';
import shrubPlants from './plants/shrub_wiki.json';

function ShrubLayer() {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    setPlants(shrubPlants.slice(0, 3));
  }, []);
  return (
    <div style={{ padding: '1rem' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {plants.map((plant, idx) => (
          <li key={idx} style={{
            marginBottom: '1.2rem',
            background: '#e8f5e9',
            borderRadius: '8px',
            padding: '0.8rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            {plant.image && (
              <img
                src={plant.image}
                alt={plant.common}
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid #b2c2a4',
                  background: '#fff',
                  flexShrink: 0
                }}
              />
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{plant.common}</div>
              <div style={{ fontStyle: 'italic', color: '#555', fontSize: '0.98rem' }}>{plant.scientific}</div>
              <a href={plant.wiki} target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline', fontSize: '0.95rem' }}>
                Wikipedia
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ShrubLayer;
