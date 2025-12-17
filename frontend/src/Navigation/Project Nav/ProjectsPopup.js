import React from 'react';

function ProjectsPopup({
  allProjectFolders = [],
  setActiveProjectFolder,
  setNamingFolder,
  setNewFolderName,
  setNewFolderStreet,
  setNewFolderCity,
  setNewFolderState,
  setNewFolderZip,
  setNewFolderCountry,
  namingFolder,
  newFolderName,
  newFolderStreet,
  newFolderCity,
  newFolderState,
  newFolderZip,
  newFolderCountry,
  setAlpacaPopupOpen,
  setPopupOpen,
}) {
  return (
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
            <img src={process.env.PUBLIC_URL + '/favicon.ico'} alt="alpaca icon" style={{ width: '22px', height: '22px', display: 'inline-block', verticalAlign: 'middle' }} />
            <span style={{marginLeft:'0.7rem'}}>{folder.name || folder}</span>
            {folder.address && <span style={{fontSize:'0.9rem',color:'#ccc',marginLeft:'0.7rem'}}>{folder.address}</span>}
          </button>
        ))}
        {/* New project form UI can be added here if needed */}
      </div>
    </>
  );
}

export default ProjectsPopup;
