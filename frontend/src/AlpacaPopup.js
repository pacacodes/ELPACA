import React from 'react';
import BackToProjectsButton from './BackToProjectsButton';
import ProjectsPopup from './ProjectsPopup';

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
        {/* If a folder is open, show its content, else show ProjectsPopup */}
        {activeProjectFolder ? (
          <div style={{marginTop:'60px',width:'100%',display:'flex',flexDirection:'column',alignItems:'center',gap:'1.2rem'}}>
            <img src={process.env.PUBLIC_URL + '/favicon.ico'} alt="alpaca icon" style={{ width: '38px', height: '38px', display: 'block', filter: 'brightness(0) invert(1)' }} />
            <div style={{color:'#fff',fontSize:'1.1rem',textAlign:'center'}}>
              <div>Welcome to <b>{activeProjectFolder.name || activeProjectFolder}</b>!</div>
              {activeProjectFolder.address && (
                <div style={{fontSize:'1rem',color:'#ccc',marginTop:'0.5rem'}}>Location: <b>{activeProjectFolder.address}</b></div>
              )}
            </div>
            <BackToProjectsButton
              setActiveProjectFolder={setActiveProjectFolder}
              setAlpacaPopupOpen={setAlpacaPopupOpen}
              setProjectsPopupOpen={setPopupOpen}
            />
          </div>
        ) : (
          <ProjectsPopup
            allProjectFolders={allProjectFolders}
            setActiveProjectFolder={setActiveProjectFolder}
            setNamingFolder={setNamingFolder}
            setNewFolderName={setNewFolderName}
            setAlpacaPopupOpen={setAlpacaPopupOpen}
            setPopupOpen={setPopupOpen}
          />
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
