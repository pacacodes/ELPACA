import React from 'react';

function PlantDetailPopup({ open, pos, plant, onClose }) {
  if (!open || !plant) return null;
  return (
    <div
      style={{
        position: 'absolute',
        left: pos.x,
        top: pos.y,
        background: 'rgba(60,60,60,0.92)',
        borderRadius: '12px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
        padding: '2rem 2.5rem',
        minWidth: '320px',
  minHeight: '600px',
  height: '600px',
  maxHeight: '600px',
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
      <h2 style={{marginBottom:'1rem', color:'#fff'}}>{plant.common}</h2>
      <div style={{marginBottom:'0.5rem', color:'#fff'}}><strong>Scientific:</strong> {plant.scientific}</div>
      {plant.wiki && (
        <a href={plant.wiki} target="_blank" rel="noopener noreferrer" style={{ color: '#a8be96', textDecoration: 'underline', fontSize: '0.95rem' }}>
          Wikipedia
        </a>
      )}
    </div>
  );
}

export default PlantDetailPopup;
