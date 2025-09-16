import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree, faCloud, faMountain, faThLarge, faLaptop, faList, faEye, faDollarSign, faPaperclip, faCalendarAlt, faPlus, faMap, faPen, faDraftingCompass, faHardHat, faTasks } from '@fortawesome/free-solid-svg-icons';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [activeProjectFolder, setActiveProjectFolder] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const sampleProject = React.useMemo(() => ({
    name: 'Sample Project',
    address: '2442 Crest View Drive, Los Angeles, CA 90046',
    sample: true,
    description: 'A sample project to explore features before starting your own.',
    file: 'Sample_Project.epc'
  }), []);
  // Removed unused projectFolders state
  // Open sample project on initial load
  React.useEffect(() => {
    if (!activeProjectFolder) {
      setActiveProjectFolder(sampleProject);
    }
  }, [activeProjectFolder, sampleProject]);

  // Only show .epc file (Sample Project) as open
  const allProjectFolders = [sampleProject];
  const [newFolderName, setNewFolderName] = useState('');
  const [namingFolder, setNamingFolder] = useState(false);
  const [alpacaPopupOpen, setAlpacaPopupOpen] = useState(false);
  const [alpacaPopupPos, setAlpacaPopupPos] = useState({ x: window.innerWidth / 2 - 160, y: window.innerHeight / 2 - 90 });
  const [alpacaDragging, setAlpacaDragging] = useState(false);
  const [alpacaDragOffset, setAlpacaDragOffset] = useState({ x: 0, y: 0 });
  const [popupPos, setPopupPos] = useState({ x: window.innerWidth / 2 - 170, y: window.innerHeight / 2 - 150 });
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [activeLayer, setActiveLayer] = useState(null);

  // New address fields
  const [newFolderStreet, setNewFolderStreet] = useState('');
  const [newFolderCity, setNewFolderCity] = useState('');
  const [newFolderState, setNewFolderState] = useState('');
  const [newFolderZip, setNewFolderZip] = useState('');
  const [newFolderCountry, setNewFolderCountry] = useState('');

    // Native plants state
    const [nativePlants, setNativePlants] = useState([]);

  return (
    <div style={{ padding: '2rem', position: 'relative', minHeight: '100vh' }}>
      {/* Always show project title, address, and map for sample project */}
      <div style={{
        position: 'fixed',
        top: '1.2rem',
        left: '1.2rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'left',
        fontWeight: 'bold',
        color: '#888',
        fontSize: '1.35rem',
        letterSpacing: '0.04em',
        zIndex: 9999,
        background: 'rgba(255,255,255,0.92)',
        padding: '0.7rem 1.2rem',
        borderRadius: '10px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.07)'
      }}>
        {/* Empty square for map preview */}
        <div style={{
          width: '80px',
          height: '80px',
          marginRight: '1.2rem',
          borderRadius: '8px',
          overflow: 'hidden',
          background: '#eee',
          filter: 'grayscale(1)',
          boxShadow: '0 1px 6px rgba(0,0,0,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div
            style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #bbb 60%, #eee 100%)',
              borderRadius: '8px',
              marginRight: '1.2rem',
              boxShadow: '0 1px 6px rgba(0,0,0,0.08)',
            }}
          />
        </div>
        <div>
          <div>{sampleProject.name}</div>
          <div style={{fontSize:'1.05rem',color:'#666',marginTop:'0.2rem',fontWeight:'400'}}>{sampleProject.address}</div>
        </div>
      </div>
      {/* Floating plus button in bottom left */}
      <button
        style={{
          position: 'fixed',
          left: '2rem',
          bottom: '2rem',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'rgba(168, 190, 150, 0.7)', // soft sage green, 70% opacity
          color: 'white',
          fontSize: '2rem',
          border: 'none',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1002,
        }}
        aria-label="Add plant"
        onClick={() => setPopupOpen(true)}
      >
        <FontAwesomeIcon icon={faPlus} style={{color: 'white', fontSize: '1.3rem'}} />
      </button>

      {/* Popup window */}
      {popupOpen && (
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
          <div
            style={{
              background: 'rgba(60,60,60,0.7)',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
              minWidth: '340px',
              minHeight: '600px', // increased height for 7 buttons
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              position: 'absolute',
              left: popupPos.x,
              top: popupPos.y,
              cursor: dragging ? 'grabbing' : 'grab',
              userSelect: 'none',
            }}
            onMouseDown={e => {
              // Only start dragging if the click is NOT on the close button or its children
              const closeBtn = e.currentTarget.querySelector('button[aria-label="Close popup"]');
              if (closeBtn && (e.target === closeBtn || closeBtn.contains(e.target))) return;
              setDragging(true);
              setDragOffset({ x: e.clientX - popupPos.x, y: e.clientY - popupPos.y });
            }}
          >
            {/* Centered title at top */}
            <div style={{
              position: 'absolute',
              top: '18px',
              left: 0,
              width: '100%',
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#fff',
              fontSize: '1.25rem',
              letterSpacing: '0.04em',
              zIndex: 1001
            }}>
              Permaculture Layers
            </div>
            {/* Native plants display (always show for active project) */}
            {activeProjectFolder && nativePlants.length > 0 && (
              <div style={{
                position: 'absolute',
                right: '24px',
                top: '90px',
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '10px',
                padding: '1rem',
                minWidth: '220px',
                maxWidth: '260px',
                zIndex: 1002,
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)'
              }}>
                <div style={{fontWeight:'bold',color:'#fff',fontSize:'1.1rem',marginBottom:'0.7rem'}}>Native Plants</div>
                {nativePlants.slice(0,3).map((plant, idx) => (
                  <div key={idx} style={{display:'flex',alignItems:'center',marginBottom:'0.7rem',gap:'0.7rem'}}>
                    {plant.image && <img src={plant.image} alt={plant.name} style={{width:'48px',height:'48px',borderRadius:'8px',objectFit:'cover',background:'#eee',marginRight:'0.7rem'}} />}
                    <div>
                      <div style={{color:'#fff',fontWeight:'500',fontSize:'1rem'}}>{plant.name}</div>
                      <div style={{color:'#ccc',fontSize:'0.95rem'}}>{plant.scientific}</div>
                      {plant.wikipedia && <a href={`https://en.wikipedia.org/wiki/${encodeURIComponent(plant.wikipedia)}`} target="_blank" rel="noopener noreferrer" style={{color:'#61dafb',fontSize:'0.9rem'}}>Wikipedia</a>}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {/* Spacer between title and buttons */}
            <div style={{width:'100%', height:'2.5rem'}}></div>
            {/* Close button as small black X in top right */}
            <button
              onClick={() => {
                setPopupOpen(false);
              }}
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
              aria-label="Close popup"
            >
              <svg width="18" height="18" viewBox="0 0 18 18">
                <line x1="3" y1="3" x2="15" y2="15" stroke="white" strokeWidth="2" />
                <line x1="15" y1="3" x2="3" y2="15" stroke="white" strokeWidth="2" />
              </svg>
            </button>
          </div>
          {/* Dedicated popup for any layer */}
          {activeLayer && (
            <div
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                minWidth: '340px',
                minHeight: '220px',
                background: 'rgba(60,60,60,0.92)',
                borderRadius: '14px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                zIndex: 9999,
              }}
            >
              <div style={{fontWeight:'bold',color:'#fff',fontSize:'1.3rem',marginBottom:'1.2rem'}}>{activeLayer.replace(' layer','').replace(/\b\w/g, l => l.toUpperCase())} Layer</div>
              <div style={{color:'#fff',fontSize:'1.05rem',marginBottom:'1.2rem'}}>This is a dedicated popup for the {activeLayer.replace(' layer','')} layer.</div>
              {/* Show native plants for this project/address in the permaculture layer popup */}
              {nativePlants.length > 0 && (
                <div style={{marginBottom:'1.2rem',width:'100%'}}>
                  <div style={{fontWeight:'bold',color:'#fff',fontSize:'1.1rem',marginBottom:'0.7rem'}}>Native Plants</div>
                  {nativePlants.slice(0,3).map((plant, idx) => (
                    <div key={idx} style={{display:'flex',alignItems:'center',marginBottom:'0.7rem',gap:'0.7rem'}}>
                      {plant.image && <img src={plant.image} alt={plant.name} style={{width:'48px',height:'48px',borderRadius:'8px',objectFit:'cover',background:'#eee',marginRight:'0.7rem'}} />}
                      <div>
                        <div style={{color:'#fff',fontWeight:'500',fontSize:'1rem'}}>{plant.name}</div>
                        <div style={{color:'#ccc',fontSize:'0.95rem'}}>{plant.scientific}</div>
                        {plant.wikipedia && <a href={`https://en.wikipedia.org/wiki/${encodeURIComponent(plant.wikipedia)}`} target="_blank" rel="noopener noreferrer" style={{color:'#61dafb',fontSize:'0.9rem'}}>Wikipedia</a>}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <button
                style={{
                  marginTop: '0.5rem',
                  background: 'rgba(168,190,150,0.7)',
                  color: '#333',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '0.4rem 1.2rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
                onClick={() => setActiveLayer(null)}
              >Close</button>
            </div>
          )}
          {/* Drag logic */}
          {dragging && (
            <div
              style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 1001, cursor: 'grabbing' }}
              onMouseMove={e => {
                setPopupPos({ x: e.clientX - dragOffset.x, y: e.clientY - dragOffset.y });
              }}
              onMouseUp={() => setDragging(false)}
            />
          )}
        </div>
      )}

      {/* Navigation title above circular array */}
      <div style={{position:'fixed', right:'2rem', top:'2.2rem', width:'160px', display:'flex', justifyContent:'flex-start', marginBottom:'0.38rem', zIndex:1002}}>
        <div style={{width:'100%',display:'flex',justifyContent:'flex-start',marginBottom:'0.38rem'}}>
          <span style={{ color: '#888', fontWeight: 'bold', fontSize: '0.78rem', letterSpacing: '0.04em', textAlign: 'left', marginLeft: '-2.7rem' }}>Navigation</span>
        </div>
      </div>
      {/* Floating alpaca button in top right with 6 surrounding buttons */}
      <div style={{
        position: 'fixed',
        right: '2rem',
        top: '3.8rem', // shift down to allow space for title
        width: '160px',
        height: '160px',
  pointerEvents: 'auto',
        zIndex: 1001,
      }}>
        {/* 6 surrounding buttons in a circle */}
        {[...Array(6)].map((_, i) => {
          const angle = ((i / 6) * 2 * Math.PI) - Math.PI / 2;
          const radius = 60;
          const x = 56 + radius * Math.cos(angle);
          const y = 56 + radius * Math.sin(angle);
          return (
            <button
              key={i}
              style={{
                position: 'absolute',
                left: `${x}px`,
                top: `${y}px`,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(168, 190, 150, 0.7)',
                border: 'none',
                boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                color: '#fff',
                pointerEvents: 'auto',
                zIndex: 1003,
              }}
              aria-label={`Circle button ${i+1}`}
            >
              {i === 0 ? (
                <FontAwesomeIcon icon={faLightbulb} />
              ) : i === 1 ? (
                <FontAwesomeIcon icon={faMap} />
              ) : i === 2 ? (
                <FontAwesomeIcon icon={faPen} />
              ) : i === 3 ? (
                <FontAwesomeIcon icon={faDraftingCompass} />
              ) : i === 4 ? (
                <FontAwesomeIcon icon={faHardHat} />
              ) : (
                <FontAwesomeIcon icon={faTasks} />
              )}
            </button>
          );
        })}
        {/* Center alpaca button */}
        <button
          style={{
            position: 'absolute',
            left: '47%',
            top: '47%',
            transform: 'translate(-50%, -50%)',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: '#fff',
            color: '#333', // dark grey
            border: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            zIndex: 1004,
          }}
          aria-label="Alpaca"
          onClick={() => setAlpacaPopupOpen(true)}
        >
          <FontAwesomeIcon icon={faDog} style={{ fontSize: '1.4rem' }} />
        </button>
        {/* Alpaca popup window */}
        {alpacaPopupOpen && (
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
                // Only start dragging if the click is NOT on the close button or its children
                const closeBtn = e.currentTarget.querySelector('button[aria-label="Close alpaca popup"]');
                if (closeBtn && (e.target === closeBtn || closeBtn.contains(e.target))) return;
                setAlpacaDragging(true);
                setAlpacaDragOffset({ x: e.clientX - alpacaPopupPos.x, y: e.clientY - alpacaPopupPos.y });
              }}
            >
              {/* Close button as small white X in top right */}
              <button
                onClick={() => {
                  setAlpacaPopupOpen(false);
                }}
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
                  <FontAwesomeIcon icon={faDog} style={{ fontSize: '2.2rem', color: '#fff' }} />
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
                      setActiveLayer(null);
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
                    <FontAwesomeIcon icon={faPlus} />
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
                          // Always treat Sample Project as a real project and always fetch plants
                          setActiveProjectFolder(folder);
                          setPopupOpen(false);
                          setAlpacaPopupOpen(false);
                          setNamingFolder(false);
                          setNewFolderName('');
                          setActiveLayer(null);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                          if (folder.address) {
                            // Always fetch, even if already active
                            fetch('/api/native-plants', {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({ address: folder.address })
                            })
                              .then(resp => resp.json())
                              .then(data => {
                                if (data.plants) {
                                  setNativePlants(data.plants);
                                } else {
                                  setNativePlants([]);
                                }
                              })
                              .catch(() => setNativePlants([]));
                          } else {
                            setNativePlants([]);
                          }
                        }}
                        aria-label={`Open project ${folder.name || folder}`}
                      >
                        <div style={{display:'flex',alignItems:'center',width:'100%'}}>
                          <FontAwesomeIcon icon={faDog} style={{ fontSize: '1.2rem', color: '#fff' }} />
                          <span style={{marginLeft:'0.7rem'}}>{folder.name || folder}</span>
                          {folder.address && <span style={{fontSize:'0.9rem',color:'#ccc',marginLeft:'0.7rem'}}>{folder.address}</span>}
                        </div>
                      </button>
                    ))}
                    {namingFolder && (
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
                              // setProjectFolders removed: only sample project is supported
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

                              // Create empty files for .rvt, .pln, .ifc in /saved_files
                              const baseName = newFolder.name.replace(/\s+/g, '_');
                              // Create .epc as main file and others in background
                              await fetch('/api/create-project-files', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ baseName })
                              });

                                // Fetch native plants from backend
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
                        <button
                          style={{background:'transparent',border:'none',color:'#fff',fontSize:'1.1rem',cursor:'pointer'}}
                          title="Save"
                          onClick={async () => {
                            if (newFolderName.trim() && newFolderStreet && newFolderCity && newFolderState && newFolderZip && newFolderCountry) {
                              const address = `${newFolderStreet}, ${newFolderCity}, ${newFolderState} ${newFolderZip}, ${newFolderCountry}`;
                              const newFolder = { name: newFolderName.trim(), address };
                              // setProjectFolders removed: only sample project is supported
                              setNamingFolder(false);
                              setNewFolderName('');
                              setNewFolderStreet('');
                              setNewFolderCity('');
                              setNewFolderState('');
                              setNewFolderZip('');
                              setNewFolderCountry('');
                              setActiveProjectFolder(null);
                              setPopupOpen(false);
                              setAlpacaPopupOpen(true);

                              // Create empty files for .rvt, .pln, .ifc in /saved_files
                              const baseName = newFolder.name.replace(/\s+/g, '_');
                              // Create .epc as main file and others in background
                              await fetch('/api/create-project-files', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ baseName })
                              });

                                // Fetch native plants from backend
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
                            }
                          }}
                        >✔</button>
                        <button
                          style={{background:'transparent',border:'none',color:'#fff',fontSize:'1.1rem',cursor:'pointer'}}
                          title="Cancel"
                          onClick={() => {
                            setNamingFolder(false);
                            setNewFolderName('');
                            setNewFolderStreet('');
                            setNewFolderCity('');
                            setNewFolderState('');
                            setNewFolderZip('');
                            setNewFolderCountry('');
                          }}
                        >✖</button>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
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
        )}
      </div>

      {/* Layouts category column below top right buttons */}
      <div style={{
        position: 'fixed',
        right: '5.1rem',
        top: 'calc(2rem + 210px)',
        display: 'flex',
        flexDirection: 'column', // restore to column
        alignItems: 'flex-start',
        gap: '0.35rem',
        background: 'rgba(60,60,60,0)',
        borderRadius: '8px',
        padding: '0.25rem 0.7rem',
        boxShadow: 'none',
        minWidth: '60px',
        maxWidth: '140px',
        zIndex: 1000,
      }}>
        <div style={{width:'100%',display:'flex',justifyContent:'flex-start',marginBottom:'0.38rem'}}>
          <span style={{ color: '#888', fontWeight: 'bold', fontSize: '0.78rem', letterSpacing: '0.04em', textAlign: 'left' }}>Layouts</span>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:'0.35rem'}}>
          {/* Worksheets button */}
          <button style={{
            display: 'flex', alignItems: 'center', gap: '0.7rem', background: 'rgba(60,60,60,0)', color: '#888', border: 'none', borderRadius: '6px', padding: '0.32rem 0.5rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0'
          }}>
            <FontAwesomeIcon icon={faThLarge} style={{fontSize:'1.09em', marginLeft: '-0.5rem', color: '#888'}} />
            <span style={{fontSize:'0.78rem', color: '#888'}}>Worksheets</span>
          </button>
          {/* Presentation Sheets button */}
          <button style={{
            display: 'flex', alignItems: 'center', gap: '0.7rem', background: 'rgba(60,60,60,0)', color: '#888', border: 'none', borderRadius: '6px', padding: '0.32rem 0.5rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0'
          }}>
            <FontAwesomeIcon icon={faLaptop} style={{fontSize:'1.09em', marginLeft: '-0.5rem', color: '#888'}} />
            <span style={{fontSize:'0.78rem', color: '#888'}}>Presentation Sheets</span>
          </button>
          {/* Schedules & Specifications button */}
          <button style={{
            display: 'flex', alignItems: 'center', gap: '0.7rem', background: 'rgba(60,60,60,0)', color: '#888', border: 'none', borderRadius: '6px', padding: '0.32rem 0.5rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0'
          }}>
            <FontAwesomeIcon icon={faList} style={{fontSize:'1.09em', marginLeft: '-0.5rem', color: '#888'}} />
            <span style={{fontSize:'0.78rem', color: '#888'}}>Schedules &amp; Specifications</span>
          </button>
          {/* Site Diagrams button */}
          <button style={{
            display: 'flex', alignItems: 'center', gap: '0.7rem', background: 'rgba(60,60,60,0)', color: '#888', border: 'none', borderRadius: '6px', padding: '0.32rem 0.5rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0'
          }}>
            <FontAwesomeIcon icon={faEye} style={{fontSize:'1.09em', marginLeft: '-0.5rem', color: '#888'}} />
            <span style={{fontSize:'0.78rem', color: '#888'}}>Site Diagrams</span>
          </button>
          {/* Budgets button */}
          <button style={{
            display: 'flex', alignItems: 'center', gap: '0.7rem', background: 'rgba(60,60,60,0)', color: '#888', border: 'none', borderRadius: '6px', padding: '0.32rem 0.5rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0'
          }}>
            <FontAwesomeIcon icon={faDollarSign} style={{fontSize:'1.09em', marginLeft: '-0.5rem', color: '#888'}} />
            <span style={{fontSize:'0.78rem', color: '#888'}}>Budgets</span>
          </button>
          {/* Project Files button */}
          <button style={{
            display: 'flex', alignItems: 'center', gap: '0.7rem', background: 'rgba(60,60,60,0)', color: '#888', border: 'none', borderRadius: '6px', padding: '0.32rem 0.5rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0'
          }}>
            <FontAwesomeIcon icon={faPaperclip} style={{fontSize:'1.09em', marginLeft: '-0.5rem', color: '#888'}} />
            <span style={{fontSize:'0.78rem', color: '#888'}}>Project Files</span>
          </button>
          {/* Calendar & Timelines button */}
          <button style={{
            display: 'flex', alignItems: 'center', gap: '0.7rem', background: 'rgba(60,60,60,0)', color: '#888', border: 'none', borderRadius: '6px', padding: '0.32rem 0.5rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0'
          }}>
            <FontAwesomeIcon icon={faCalendarAlt} style={{fontSize:'1.09em', marginLeft: '-0.5rem', color: '#888'}} />
            <span style={{fontSize:'0.78rem', color: '#888'}}>Calendar &amp; Timelines</span>
          </button>
        </div>
      </div>

      {/* Communication section below layouts */}
      <div style={{
        position: 'fixed',
        right: '4.1rem',
        top: 'calc(2rem + 475px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0.35rem',
        background: 'rgba(60,60,60,0)',
        borderRadius: '8px',
        padding: '0.25rem 0.2rem',
        boxShadow: 'none',
        minWidth: '60px',
        maxWidth: '140px',
        zIndex: 1000,
      }}>
        <div style={{width:'100%',display:'flex',justifyContent:'flex-start',marginBottom:'0.38rem'}}>
          <span style={{ color: '#888', fontWeight: 'bold', fontSize: '0.78rem', letterSpacing: '0.04em', textAlign: 'left', marginLeft: '-1.8rem' }}>Communication</span>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:'0.35rem'}}>
          {/* Text thread button */}
          <button style={{
            display: 'flex', alignItems: 'center', gap: '0.7rem', background: 'rgba(60,60,60,0)', color: '#888', border: 'none', borderRadius: '6px', padding: '0.32rem 0.5rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0', marginLeft: '-1.8rem'
          }}>
            <FontAwesomeIcon icon={faCommentDots} style={{fontSize:'1.09em', marginLeft: '-0.5rem', color: '#888'}} />
            <span style={{fontSize:'0.78rem', color: '#888'}}>Great. Thank you...</span>
          </button>
          {/* Additional similar buttons */}
          <button style={{
            display: 'flex', alignItems: 'center', gap: '0.7rem', background: 'rgba(60,60,60,0)', color: '#888', border: 'none', borderRadius: '6px', padding: '0.32rem 0.5rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0', marginLeft: '-1.8rem'
          }}>
            <FontAwesomeIcon icon={faCommentDots} style={{fontSize:'1.09em', marginLeft: '-0.5rem', color: '#888'}} />
            <span style={{fontSize:'0.78rem', color: '#888'}}>Can you send the files?</span>
          </button>
          <button style={{
            display: 'flex', alignItems: 'center', gap: '0.7rem', background: 'rgba(60,60,60,0)', color: '#888', border: 'none', borderRadius: '6px', padding: '0.32rem 0.5rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0', marginLeft: '-1.8rem'
          }}>
            <FontAwesomeIcon icon={faCommentDots} style={{fontSize:'1.09em', marginLeft: '-0.5rem', color: '#888'}} />
            <span style={{fontSize:'0.78rem', color: '#888'}}>Let's meet at 2pm</span>
          </button>
          <button style={{
            display: 'flex', alignItems: 'center', gap: '0.7rem', background: 'rgba(60,60,60,0)', color: '#888', border: 'none', borderRadius: '6px', padding: '0.32rem 0.5rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0', marginLeft: '-1.8rem'
          }}>
            <FontAwesomeIcon icon={faCommentDots} style={{fontSize:'1.09em', marginLeft: '-0.5rem', color: '#888'}} />
            <span style={{fontSize:'0.78rem', color: '#888'}}>Received. Will review.</span>
          </button>
        </div>
      </div>

      {/* Views section below communication */}
      <div style={{
        position: 'fixed',
        right: '5.6rem',
        top: 'calc(2rem + 635px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0.35rem',
        background: 'rgba(60,60,60,0)',
        borderRadius: '8px',
        padding: '0.25rem 0.2rem',
        boxShadow: 'none',
        minWidth: '60px',
        maxWidth: '140px',
        zIndex: 1000,
      }}>
        <div style={{width:'100%',display:'flex',justifyContent:'flex-start',marginBottom:'0.38rem', marginTop: '1.2rem'}}>
          <span style={{ color: '#888', fontWeight: 'bold', fontSize: '0.78rem', letterSpacing: '0.04em', textAlign: 'left', marginLeft: '0' }}>Views</span>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:'0.35rem'}}>
          {/* Add views buttons here */}
          <div style={{display:'flex',flexDirection:'row',gap:'0.7rem',marginTop:'0.5rem'}}>
          <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',marginLeft:'0',gap:'0.5rem'}}>
              <div style={{display:'flex',flexDirection:'row',gap:'0.7rem'}}>
                {/* Top row: N, E, Plan */}
                <button style={{width:'30px',height:'30px',borderRadius:'50%',background:'rgba(60,60,60,0.1)',color:'#888',border:'none',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1rem',cursor:'pointer',marginRight:'0.5rem',marginLeft:'1rem'}} aria-label="North"><span style={{fontWeight:'bold',fontSize:'0.9rem'}}>N</span></button>
                <button style={{width:'30px',height:'30px',borderRadius:'50%',background:'rgba(60,60,60,0.1)',color:'#888',border:'none',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1rem',cursor:'pointer',marginRight:'0.5rem'}} aria-label="East"><span style={{fontWeight:'bold',fontSize:'0.9rem'}}>E</span></button>
                <button style={{width:'30px',height:'30px',borderRadius:'50%',background:'rgba(60,60,60,0.1)',color:'#888',border:'none',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1rem',cursor:'pointer'}} aria-label="Plan View">
                  <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="16" height="16" rx="2" stroke="#888" strokeWidth="2" fill="none"/>
                    <rect x="7" y="7" width="8" height="8" rx="1" stroke="#888" strokeWidth="1.5" fill="none"/>
                    <line x1="3" y1="11" x2="19" y2="11" stroke="#888" strokeWidth="1" />
                    <line x1="11" y1="3" x2="11" y2="19" stroke="#888" strokeWidth="1" />
                  </svg>
                </button>
            </div>
            <div style={{display:'flex',flexDirection:'row',gap:'0.7rem'}}>
                {/* Bottom row: S, W, Spin */}
                <div style={{marginTop:'0.7rem',display:'flex',flexDirection:'row',gap:'0.7rem'}}>
                  <button style={{width:'30px',height:'30px',borderRadius:'50%',background:'rgba(60,60,60,0.1)',color:'#888',border:'none',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1rem',cursor:'pointer',marginRight:'0.5rem',marginLeft:'1rem'}} aria-label="South"><span style={{fontWeight:'bold',fontSize:'0.9rem'}}>S</span></button>
                  <button style={{width:'30px',height:'30px',borderRadius:'50%',background:'rgba(60,60,60,0.1)',color:'#888',border:'none',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1rem',cursor:'pointer',marginRight:'0.5rem'}} aria-label="West"><span style={{fontWeight:'bold',fontSize:'0.9rem'}}>W</span></button>
                  <button style={{width:'30px',height:'30px',borderRadius:'50%',background:'rgba(60,60,60,0.1)',color:'#888',border:'none',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1rem',cursor:'pointer'}} aria-label="Spinning Icon">
                    <FontAwesomeIcon icon={faArrowsRotate} style={{ fontSize: '1rem', color: '#888' }} />
                  </button>
                </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
