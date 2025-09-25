import React, { useEffect, useState } from 'react';
import understoryPlants from './plants/understory_wiki.json';

function UnderstoryLayer({ onPlantClick }) {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    setPlants(understoryPlants.slice(0, 3));
  }, []);
  return (
    <div style={{ padding: '1rem', minWidth: '500px', width: '500px', maxWidth: '500px', minHeight: '720px', height: '720px', maxHeight: '720px', boxSizing: 'border-box' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {plants.map((plant, idx) => (
          <li key={idx} style={{ marginBottom: '1.2rem', padding: 0 }}>
            <button
              style={{
                width: '100%',
                background: '#e0e0e0',
                border: 'none',
                borderRadius: '8px',
                padding: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                cursor: 'pointer',
                boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
                transition: 'background 0.15s',
                outline: 'none',
              }}
              onClick={() => onPlantClick && onPlantClick(plant)}
            >
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', alignItems: 'flex-start' }}>
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#222' }}>{plant.common}</div>
                <div style={{ fontStyle: 'italic', color: '#555', fontSize: '0.98rem' }}>{plant.scientific}</div>
                <a href={plant.wiki} target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline', fontSize: '0.95rem' }}>
                  Wikipedia
                </a>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UnderstoryLayer;
