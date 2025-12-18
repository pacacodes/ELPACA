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

  // Define the order for each column
  const leftColumnOrder = ['Native Region', 'Climate Zone', 'Soil Type', 'Root Type'];
  const rightColumnOrder = ['Sun', 'Watering', 'Growth Rate', 'Life Cycle'];
  const leftExtraField = 'Toxicity';
  const rightExtraField = 'Typical Use';
  // All other fields to be appended after the custom order
  const fieldDefs = [
    { label: 'Native Region', value: plant.native_region || plant.region || plant.origin || '' },
    { label: 'Climate Zone', value: plant.climate_zone || plant.climate || plant.zone || '' },
    { label: 'Soil Type', value: plant.soil_type || plant.soil || '' },
    { label: 'Root Type', value: plant.root_type || plant.root || '' },
    { label: 'Sun', value: plant.sun || '' },
    { label: 'Watering', value: plant.watering || '' },
    { label: 'Growth Rate', value: plant.growth_rate || plant.growth || '' },
    { label: 'Life Cycle', value: plant.lifecycle || plant.life || '' },
    { label: 'Blurb', value: plant.about || plant.blurb || '' },
    { label: 'Classification', value: classification },
    { label: 'Typical Use', value: plant.typical_use || plant.use || '' },
    { label: 'Toxicity', value: plant.toxicity || '' },
    { label: 'Companion Plants', value: plant.companion_plants || plant.companion || '' },
    { label: 'Antagonistic Plants', value: plant.antagonistic_plants || plant.antagonistic || '' },
    { label: 'Genetic Code', value: plant.genetic_code || plant.genetic || '' },
    { label: 'Wiki Link', value: plant.wiki || '', type: 'link' },
  ];
  // Helper to get fields by order, then append any not in the order
  // Helper to get fields by order, then append any not in the order and not already used
  function getFieldsByOrder(order, excludeLabels = new Set()) {
    const ordered = order.map(label => fieldDefs.find(f => f.label === label)).filter(Boolean);
    const usedLabels = new Set([...excludeLabels, ...order]);
    const rest = fieldDefs.filter(f => !usedLabels.has(f.label));
    return [...ordered, ...rest];
  }
  // Remove right column fields from left column if present
  const rightColumnSet = new Set(rightColumnOrder);
  // Remove right column fields from left column if present (no duplicates)
  // Remove extra fields from the base lists so they only appear in the intended spot
  const extraFields = new Set(['Toxicity', 'Typical Use', 'Blurb', 'Classification', 'Companion Plants', 'Antagonistic Plants']);
  let leftFields = getFieldsByOrder(leftColumnOrder.filter(label => !rightColumnSet.has(label))).filter(f => !rightColumnSet.has(f.label) && !extraFields.has(f.label));
  let leftLabels = new Set(leftFields.map(f => f.label));
  let rightFields = getFieldsByOrder(rightColumnOrder, leftLabels).filter(f => !extraFields.has(f.label));
  // Insert blank row after Root Type and then Toxicity, then another blank row and Blurb
  const blankRow = { label: '', value: '', isBlank: true };
  const toxicityField = fieldDefs.find(f => f.label === leftExtraField);
  const blurbField = fieldDefs.find(f => f.label === 'Blurb');
  if (toxicityField) {
    const rootTypeIdx = leftFields.findIndex(f => f.label === 'Root Type');
    if (rootTypeIdx !== -1) {
      leftFields = [
        ...leftFields.slice(0, rootTypeIdx + 1),
        toxicityField,
        blankRow,
        blurbField,
        ...leftFields.slice(rootTypeIdx + 1)
      ];
    } else {
      leftFields = [...leftFields, toxicityField, blankRow, blurbField];
    }
    leftLabels = new Set(leftFields.map(f => f.label));
  }
  // Add typical use to right, then a blank row and Classification
  const typicalUseField = fieldDefs.find(f => f.label === rightExtraField);
  const classificationField = fieldDefs.find(f => f.label === 'Classification');
  if (typicalUseField) {
    rightFields = [...rightFields, typicalUseField, blankRow, classificationField];
  }
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
  <div style={{position:'relative', width:'320px', height:'220px', margin:'0 auto 2.2rem 0 -100px'}}>
          {/* Main plant image or placeholder circle labeled 'Overall' */}
          <div style={{width:'320px',height:'320px',borderRadius:'50%',overflow:'hidden',background:'#eee',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold',fontSize:'1.28em',color:'#aaa',position:'absolute',left:0,top:0}}>
            {plant.photo ? (
              <img src={plant.photo} alt="Overall Plant" style={{width:'100%',height:'100%',objectFit:'cover'}} />
            ) : (
              <span>Overall</span>
            )}
          </div>
          {/* Three detail images in a vertical column, up and further to the right, and larger */}
          <div style={{position:'absolute', left:'375px', top:'10px', display:'flex', flexDirection:'column', gap:'26px'}}>
            {[{img:plant.flower,label:'Flower'},{img:plant.leaf,label:'Leaf'},{img:plant.stem,label:'Stem'}].map((detail,idx) => (
              <div key={detail.label} style={{width:'86px',height:'86px',borderRadius:'50%',overflow:'hidden',background:'#eee',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold',fontSize:'1.18em',color:'#aaa'}}>
                {detail.img ? (
                  <img src={detail.img} alt={detail.label} style={{width:'100%',height:'100%',objectFit:'cover'}} />
                ) : (
                  <span>{detail.label}</span>
                )}
              </div>
            ))}
          </div>
  </div>
  {/* Add extra space below the image group */}
  <div style={{height:'100px'}}></div>
  <div style={{width:'100%',marginTop:'61.2px',display:'flex',gap:'2.5rem',justifyContent:'center'}}>
          <div style={{flex:1,minWidth:'0',maxWidth:'50%'}}>
            {leftFields.map((field, idx) => (
              field.isBlank ? (
                <div key={idx} style={{marginBottom:'1.1rem',height:'1.1rem'}}></div>
              ) : (
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
              )
            ))}
          </div>
          <div style={{flex:1,minWidth:'0',maxWidth:'50%'}}>
            {rightFields.map((field, idx) => (
              field.isBlank ? (
                <div key={idx} style={{marginBottom:'1.1rem',height:'1.1rem'}}></div>
              ) : (
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
              )
            ))}
          </div>
        </div>

        {/* Single column for companion and antagonistic plants */}
        <div style={{width:'100%',marginTop:'2.5rem',maxWidth:'600px',marginLeft:'auto',marginRight:'auto'}}>
          <div style={{height:'1.1rem'}}></div>
          {/* Companion Plants */}
          {(() => {
            const companionField = fieldDefs.find(f => f.label === 'Companion Plants');
            if (!companionField) return null;
            return (
              <div style={{marginBottom:'1.1rem',display:'flex',alignItems:'center'}}>
                <div style={{width:'160px',fontWeight:'bold',color:'#a8be96',fontSize:'1.01em'}}>Companion Plants:</div>
                <div style={{flex:1,minHeight:'2.2em',color:'#fff'}}>
                  {Array.isArray(companionField.value) ? (
                    companionField.value.length === 0 ? <span style={{color:'#aaa'}}>None</span> :
                    typeof companionField.value[0] === 'object' ? (
                      <ul style={{margin:0,paddingLeft:'1em'}}>
                        {companionField.value.map((item, i) => (
                          <li key={i} style={{color:'#fff',fontSize:'0.98em'}}>
                            {Object.entries(item).map(([k,v]) => `${k}: ${Array.isArray(v) ? v.join(', ') : v}`).join('; ')}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      companionField.value.join(', ')
                    )
                  ) : (
                    companionField.value ? companionField.value : <span style={{color:'#aaa'}}>None</span>
                  )}
                </div>
              </div>
            );
          })()}
          <div style={{height:'1.1rem'}}></div>
          {/* Antagonistic Plants */}
          {(() => {
            const antagonisticField = fieldDefs.find(f => f.label === 'Antagonistic Plants');
            if (!antagonisticField) return null;
            return (
              <div style={{marginBottom:'1.1rem',display:'flex',alignItems:'center'}}>
                <div style={{width:'160px',fontWeight:'bold',color:'#a8be96',fontSize:'1.01em'}}>Antagonistic Plants:</div>
                <div style={{flex:1,minHeight:'2.2em',color:'#fff'}}>
                  {Array.isArray(antagonisticField.value) ? (
                    antagonisticField.value.length === 0 ? <span style={{color:'#aaa'}}>None</span> :
                    typeof antagonisticField.value[0] === 'object' ? (
                      <ul style={{margin:0,paddingLeft:'1em'}}>
                        {antagonisticField.value.map((item, i) => (
                          <li key={i} style={{color:'#fff',fontSize:'0.98em'}}>
                            {Object.entries(item).map(([k,v]) => `${k}: ${Array.isArray(v) ? v.join(', ') : v}`).join('; ')}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      antagonisticField.value.join(', ')
                    )
                  ) : (
                    antagonisticField.value ? antagonisticField.value : <span style={{color:'#aaa'}}>None</span>
                  )}
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
}

export default PlantDetailPopup;
