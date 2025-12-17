import React from 'react';

function PlantPopup({ open, pos, plant, collapsed, onCollapse, onClose }) {
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
        padding: collapsed ? '0' : '2rem 2.5rem',
        minWidth: collapsed ? '48px' : '320px',
        width: collapsed ? '48px' : undefined,
        minHeight: collapsed ? '600px' : '120px',
        height: collapsed ? '600px' : undefined,
        zIndex: 1201,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        userSelect: 'none',
        cursor: collapsed ? 'pointer' : 'grab',
        justifyContent: 'center',
      }}
      onClick={collapsed ? onClose : undefined}
    >
      {collapsed ? (
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
          }}
          onClick={onClose}
        >
          <span style={{width:'100%',textAlign:'center'}}>{plant.common}</span>
        </div>
      ) : (
        <>
          <button
            onClick={onCollapse}
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
            aria-label="Collapse plant detail"
          >
            <svg width="18" height="18" viewBox="0 0 18 18">
              <rect x="4" y="8" width="10" height="2" rx="1" fill="white" />
            </svg>
          </button>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
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
        </>
      )}
    </div>
  );
}

export default PlantPopup;
