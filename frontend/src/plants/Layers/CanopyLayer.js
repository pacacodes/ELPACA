
import React, { useEffect, useState } from 'react';
import canopyJson from './plants/canopy.json';
import canopyWiki from './plants/canopy_wiki.json';
import canopyEnsembl from './plants/canopy_ensembl.json';

function mergePlantsByScientificName(...plantArrays) {
  const plantMap = new Map();
  for (const arr of plantArrays) {
    for (const plant of arr) {
      // Use scientific name or scientific_name as key
      const sci = plant.scientific || plant.scientific_name;
      if (!sci) continue;
      if (!plantMap.has(sci)) {
        plantMap.set(sci, { ...plant });
      } else {
        const existing = plantMap.get(sci);
        // Merge fields: prefer non-empty, merge arrays/objects
        for (const key of Object.keys(plant)) {
          if (plant[key] == null) continue;
          if (Array.isArray(plant[key])) {
            existing[key] = Array.isArray(existing[key]) ? [...existing[key], ...plant[key]].filter(Boolean) : [...plant[key]];
          } else if (typeof plant[key] === 'object' && plant[key] !== null) {
            existing[key] = { ...plant[key], ...existing[key] };
          } else if (!existing[key]) {
            existing[key] = plant[key];
          }
        }
      }
    }
  }
  // Normalize field names for popup
  return Array.from(plantMap.values()).map(p => ({
    ...p,
    common: p.common || p.name || '',
    scientific: p.scientific || p.scientific_name || '',
    image: p.image || p.photo || '',
    about: p.about || p.blurb || '',
    classification: p.classification || null,
    wiki: p.wiki || '',
    // Add/normalize more fields as needed
  }));
}

function CanopyLayer({ onPlantClick }) {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const merged = mergePlantsByScientificName(canopyJson, canopyWiki, canopyEnsembl);
    setPlants(merged);
  }, []);

  return (
  <div style={{ padding: '1rem', minWidth: '400px', width: '400px', maxWidth: '400px', minHeight: '720px', height: '720px', maxHeight: '720px', boxSizing: 'border-box' }}>
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
