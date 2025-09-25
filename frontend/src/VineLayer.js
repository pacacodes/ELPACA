
import React, { useEffect, useState } from 'react';
import vineWiki from './plants/vine_wiki.json';
import vineEnsembl from './plants/vine_ensembl.json';
import vineList from './plants/vine.json';

function mergeVineData() {
  // Merge by scientific/common name, prioritizing wiki, then ensembl, then list
  const merged = [];
  vineWiki.forEach(wikiPlant => {
    const sci = wikiPlant.scientific || wikiPlant.scientific_name;
    const common = wikiPlant.common || wikiPlant.name;
    // Try to find matching in vineEnsembl
    const ensembl = vineEnsembl.find(e => (e.scientific_name || '').toLowerCase() === (sci || '').toLowerCase() || (e.name || '').toLowerCase() === (common || '').toLowerCase());
    // Try to find matching in vineList
    const list = vineList.find(l => (l.scientific || '').toLowerCase() === (sci || '').toLowerCase() || (l.common || '').toLowerCase() === (common || '').toLowerCase());
    merged.push({
      ...wikiPlant,
      ...ensembl,
      ...list
    });
  });
  return merged;
}

function VineLayer({ onPlantClick }) {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    setPlants(mergeVineData().slice(0, 6));
  }, []);
  return (
  <div style={{ padding: '1rem', minWidth: '500px', width: '500px', maxWidth: '500px', minHeight: '720px', height: '720px', maxHeight: '720px', boxSizing: 'border-box' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {plants.map((plant, idx) => (
          <li key={idx} style={{
            marginBottom: '1.2rem',
            background: '#e8f5e9',
            borderRadius: '8px',
            padding: '0.8rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            cursor: 'pointer'
          }}
          onClick={() => onPlantClick && onPlantClick(plant)}
          >
            {(plant.image || plant.photo) && (
              <img
                src={plant.image || plant.photo}
                alt={plant.common || plant.name}
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
              <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{plant.common || plant.name}</div>
              <div style={{ fontStyle: 'italic', color: '#555', fontSize: '0.98rem' }}>{plant.scientific || plant.scientific_name}</div>
              {plant.wiki && <a href={plant.wiki} target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', textDecoration: 'underline', fontSize: '0.95rem' }}>
                Wikipedia
              </a>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default VineLayer;
