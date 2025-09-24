import React from 'react';
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
  setCollapsed
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
          background: '#666666', // slightly darker
          padding: collapsed ? '0' : '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
          minWidth: collapsed ? '48px' : '340px',
          width: collapsed ? '48px' : undefined,
          minHeight: '720px',
          height: '720px',
          maxHeight: '720px',
          overflowY: 'auto',
          userSelect: 'none',
          cursor: dragging ? 'grabbing' : 'grab',
          position: 'absolute',
          zIndex: 1100,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
        onMouseDown={e => {
          const closeBtn = document.querySelector('button[aria-label="Close layer detail"]');
          if (closeBtn && (e.target === closeBtn || closeBtn.contains(e.target))) return;
          setDragging(true);
          setDragOffset({ x: e.clientX - popupPos.x, y: e.clientY - popupPos.y });
        }}
      >
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
              height: '600px',
              display: 'flex',
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
      </div>
      {/* Layer Detail Popup, always fixed to the right of the main popup, outside the main popup div */}
      {detailOpen && (
        <LayerDetailPopup
          open={detailOpen}
          collapsed={collapsed}
          pos={{
            x: popupPos.x + (collapsed ? 48 : 340) + 80,
            y: popupPos.y
          }}
          section={detailSection}
          icon={detailSection ? sectionIcons[detailSection] : null}
          onClose={() => setCollapsed(false)}
          onCollapse={() => setCollapsed(true)}
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
