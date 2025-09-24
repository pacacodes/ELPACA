import React from 'react';

function PermacultureLayerPopup({ open, pos, collapsed, onCollapse, onClose, children, section, icon }) {
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
        padding: collapsed ? '0' : '2rem 2.5rem',
        minWidth: collapsed ? '48px' : '320px',
        width: collapsed ? '48px' : undefined,
        minHeight: collapsed ? '600px' : '120px',
        height: collapsed ? '600px' : undefined,
        zIndex: 1101,
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
          <span style={{width:'100%',textAlign:'center'}}>{section}</span>
        </div>
      ) : (
        <>
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
            aria-label="Collapse permaculture layer detail"
          >
            <svg width="18" height="18" viewBox="0 0 18 18">
              <rect x="4" y="8" width="10" height="2" rx="1" fill="white" />
            </svg>
          </button>
          {/* Render children (layer component) if provided */}
          <div style={{width:'100%'}}>
            {children}
          </div>
        </>
      )}
    </div>
  );
}

export default PermacultureLayerPopup;
