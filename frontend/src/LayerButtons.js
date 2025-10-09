import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree, faCloud, faLeaf, faClover, faCarrot, faDisease } from '@fortawesome/free-solid-svg-icons';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';

const sectionIcons = {
  'Canopy': (
    <span style={{display:'flex',alignItems:'flex-end',gap:'0'}}>
      <FontAwesomeIcon icon={faTree} style={{fontSize:'1.2em', color:'#fff'}} />
      <FontAwesomeIcon icon={faTree} style={{fontSize:'0.88em', marginLeft: '-0.6em', marginTop: '0.32em', color:'#4a4a4a'}} />
    </span>
  ),
  'Understory': (
    <span style={{display:'flex',alignItems:'flex-end',gap:'0'}}>
      <FontAwesomeIcon icon={faTree} style={{fontSize:'1.2em', color:'#4a4a4a'}} />
      <FontAwesomeIcon icon={faTree} style={{fontSize:'0.88em', marginLeft: '-0.6em', marginTop: '0.32em', color:'#fff'}} />
    </span>
  ),
  'Shrub': <FontAwesomeIcon icon={faCloud} style={{color:'#8FBC8F'}} />, 
  'Herbaceous': <FontAwesomeIcon icon={faLeaf} style={{color:'#4a4a4a'}} />, 
  'Ground Cover': <FontAwesomeIcon icon={faClover} style={{color:'#4a4a4a'}} />, 
  'Root Crop': <FontAwesomeIcon icon={faCarrot} style={{color:'#4a4a4a'}} />, 
  'Vine': <FontAwesomeIcon icon={faPagelines} style={{color:'#4a4a4a'}} />, 
  'Fungi': <FontAwesomeIcon icon={faDisease} style={{color:'#4a4a4a'}} />
};

function LayerButtons({ sectionList, setActiveSection }) {
  return (
  <div style={{display:'flex',flexDirection:'column',gap:'0.7rem',marginTop:'1.5rem',width:'100%', padding: 0, boxSizing: 'border-box'}}>
      {sectionList.map(section => (
        <button
          key={section}
          style={{
            border: 'none',
            borderRadius: '6px',
            padding: '0.82rem 0.9rem',
            fontWeight: 'normal',
            fontSize: '1.09rem',
            cursor: 'pointer',
            boxShadow: '0 1px 4px rgba(0,0,0,0.10)',
            marginBottom: '0',
            transition: 'background 0.15s',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.18em',
            justifyContent: 'center',
            whiteSpace: 'nowrap',
            position: 'relative',
            minHeight: '2.7em',
            boxSizing: 'border-box'
          }}
          onClick={() => setActiveSection(section)}
        >
          <span style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            width:'100%',
            boxSizing: 'border-box'
          }}>
            <span style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '2.2em',
              marginBottom: '0.1em',
            }}>
              {sectionIcons[section]}
            </span>
            <span style={{whiteSpace:'nowrap', display:'block', textAlign:'center'}}>{section}</span>
          </span>
        </button>
      ))}
    </div>
  );
}

export default LayerButtons;
