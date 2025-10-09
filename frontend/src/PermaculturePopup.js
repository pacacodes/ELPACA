import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import LayerButtons from './LayerButtons';
import LayerDetailPopup from './LayerDetailPopup';
import CanopyLayer from './CanopyLayer';
import UnderstoryLayer from './UnderstoryLayer';
import ShrubLayer from './ShrubLayer';
import HerbaceousLayer from './HerbaceousLayer';
import GroundcoverLayer from './GroundcoverLayer';
import RootcropLayer from './RootcropLayer';
import VineLayer from './VineLayer';
import FungiLayer from './FungiLayer';

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
  sectionList,
  onPlantClick,
  plantDetailPopupOpen,
  collapsed,
  setCollapsed,
  layerCollapsed,
  setLayerCollapsed
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

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Service Button in bottom left */}
      <button
        style={{
          position: 'fixed',
          left: 32,
          bottom: 32,
          zIndex: 1200,
          background: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: 56,
          height: 56,
          boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={() => setOpen(true)}
        aria-label="Open Permaculture Popup"
      >
        <FontAwesomeIcon icon={faPlus} color="#23272A" style={{ fontSize: '1.6em' }} />
      </button>

      {/* Paper background popup section */}
      {open && (
        <div
          style={{
            position: 'fixed',
            left: 80,
            bottom: 100,
            zIndex: 1201,
            background: '#f5f5f5',
            borderRadius: '16px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
            minWidth: '340px',
            minHeight: '240px', // Reduced from 320px to 240px
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div style={{ fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '1.5rem', color: '#23272A' }}>
            Permaculture Layers
          </div>
          {/* Add popup content here */}
          <button
            onClick={() => setOpen(false)}
            style={{
              position: 'absolute',
              top: 18,
              right: 18,
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
              zIndex: 1202,
            }}
            aria-label="Close popup"
          >
            <svg width="18" height="18" viewBox="0 0 18 18">
              <line x1="3" y1="3" x2="15" y2="15" stroke="#23272A" strokeWidth="2" />
              <line x1="15" y1="3" x2="3" y2="15" stroke="#23272A" strokeWidth="2" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
        {/* Title or rotated bar */}
        {!collapsed && (
          <div style={{
            width: '100%',
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#fff',
            fontSize: '1.25rem',
            letterSpacing: '0.04em',
            marginBottom: '2.2rem',
            marginTop: '0.5rem',
            zIndex: 1001
          }}>
            Permaculture Layers
          </div>
        )}
        {collapsed && (
          <div
            style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              height: '100%',
              minHeight: '100%',
              maxHeight: '100%',
              display: 'flex',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              letterSpacing: '0.04em',
              cursor: 'pointer',
              width: '48px',
              textAlign: 'center',
              marginTop: 0,
              position: 'relative',
              boxSizing: 'border-box',
              padding: 0,
            }}
            onClick={() => setCollapsed(false)}
          >
            <span style={{
              width:'100%',
              textAlign:'center',
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              height:'100%',
            }}>Permaculture Layers</span>
          </div>
        )}
        {/* Collapse/close button logic */}
        {detailOpen && !collapsed && (
          <button
            onClick={() => setCollapsed(true)}
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
            aria-label="Collapse permaculture popup"
          >
            <svg width="18" height="18" viewBox="0 0 18 18">
              <rect x="4" y="8" width="10" height="2" rx="1" fill="white" />
            </svg>
          </button>
        )}
        {!detailOpen && !collapsed && (
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
        {/* (Removed duplicate always-present title. Title is now only shown above when not collapsed, or as rotated bar when collapsed.) */}
        {/* Native plants removed. Only show title and buttons. */}
        {!collapsed && (
          <LayerButtons
            sectionList={sectionList}
            setActiveSection={section => {
              setActiveSection(section);
              setDetailSection(section);
              setDetailOpen(true);
            }}
          />
        )}
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
  // Removed unreachable legacy popup code
      {/* Layer Detail Popup, always fixed to the right of the main popup, outside the main popup div */}
      {detailOpen && (
        <LayerDetailPopup
          open={detailOpen}
          collapsed={layerCollapsed}
          pos={{
            x: popupPos.x + (collapsed ? 48 : 340) + (collapsed ? 15 : 80),
            y: popupPos.y
          }}
          section={detailSection}
          icon={detailSection ? sectionIcons[detailSection] : null}
          onClose={() => setLayerCollapsed(false)}
          onCollapse={() => setLayerCollapsed(true)}
          onDragStart={e => {
            setDragging(true);
            setDragOffset({ x: e.clientX - popupPos.x, y: e.clientY - popupPos.y });
          }}
        >
          {/* Render the correct layer component based on detailSection */}
          {detailSection === 'Canopy' && <CanopyLayer onPlantClick={onPlantClick} />}
          {detailSection === 'Understory' && <UnderstoryLayer onPlantClick={onPlantClick} />}
          {detailSection === 'Shrub' && <ShrubLayer onPlantClick={onPlantClick} />}
          {detailSection === 'Herbaceous' && <HerbaceousLayer onPlantClick={onPlantClick} />}
          {detailSection === 'Ground Cover' && <GroundcoverLayer onPlantClick={onPlantClick} />}
          {detailSection === 'Root Crop' && <RootcropLayer onPlantClick={onPlantClick} />}
          {detailSection === 'Vine' && <VineLayer onPlantClick={onPlantClick} />}
          {detailSection === 'Fungi' && <FungiLayer onPlantClick={onPlantClick} />}
        </LayerDetailPopup>
      )}
    </div>
  );
}

export default PermaculturePopup;
