import React from 'react';

function PlantDetailPopup({ open, pos, plant, onClose }) {
  if (!open || !plant) return null;
  const fields = [
    { label: 'Overall Plant', value: plant.photo, type: 'image' },
    { label: 'Flower', value: plant.flower, type: 'image' },
    { label: 'Leaf/Foliage', value: plant.leaf, type: 'image' },
    { label: 'Stem', value: plant.stem, type: 'image' },
    { label: 'Common Name', value: plant.common },
    { label: 'Scientific Name', value: plant.scientific },
    { label: 'Climate Zone', value: plant.climate },
    { label: 'Native Region', value: plant.region },
    { label: 'Soil Type', value: plant.soil },
    { label: 'Watering', value: plant.watering },
    { label: 'Sun', value: plant.sun },
    { label: 'Blurb', value: plant.about },
    { label: 'Growth Rate', value: plant.growth },
    { label: 'Life Cycle', value: plant.life },
    { label: 'Root Type', value: plant.root },
    { label: 'Classification', value: plant.classification },
    { label: 'Typical Use', value: plant.use },
    { label: 'Toxicity', value: plant.toxicity },
    { label: 'Companion Plants', value: plant.companion },
    { label: 'Antagonistic Plants', value: plant.antagonistic },
    { label: 'Genetic Code', value: plant.genetic },
    { label: 'Wiki Link', value: plant.wiki, type: 'link' },
  ];
  return (
    <div
      style={{
        position: 'absolute',
        left: pos.x + 130,
        top: pos.y,
        background: '#333333',
        borderRadius: '12px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
        padding: '2rem 2.5rem',
        minWidth: '500px',
        minHeight: '720px',
        height: '720px',
        maxHeight: '720px',
        overflowY: 'auto',
        zIndex: 1201,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        userSelect: 'none',
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          width: '28px',
          height: '28px',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          pointerEvents: 'auto',
        }}
        aria-label="Close plant detail"
      >
        <svg width="18" height="18" viewBox="0 0 18 18">
          <line x1="3" y1="3" x2="15" y2="15" stroke="white" strokeWidth="2" />
          <line x1="15" y1="3" x2="3" y2="15" stroke="white" strokeWidth="2" />
        </svg>
      </button>
      <div style={{width:'100%',textAlign:'center',fontWeight:'bold',color:'#fff',fontSize:'1.25rem',letterSpacing:'0.04em',marginBottom:'2.2rem',marginTop:'0.5rem',zIndex:1001,display:'flex',alignItems:'center',justifyContent:'center'}}>{plant.common || 'Common Name'}</div>
      <div style={{marginBottom:'0.5rem', color:'#fff'}}><strong>Scientific:</strong> {plant.scientific || 'Scientific Name'}</div>
      <div style={{width:'100%',marginTop:'1.2rem'}}>
        {fields.map((field, idx) => (
          <div key={field.label} style={{marginBottom:'1.1rem',display:'flex',alignItems:'center'}}>
            <div style={{width:'160px',fontWeight:'bold',color:'#a8be96',fontSize:'1.01em'}}>{field.label}:</div>
            <div style={{flex:1,minHeight:'2.2em',color:'#fff'}}>
              {field.type === 'image' ? (
                field.value ? <img src={field.value} alt={field.label} style={{maxHeight:'3.2em',maxWidth:'120px',borderRadius:'4px',objectFit:'cover'}} /> : <span style={{color:'#aaa'}}>No Image</span>
              ) : field.type === 'link' ? (
                field.value ? <a href={field.value} target="_blank" rel="noopener noreferrer" style={{ color: '#a8be96', textDecoration: 'underline', fontSize: '0.95rem' }}>Wikipedia</a> : <span style={{color:'#aaa'}}>No Link</span>
              ) : (
                field.value ? field.value : <span style={{color:'#aaa'}}>None</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlantDetailPopup;
