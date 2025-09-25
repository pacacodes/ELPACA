
import React from 'react';


function LayerDetailPopup({ open, pos, section, icon, onClose, onDragStart, children, collapsed, onCollapse = () => {} }) {
  if (!open || !section) return null;
  return (
    <div
      style={{
        position: 'absolute',
        left: pos.x,
        top: pos.y,
        background: '#4a4a4a',
        borderRadius: '12px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
    padding: collapsed ? '0' : '2rem',
    minWidth: collapsed ? '48px' : '500px',
    width: collapsed ? '48px' : '500px',
        minHeight: collapsed ? '785px' : '720px',
        height: collapsed ? '785px' : '720px',
        maxHeight: collapsed ? '785px' : '720px',
        zIndex: 1101,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        userSelect: 'none',
        cursor: collapsed ? 'pointer' : 'grab',
        justifyContent: 'flex-start',
      }}
      onMouseDown={e => {
        const closeBtn = e.currentTarget.querySelector('button[aria-label="Close layer detail"]');
        if (closeBtn && (e.target === closeBtn || closeBtn.contains(e.target))) return;
        if (onDragStart && !collapsed) onDragStart(e);
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
            height: '100%',
            minHeight: '100%',
            maxHeight: '100%',
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
          onClick={onClose}
        >
          <span style={{
            width:'100%',
            textAlign:'center',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            height:'100%',
          }}>{section}</span>
        </div>
      ) : (
        <>
          <div style={{
            position: 'sticky',
            top: 0,
            background: 'transparent',
            zIndex: 2,
            width: '100%',
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#fff',
            fontSize: '1.25rem',
            letterSpacing: '0.04em',
            marginBottom: '2.2rem',
            marginTop: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{color:'#fff',fontWeight:'bold',fontSize:'1.25rem',letterSpacing:'0.04em',whiteSpace:'nowrap'}}>{section}</span>
          </div>
          {/* Collapse button absolutely positioned in top right of popup container */}
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
              zIndex: 1202,
            }}
            aria-label="Collapse layer detail"
          >
            <svg width="18" height="18" viewBox="0 0 18 18">
              <rect x="4" y="8" width="10" height="2" rx="1" fill="white" />
            </svg>
          </button>
          {/* Only the content area is scrollable, not the whole popup. Move scrollbar closer to edge. */}
          <div style={{width:'400px', flex: 1, overflowY: 'auto', maxHeight: 'calc(720px - 88px)', paddingRight: '2px', marginLeft: 'auto', marginRight: 'auto'}}>
            {children}
          </div>
        </>
      )}
    </div>
  );
}

export default LayerDetailPopup;
