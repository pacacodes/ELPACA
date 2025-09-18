import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree, faCloud, faLeaf, faClover, faCarrot, faDisease, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';

function PermaculturePopup({
  popupOpen,
  setPopupOpen,
  popupPos,
  setPopupPos,
  dragging,
  setDragging,
  dragOffset,
  setDragOffset,
  activeSection,
  setActiveSection,
  activeProjectFolder,
  nativePlants,
  sectionList
}) {
  React.useEffect(() => {
    // Save plant selections and Wikipedia data when nativePlants and project are available
    if (activeProjectFolder && nativePlants && nativePlants.length > 0) {
      // Save plant selections
      fetch(`/api/projects/${encodeURIComponent(activeProjectFolder.name)}/plants`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nativePlants)
      });
      // Save Wikipedia entries if available
      nativePlants.forEach(plant => {
        if (plant.scientific && plant.wikipedia) {
          fetch('/api/wikipedia', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ scientific: plant.scientific, wikipedia: plant.wikipedia })
          });
        }
      });
    }
  }, [activeProjectFolder, nativePlants]);
  if (!popupOpen) return null;
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.3)',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: 'rgba(60,60,60,0.7)',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
          minWidth: '340px',
          minHeight: '600px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          position: 'absolute',
          left: popupPos.x,
          top: popupPos.y,
          cursor: dragging ? 'grabbing' : 'grab',
          userSelect: 'none',
        }}
        onMouseDown={e => {
          const closeBtn = e.currentTarget.querySelector('button[aria-label="Close popup"]');
          if (closeBtn && (e.target === closeBtn || closeBtn.contains(e.target))) return;
          setDragging(true);
          setDragOffset({ x: e.clientX - popupPos.x, y: e.clientY - popupPos.y });
        }}
      >
        <div style={{
          position: 'absolute',
          top: '18px',
          left: 0,
          width: '100%',
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#fff',
          fontSize: '1.25rem',
          letterSpacing: '0.04em',
          zIndex: 1001
        }}>
          Permaculture Layers
        </div>
        {/* Native plants display (always show for active project) */}
        {activeProjectFolder && (
          <div style={{marginTop:'3.5rem',marginBottom:'1.5rem',width:'100%'}}>
            <div style={{color:'#fff',fontWeight:'bold',fontSize:'1.08rem',marginBottom:'0.5rem'}}>Native Plants</div>
            <div style={{display:'flex',flexWrap:'wrap',gap:'0.5rem'}}>
              {nativePlants && nativePlants.length > 0 ? nativePlants.map((plant, idx) => (
                <span key={idx} style={{background:'#a8be96',color:'#fff',borderRadius:'6px',padding:'0.2rem 0.7rem',fontSize:'0.98rem'}}>{plant}</span>
              )) : <span style={{color:'#bbb'}}>No data</span>}
            </div>
          </div>
        )}
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
                    {section === 'Canopy' && (
                      <span style={{display:'flex',alignItems:'flex-end',gap:'0'}}>
                        <FontAwesomeIcon icon={faTree} style={{fontSize:'1.2em', color:'#fff'}} />
                        <FontAwesomeIcon icon={faTree} style={{fontSize:'0.88em', marginLeft: '-0.6em', marginTop: '0.32em', color:'#bdbdbd'}} />
                      </span>
                    )}
                    {section === 'Understory' && (
                      <span style={{display:'flex',alignItems:'flex-end',gap:'0'}}>
                        <FontAwesomeIcon icon={faTree} style={{fontSize:'1.2em', color:'#bdbdbd'}} />
                        <FontAwesomeIcon icon={faTree} style={{fontSize:'0.88em', marginLeft: '-0.6em', marginTop: '0.32em', color:'#fff'}} />
                      </span>
                    )}
                    {section === 'Shrub' && <FontAwesomeIcon icon={faCloud} />}
                    {section === 'Herbaceous' && <FontAwesomeIcon icon={faLeaf} />}
                    {section === 'Ground Cover' && <FontAwesomeIcon icon={faClover} />}
                    {section === 'Root Crop' && <FontAwesomeIcon icon={faCarrot} />}
                    {section === 'Vine' && <FontAwesomeIcon icon={faPagelines} />}
                    {section === 'Fungi' && <FontAwesomeIcon icon={faDisease} />}
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
        <div style={{width:'100%', height:'2.5rem'}}></div>
        <button
          onClick={() => setPopupOpen(false)}
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
          aria-label="Close popup"
        >
          <svg width="18" height="18" viewBox="0 0 18 18">
            <line x1="3" y1="3" x2="15" y2="15" stroke="white" strokeWidth="2" />
            <line x1="15" y1="3" x2="3" y2="15" stroke="white" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default PermaculturePopup;
