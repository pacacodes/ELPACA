import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import LayerButtons from './LayerButtons';
import LayerDetailPopup from './LayerDetailPopup';

// Map section to icon (copied from LayerButtons)
const sectionIcons = {
  'Canopy': (
    <span style={{display:'flex',alignItems:'flex-end',gap:'0'}}>
      <FontAwesomeIcon icon={require('@fortawesome/free-solid-svg-icons').faTree} style={{fontSize:'1.2em', color:'#fff'}} />
      <FontAwesomeIcon icon={require('@fortawesome/free-solid-svg-icons').faTree} style={{fontSize:'0.88em', marginLeft: '-0.6em', marginTop: '0.32em', color:'#bdbdbd'}} />
    </span>
  ),
  // Add other section icons as needed
};

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

  // Drag and drop logic for both popups
  React.useEffect(() => {
    if (!dragging) return;
    function onMouseMove(e) {
      setPopupPos({ x: e.clientX - dragOffset.x, y: e.clientY - dragOffset.y });
    }
    function onMouseUp() {
      setDragging(false);
    }
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [dragging, dragOffset, setPopupPos, setDragging]);
  const [detailOpen, setDetailOpen] = React.useState(false);
  const [detailSection, setDetailSection] = React.useState(null);
  const [detailPos, setDetailPos] = React.useState({ x: 0, y: 0 });

  // Removed broken sectionIcons and stray JSX that caused unterminated JSX error

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
      {/* Main Permaculture Popup */}
      <div
        style={{
          position: 'absolute',
          left: popupPos.x,
          top: popupPos.y,
          background: 'rgba(60,60,60,0.7)',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
          minWidth: '340px',
          minHeight: '600px',
          userSelect: 'none',
          cursor: dragging ? 'grabbing' : 'grab',
          position: 'absolute',
          zIndex: 1100,
        }}
        onMouseDown={e => {
          const closeBtn = document.querySelector('button[aria-label="Close layer detail"]');
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
            <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
              {nativePlants && nativePlants.length > 0 ? nativePlants.map((plant, idx) => {
                let common = plant.name || plant.common || (typeof plant === 'string' ? plant : '');
                let sci = plant.scientific || '';
                let wikiLink = plant.wikipedia ? <a href={plant.wikipedia} target="_blank" rel="noopener noreferrer" style={{color:'#fff',textDecoration:'underline',fontSize:'0.92rem'}}>Wikipedia</a> : null;
                return (
                  <div key={idx} style={{background:'#a8be96',color:'#fff',borderRadius:'6px',padding:'0.32rem 0.9rem',fontSize:'0.98rem',display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'0.1rem',minWidth:'180px'}}>
                    <span style={{fontWeight:'bold'}}>{common}</span>
                    <span style={{fontStyle:'italic',fontSize:'0.96rem'}}>{sci}</span>
                    {wikiLink && <span>{wikiLink}</span>}
                  </div>
                );
              }) : <span style={{color:'#bbb'}}>No data</span>}
            </div>
          </div>
        )}
        <LayerButtons
          sectionList={sectionList}
          setActiveSection={section => {
            setActiveSection(section);
            setDetailSection(section);
            setDetailOpen(true);
          }}
        />
        <div style={{width:'100%', height:'2.5rem'}}></div>
        {/* Only show close button if detail popup is not open */}
        {!detailOpen && (
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
              zIndex: 1102,
            }}
            aria-label="Close popup"
          >
            <svg width="18" height="18" viewBox="0 0 18 18">
              <line x1="3" y1="3" x2="15" y2="15" stroke="white" strokeWidth="2" />
              <line x1="15" y1="3" x2="3" y2="15" stroke="white" strokeWidth="2" />
            </svg>
          </button>
        )}
      </div>
      {/* Layer Detail Popup, always fixed to the right of the main popup, outside the main popup div */}
      {detailOpen && (
        <LayerDetailPopup
          open={detailOpen}
          pos={{ x: popupPos.x + 340 + 32 + 85 - 34 - 34 + 17, y: popupPos.y }}
          section={detailSection}
          icon={detailSection ? sectionIcons[detailSection] : null}
          onClose={() => setDetailOpen(false)}
          onDragStart={e => {
            setDragging(true);
            setDragOffset({ x: e.clientX - popupPos.x, y: e.clientY - popupPos.y });
          }}
        />
      )}
    </div>
  );
}

export default PermaculturePopup;
