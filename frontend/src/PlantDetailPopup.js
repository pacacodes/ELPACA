import React from 'react';

function PlantDetailPopup({ open, pos, plant, onClose }) {
  if (!open || !plant) return null;
  // Normalize possible field names from all sources
  // Normalize classification from all possible sources
  const classification = plant.classification
    || plant.taxonomy
    || {
      kingdom: plant.kingdom,
      phylum: plant.phylum,
      class: plant.class,
      order: plant.order,
      family: plant.family,
      genus: plant.genus,
      species: plant.species
    };

  const fields = [
    { label: 'Climate Zone', value: plant.climate_zone || plant.climate || plant.zone || '' },
    { label: 'Native Region', value: plant.native_region || plant.region || plant.origin || '' },
    { label: 'Soil Type', value: plant.soil_type || plant.soil || '' },
    { label: 'Watering', value: plant.watering || '' },
    { label: 'Sun', value: plant.sun || '' },
    { label: 'Blurb', value: plant.about || plant.blurb || '' },
    { label: 'Growth Rate', value: plant.growth_rate || plant.growth || '' },
    { label: 'Life Cycle', value: plant.lifecycle || plant.life || '' },
    { label: 'Root Type', value: plant.root_type || plant.root || '' },
    { label: 'Classification', value: classification },
    { label: 'Typical Use', value: plant.typical_use || plant.use || '' },
    { label: 'Toxicity', value: plant.toxicity || '' },
    { label: 'Companion Plants', value: plant.companion_plants || plant.companion || '' },
    { label: 'Antagonistic Plants', value: plant.antagonistic_plants || plant.antagonistic || '' },
    { label: 'Genetic Code', value: plant.genetic_code || plant.genetic || '' },
    { label: 'Wiki Link', value: plant.wiki || '', type: 'link' },
  ];
  return (
    <div
      style={{
        position: 'absolute',
  left: pos.x + 400 + 15 - 400 + 10 + 5 + 100, // shift right by 100px for better alignment
        top: pos.y,
        background: '#333333',
        borderRadius: '12px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
        padding: '2rem 2.5rem 2rem 2.5rem',
  minWidth: '500px',
  width: '500px',
  maxWidth: '500px',
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
      <div style={{width:'100%',textAlign:'center',fontWeight:'bold',color:'#fff',fontSize:'1.25rem',letterSpacing:'0.04em',marginBottom:'0.7rem',marginTop:'0.5rem',zIndex:1001,display:'flex',alignItems:'center',justifyContent:'center'}}>{plant.common || 'Common Name'}</div>
      <div style={{marginBottom:'1.2rem', color:'#a8be96', fontStyle:'italic', textAlign:'center', fontSize:'1.08rem'}}>{plant.scientific || 'Scientific Name'}</div>

  <div style={{marginTop:'25px'}}>
        {/* Main plant image or placeholder circle labeled 'Overall' */}
  <div style={{width:'200px',height:'200px',borderRadius:'50%',overflow:'hidden',margin:'0 auto',marginBottom:'2.2rem',background:'#eee',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold',fontSize:'1.08em',color:'#aaa'}}>
          {plant.photo ? (
            <img src={plant.photo} alt="Overall Plant" style={{width:'100%',height:'100%',objectFit:'cover'}} />
          ) : (
            <span>Overall</span>
          )}
        </div>

        {/* Three detail images in smaller circles, spaced further down */}
  <div style={{display:'flex',justifyContent:'space-between',width:'90%',margin:'0 auto',marginBottom:'2.8rem',marginTop:'0.2rem'}}>
          {[{img:plant.flower,label:'Flower'},{img:plant.leaf,label:'Leaf'},{img:plant.stem,label:'Stem'}].map((detail,idx) => (
            <div key={detail.label} style={{width:'54px',height:'54px',borderRadius:'50%',overflow:'hidden',background:'#eee',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold',fontSize:'0.95em',color:'#aaa'}}>
              {detail.img ? (
                <img src={detail.img} alt={detail.label} style={{width:'100%',height:'100%',objectFit:'cover'}} />
              ) : (
                <span>{detail.label}</span>
              )}
            </div>
          ))}
        </div>
        <div style={{width:'calc(100% - 28px)',marginTop:'1.2rem',marginRight:'0',float:'right'}}>
          {fields.map((field, idx) => (
            <div key={field.label} style={{marginBottom:'1.1rem',display:'flex',alignItems:'center'}}>
              <div style={{width:'160px',fontWeight:'bold',color:'#a8be96',fontSize:'1.01em'}}>{field.label}:</div>
              <div style={{flex:1,minHeight:'2.2em',color:'#fff'}}>
                {field.label === 'Classification' && field.value && typeof field.value === 'object' ? (
                  <div style={{display:'flex',flexDirection:'column',gap:'0.2em'}}>
                    {['kingdom','phylum','class','order','family','genus','species'].map(key => (
                      field.value[key] ? (
                        <div key={key} style={{fontSize:'0.98em',color:'#c2e0b2'}}>
                          <span style={{fontWeight:'bold',color:'#a8be96',marginRight:'0.5em'}}>{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                          <span style={{color:'#fff'}}>{field.value[key]}</span>
                        </div>
                      ) : null
                    ))}
                  </div>
                ) : field.type === 'image' ? (
                  field.value ? <img src={field.value} alt={field.label} style={{maxHeight:'3.2em',maxWidth:'120px',borderRadius:'4px',objectFit:'cover'}} /> : <span style={{color:'#aaa'}}>No Image</span>
                ) : field.type === 'link' ? (
                  field.value ? <a href={field.value} target="_blank" rel="noopener noreferrer" style={{ color: '#a8be96', textDecoration: 'underline', fontSize: '0.95rem' }}>Wikipedia</a> : <span style={{color:'#aaa'}}>No Link</span>
                ) : Array.isArray(field.value) ? (
                  // Render arrays as comma-separated or as lists of objects
                  field.value.length === 0 ? <span style={{color:'#aaa'}}>None</span> :
                  typeof field.value[0] === 'object' ? (
                    <ul style={{margin:0,paddingLeft:'1em'}}>
                      {field.value.map((item, i) => (
                        <li key={i} style={{color:'#fff',fontSize:'0.98em'}}>
                          {Object.entries(item).map(([k,v]) => `${k}: ${Array.isArray(v) ? v.join(', ') : v}`).join('; ')}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    field.value.join(', ')
                  )
                ) : (
                  field.value ? field.value : <span style={{color:'#aaa'}}>None</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlantDetailPopup;
