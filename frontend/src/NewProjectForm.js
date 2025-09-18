import React from 'react';

function NewProjectForm({
  newFolderName,
  setNewFolderName,
  newFolderStreet,
  setNewFolderStreet,
  newFolderCity,
  setNewFolderCity,
  newFolderState,
  setNewFolderState,
  newFolderZip,
  setNewFolderZip,
  newFolderCountry,
  setNewFolderCountry,
  setNamingFolder,
  setActiveProjectFolder,
  setPopupOpen,
  setAlpacaPopupOpen,
  setNativePlants
}) {
  return (
    <div style={{background:'rgba(255,255,255,0.13)',borderRadius:'8px',padding:'0.5rem 1rem',color:'#fff',fontWeight:'500',fontSize:'1rem',marginBottom:'0.2rem',display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'0.5rem'}}>
      <input
        type="text"
        value={newFolderName}
        autoFocus
        onChange={e => setNewFolderName(e.target.value)}
        placeholder="Project Name"
        style={{background:'rgba(255,255,255,0.2)',border:'none',borderRadius:'4px',color:'#333',fontWeight:'500',fontSize:'1rem',padding:'0.3rem 0.7rem',marginBottom:'0.5rem'}}
      />
      <input
        type="text"
        value={newFolderStreet || ''}
        onChange={e => setNewFolderStreet(e.target.value)}
        placeholder="Street"
        style={{background:'rgba(255,255,255,0.2)',border:'none',borderRadius:'4px',color:'#333',fontWeight:'500',fontSize:'1rem',padding:'0.3rem 0.7rem'}}
      />
      <input
        type="text"
        value={newFolderCity || ''}
        onChange={e => setNewFolderCity(e.target.value)}
        placeholder="City"
        style={{background:'rgba(255,255,255,0.2)',border:'none',borderRadius:'4px',color:'#333',fontWeight:'500',fontSize:'1rem',padding:'0.3rem 0.7rem'}}
      />
      <input
        type="text"
        value={newFolderState || ''}
        onChange={e => setNewFolderState(e.target.value)}
        placeholder="State"
        style={{background:'rgba(255,255,255,0.2)',border:'none',borderRadius:'4px',color:'#333',fontWeight:'500',fontSize:'1rem',padding:'0.3rem 0.7rem'}}
      />
      <input
        type="text"
        value={newFolderZip || ''}
        onChange={e => setNewFolderZip(e.target.value)}
        placeholder="Zip Code"
        style={{background:'rgba(255,255,255,0.2)',border:'none',borderRadius:'4px',color:'#333',fontWeight:'500',fontSize:'1rem',padding:'0.3rem 0.7rem'}}
      />
      <input
        type="text"
        value={newFolderCountry || ''}
        onChange={e => setNewFolderCountry(e.target.value)}
        placeholder="Country"
        style={{background:'rgba(255,255,255,0.2)',border:'none',borderRadius:'4px',color:'#333',fontWeight:'500',fontSize:'1rem',padding:'0.3rem 0.7rem'}}
        onKeyDown={async e => {
          if (e.key === 'Enter' && newFolderName.trim() && newFolderStreet && newFolderCity && newFolderState && newFolderZip && newFolderCountry) {
            const address = `${newFolderStreet}, ${newFolderCity}, ${newFolderState} ${newFolderZip}, ${newFolderCountry}`;
            const newFolder = { name: newFolderName.trim(), address };
            // Save project to backend
            await fetch('/api/projects', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(newFolder)
            });
            setNamingFolder(false);
            setNewFolderName('');
            setNewFolderStreet('');
            setNewFolderCity('');
            setNewFolderState('');
            setNewFolderZip('');
            setNewFolderCountry('');
            setActiveProjectFolder(newFolder);
            setPopupOpen(false);
            setAlpacaPopupOpen(true);
            const baseName = newFolder.name.replace(/\s+/g, '_');
            await fetch('/api/create-project-files', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ baseName })
            });
            try {
              const resp = await fetch('/api/native-plants', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ address })
              });
              const data = await resp.json();
              if (data.plants) {
                setNativePlants(data.plants);
              } else {
                setNativePlants([]);
              }
            } catch (err) {
              setNativePlants([]);
            }
          } else if (e.key === 'Escape') {
            setNamingFolder(false);
            setNewFolderName('');
            setNewFolderStreet('');
            setNewFolderCity('');
            setNewFolderState('');
            setNewFolderZip('');
            setNewFolderCountry('');
          }
        }}
      />
    </div>
  );
}

export default NewProjectForm;
