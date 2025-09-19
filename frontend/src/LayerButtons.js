import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree, faCloud, faLeaf, faClover, faCarrot, faDisease } from '@fortawesome/free-solid-svg-icons';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';

const sectionIcons = {
  'Canopy': (
    <span style={{display:'flex',alignItems:'flex-end',gap:'0'}}>
      <FontAwesomeIcon icon={faTree} style={{fontSize:'1.2em', color:'#fff'}} />
      <FontAwesomeIcon icon={faTree} style={{fontSize:'0.88em', marginLeft: '-0.6em', marginTop: '0.32em', color:'#bdbdbd'}} />
    </span>
  ),
  'Understory': (
    <span style={{display:'flex',alignItems:'flex-end',gap:'0'}}>
      <FontAwesomeIcon icon={faTree} style={{fontSize:'1.2em', color:'#bdbdbd'}} />
      <FontAwesomeIcon icon={faTree} style={{fontSize:'0.88em', marginLeft: '-0.6em', marginTop: '0.32em', color:'#fff'}} />
    </span>
  ),
  'Shrub': <FontAwesomeIcon icon={faCloud} />, 
  'Herbaceous': <FontAwesomeIcon icon={faLeaf} />, 
  'Ground Cover': <FontAwesomeIcon icon={faClover} />, 
  'Root Crop': <FontAwesomeIcon icon={faCarrot} />, 
  'Vine': <FontAwesomeIcon icon={faPagelines} />, 
  'Fungi': <FontAwesomeIcon icon={faDisease} />
};

function LayerButtons({ sectionList, setActiveSection }) {
  return (
    <div style={{display:'flex',flexDirection:'column',gap:'0.7rem',marginTop:'1.5rem',width:'100%'}}>
      {sectionList.map(section => (
        <button
          key={section}
          style={{
            border: 'none',
            borderRadius: '6px',
            padding: '0.48rem 0.9rem',
            fontWeight: 'normal',
            fontSize: '0.98rem',
            cursor: 'pointer',
            boxShadow: '0 1px 4px rgba(0,0,0,0.10)',
            marginBottom: '0',
            transition: 'background 0.15s',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '0',
            justifyContent: 'flex-start',
            whiteSpace: 'nowrap',
            position: 'relative',
            minHeight: '2.6em'
          }}
          onClick={() => setActiveSection(section)}
        >
          <span style={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
            <span style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
            }}>
              <span style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '2.2em',
                marginRight: '0.7em',
              }}>
                {sectionIcons[section]}
              </span>
              <span style={{
                display: 'inline-block',
                width: '1.5px',
                height: '1.25em',
                background: 'currentColor',
                margin: '0 0.7em 0 0',
                verticalAlign: 'middle',
                opacity: 0.7
              }}></span>
              <span style={{whiteSpace:'nowrap'}}>{section}</span>
            </span>
          </span>
        </button>
      ))}
    </div>
  );
}

export default LayerButtons;
