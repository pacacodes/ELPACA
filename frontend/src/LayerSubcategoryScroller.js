// LayerSubcategoryScroller.js
// Displays plant buttons grouped by subcategory with horizontal scroll and subtitle
import React from 'react';

export function LayerSubcategoryScroller({ subcategory, plants, onPlantClick }) {
  return (
    <div style={{marginBottom: '2.2rem'}}>
      <div style={{fontWeight:'bold',color:'#fff',fontSize:'1.08rem',marginBottom:'0.7rem',marginLeft:'0.2rem'}}>{subcategory}</div>
      <div style={{display:'flex',overflowX:'auto',gap:'0.7rem',paddingBottom:'0.2rem'}}>
        {plants.map(plant => (
          <button
            key={plant.id || plant.name}
            style={{
              minWidth: '120px',
              maxWidth: '140px',
              height: '6.2em',
              border: 'none',
              borderRadius: '6px',
              padding: '0.5em 0.4em',
              fontSize: '0.98rem',
              background: '#fff',
              color: '#333',
              boxShadow: '0 1px 4px rgba(0,0,0,0.10)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              marginRight: '0',
              marginLeft: '0',
              whiteSpace: 'nowrap',
              transition: 'background 0.15s',
            }}
            onClick={() => onPlantClick(plant)}
          >
            <div style={{width:'100%',height:'2.8em',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'0.3em'}}>
              {plant.photo ? (
                <img src={plant.photo} alt={plant.name || plant.common || 'Plant'} style={{maxHeight:'2.6em',maxWidth:'90%',borderRadius:'4px',objectFit:'cover'}} />
              ) : (
                <div style={{width:'2.6em',height:'2.6em',background:'#eee',borderRadius:'4px',display:'flex',alignItems:'center',justifyContent:'center',color:'#aaa',fontSize:'0.9em'}}>No Photo</div>
              )}
            </div>
            <span style={{fontWeight:'bold',fontSize:'1.05em',marginBottom:'0.1em'}}>{plant.common || plant.name || 'Common Name'}</span>
            <span style={{fontSize:'0.92em',color:'#666'}}>{plant.scientific || 'Scientific Name'}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// Usage:
// <LayerSubcategoryScroller subcategory="Native Region" plants={plants} onPlantClick={fn} />
