
import React from 'react';

function LayerDetailPopup({ open, pos, section, icon, onClose, onDragStart }) {
  if (!open || !section) return null;
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
        minWidth: '260px',
        minHeight: '120px',
        zIndex: 1101,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        userSelect: 'none',
        cursor: 'grab',
      }}
      onMouseDown={e => {
        const closeBtn = e.currentTarget.querySelector('button[aria-label="Close layer detail"]');
        if (closeBtn && (e.target === closeBtn || closeBtn.contains(e.target))) return;
        if (onDragStart) onDragStart(e);
      }}
    >
      <div style={{display:'flex',alignItems:'center',gap:'0.7em',marginBottom:'1.2rem'}}>
          <span style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',minWidth:'2.2em',marginRight:'0.7em'}}>{icon}</span>
          <span style={{
            display: 'inline-block',
            width: '1.5px',
            height: '1.25em',
            background: 'currentColor',
            margin: '0 0.7em 0 0',
            verticalAlign: 'middle',
            opacity: 0.7
          }}></span>
           <span style={{color:'#fff',fontWeight:'bold',fontSize:'1.3rem',letterSpacing:'0.04em',whiteSpace:'nowrap'}}>{section}</span>
      </div>
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
        aria-label="Close layer detail"
      >
        <svg width="18" height="18" viewBox="0 0 18 18">
          <line x1="3" y1="3" x2="15" y2="15" stroke="white" strokeWidth="2" />
          <line x1="15" y1="3" x2="3" y2="15" stroke="white" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
}

export default LayerDetailPopup;
