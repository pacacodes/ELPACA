import React from 'react';

function AlpacaPopup({
  alpacaPopupOpen,
  setAlpacaPopupOpen,
  alpacaPopupPos,
  setAlpacaPopupPos,
  alpacaDragging,
  setAlpacaDragging,
  alpacaDragOffset,
  setAlpacaDragOffset,
  activeProjectFolder,
  setActiveProjectFolder,
  setPopupOpen,
  setNamingFolder,
  setNewFolderName,
  allProjectFolders = [],
}) {
  if (!alpacaPopupOpen) return null;
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(60,60,60,0.3)',
      zIndex: 2000,
    }}>
      <div
        style={{
          position: 'absolute',
          left: alpacaPopupPos.x,
          top: alpacaPopupPos.y,
          background: 'rgba(60,60,60,0.7)',
          borderRadius: '14px',
          minWidth: '320px',
          minHeight: '180px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          padding: '1.5rem',
          cursor: alpacaDragging ? 'grabbing' : 'grab',
          userSelect: 'none',
        }}
        onMouseDown={e => {
          const closeBtn = e.currentTarget.querySelector('button[aria-label="Close alpaca popup"]');
          if (closeBtn && (e.target === closeBtn || closeBtn.contains(e.target))) return;
          setAlpacaDragging(true);
          setAlpacaDragOffset({ x: e.clientX - alpacaPopupPos.x, y: e.clientY - alpacaPopupPos.y });
        }}
      >
        {/* Close button as small white X in top right */}
        <button
          onClick={() => setAlpacaPopupOpen(false)}
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
          aria-label="Close alpaca popup"
        >
          <svg width="18" height="18" viewBox="0 0 18 18">
            <line x1="3" y1="3" x2="15" y2="15" stroke="white" strokeWidth="2" />
            <line x1="15" y1="3" x2="3" y2="15" stroke="white" strokeWidth="2" />
          </svg>
        </button>
        {/* Centered Projects label or folder name */}
        <div style={{width:'100%',textAlign:'center',position:'absolute',top:'18px',left:0,fontWeight:'bold',color:'#fff',fontSize:'1.1rem',letterSpacing:'0.04em'}}>
          {activeProjectFolder ? (activeProjectFolder.name || activeProjectFolder) : 'Projects'}
        </div>
        {/* If a folder is open, show its content */}
        {activeProjectFolder ? (
          <div style={{marginTop:'60px',width:'100%',display:'flex',flexDirection:'column',alignItems:'center',gap:'1.2rem'}}>
            <span role="img" aria-label="alpaca" style={{ fontSize: '2.2rem', color: '#fff' }}>🦙</span>
            <div style={{color:'#fff',fontSize:'1.1rem',textAlign:'center'}}>
              <div>Welcome to <b>{activeProjectFolder.name || activeProjectFolder}</b>!</div>
              {activeProjectFolder.address && (
                <div style={{fontSize:'1rem',color:'#ccc',marginTop:'0.5rem'}}>Location: <b>{activeProjectFolder.address}</b></div>
              )}
            </div>
            <button
              style={{marginTop:'1.2rem',background:'rgba(168,190,150,0.7)',color:'#333',border:'none',borderRadius:'6px',padding:'0.4rem 1.2rem',fontWeight:'bold',cursor:'pointer'}}
              onClick={() => {
                setAlpacaPopupOpen(false);
                setPopupOpen(true);
              }}
            >Back to Projects</button>
          </div>
        ) : (
          <>
            {/* Plus button in bottom right of popup */}
            <button
              style={{
                position: 'absolute',
                left: '18px',
                bottom: '18px',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                background: 'rgba(168, 190, 150, 0.7)',
                color: 'white',
                border: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.83rem',
                zIndex: 2002,
              }}
              aria-label="Add project"
              title="Add project"
              onClick={() => {
                setNamingFolder(true);
                setNewFolderName('');
              }}
            >
              +
            </button>
            {/* Project folders list */}
            <div style={{marginTop:'60px',width:'100%',display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'0.7rem'}}>
              {allProjectFolders.map((folder, idx) => (
                <button key={idx}
                  style={{
                    background:'rgba(255,255,255,0.08)',
                    borderRadius:'8px',
                    padding:'0.5rem 1rem',
                    color:'#fff',
                    fontWeight:'500',
                    fontSize:'1rem',
                    marginBottom:'0.2rem',
                    display:'flex',
                    alignItems:'center',
                    gap:'0.7rem',
                    cursor:'pointer',
                    border:'none',
                    width:'100%',
                    textAlign:'left',
                  }}
                  onClick={() => {
                    setActiveProjectFolder(folder);
                    setPopupOpen(false);
                    setAlpacaPopupOpen(false);
                    setNamingFolder(false);
                    setNewFolderName('');
                  }}
                  aria-label={`Open project ${folder.name || folder}`}
                >
                  <span role="img" aria-label="alpaca" style={{ fontSize: '1.2rem', color: '#fff' }}>🦙</span>
                  <span style={{marginLeft:'0.7rem'}}>{folder.name || folder}</span>
                  {folder.address && <span style={{fontSize:'0.9rem',color:'#ccc',marginLeft:'0.7rem'}}>{folder.address}</span>}
                </button>
              ))}
            </div>
          </>
        )}
        {alpacaDragging && (
          <div
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 2001, cursor: 'grabbing' }}
            onMouseMove={e => {
              setAlpacaPopupPos({ x: e.clientX - alpacaDragOffset.x, y: e.clientY - alpacaDragOffset.y });
            }}
            onMouseUp={() => setAlpacaDragging(false)}
          />
        )}
      </div>
    </div>
  );
}

export default AlpacaPopup;
