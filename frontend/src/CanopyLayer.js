import React, { useEffect, useState } from 'react';

// Import the canopy_wiki.json data
import canopyJson from './plants/canopy.json';
import canopyWiki from './plants/canopy_wiki.json';
import canopyEnsembl from './plants/canopy_ensembl.json';

function CanopyLayer({ onPlantClick }) {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    // Merge all sources, deduplicate by scientific name
    const allPlants = [...canopyJson, ...canopyWiki, ...canopyEnsembl];
    const seen = new Set();
    const merged = allPlants.filter(p => {
      if (!p.scientific) return false;
      if (seen.has(p.scientific)) return false;
      seen.add(p.scientific);
      return true;
    });
    setPlants(merged);
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
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

export default CanopyLayer;
