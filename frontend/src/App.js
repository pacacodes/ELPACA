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
  const [projectFolders, setProjectFolders] = useState([]);
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

  return (
    <div style={{ padding: '2rem', position: 'relative', minHeight: '100vh' }}>
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
            {/* Column of buttons on the left */}
            <div style={{ position: 'absolute', left: '24px', top: '90px', display: 'flex', flexDirection: 'column', gap: '1.1rem', alignItems: 'flex-start', pointerEvents: 'auto' }}>
              {[
                { name: 'ground cover layer', icon: 'grass' },
                { name: 'root layer', icon: 'grassroots' },
                { name: 'herbaceous layer', icon: faPagelines },
                { name: 'shrub layer', icon: faTree },
                { name: 'low tree layer', icon: faCloud },
                { name: 'tall tree layer', icon: faMountain },
                { name: 'vine layer', icon: faPagelines },
              ].map((layer, i) => (
                <button
                  key={i}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '1.1rem',
                    width: '320px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(60,60,60,0.5)',
                    color: 'white',
                    border: 'none',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                    paddingLeft: '1.2rem',
                    paddingRight: '1.2rem',
                    justifyContent: 'flex-start',
                  }}
                  aria-label={layer.name}
                  onClick={() => {
                    if (layer.name === 'ground cover layer') setActiveLayer(layer.name);
                  }}
                >
                  {layer.icon === 'grass' ? (
                    <svg width="32" height="32" viewBox="0 0 64 64" fill="none" style={{display:'block',margin:'0',position:'relative',top:'-2px'}} xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 62 Q12 40 20 62 Q24 48 28 62 Q32 38 36 62 Q40 50 44 62 Q48 44 52 62" stroke="#fff" strokeWidth="3.5" fill="none"/>
                    </svg>
                  ) : layer.icon === 'grassroots' ? (
                    <svg width="32" height="32" viewBox="0 0 64 64" fill="none" style={{display:'block',margin:'0',position:'relative',top:'-2px'}} xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 20 Q12 4 20 20 Q24 8 28 20 Q32 2 36 20 Q40 10 44 20 Q48 6 52 20" stroke="#fff" strokeWidth="3" fill="none"/>
                      <path d="M32 20 Q30 14 28 20" stroke="#fff" strokeWidth="2" fill="none"/>
                      <path d="M32 20 Q34 14 36 20" stroke="#fff" strokeWidth="2" fill="none"/>
                      <path d="M32 20 Q32 12 32 20" stroke="#fff" strokeWidth="2" fill="none"/>
                      <polygon points="28,22 36,22 32,60" fill="#fff" />
                      <path d="M32 40 Q30 44 32 48" stroke="#fff" strokeWidth="1.5" fill="none"/>
                      <path d="M32 44 Q34 48 32 52" stroke="#fff" strokeWidth="1.5" fill="none"/>
                    </svg>
                  ) : layer.icon === 'roots' ? (
                    <svg width="32" height="32" viewBox="0 0 64 64" fill="none" style={{display:'block',margin:'0',position:'relative',top:'-2px'}} xmlns="http://www.w3.org/2000/svg">
                      <path d="M32 8 V32 M32 32 Q28 40 24 32 M32 32 Q36 40 40 32 M32 32 Q20 44 16 32 M32 32 Q44 44 48 32" stroke="#fff" strokeWidth="3.5" fill="none"/>
                    </svg>
                  ) : (
                    <FontAwesomeIcon icon={layer.icon} style={{fontSize:'1.5rem'}} />
                  )}
                  <span style={{ textTransform: 'capitalize', fontWeight: '500', color: 'white', fontSize: '1rem', whiteSpace: 'nowrap' }}>{layer.name}</span>
                </button>
              ))}
            </div>
          </div>
          {/* Adjacent connected popup for ground cover layer only */}
          {activeLayer === 'ground cover layer' && (
            <div
              style={{
                position: 'absolute',
                left: 'calc(100% + 16px)',
                top: '0',
                minWidth: '220px',
                minHeight: '120px',
                background: 'rgba(60,60,60,0.85)',
                borderRadius: '12px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
                padding: '1.2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                zIndex: 1001,
                borderLeft: '4px solid #a8be96',
              }}
            >
              <div style={{fontWeight:'bold',color:'#fff',fontSize:'1.1rem',marginBottom:'0.7rem'}}>Ground Cover Layer</div>
              <button
                style={{
                  marginTop: '0.5rem',
                  background: 'rgba(168,190,150,0.7)',
                  color: '#333',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '0.4rem 0.9rem',
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
                  setActiveProjectFolder(null);
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
                {activeProjectFolder ? activeProjectFolder : 'Projects'}
              </div>
              {/* If a folder is open, show its content */}
              {activeProjectFolder ? (
                <div style={{marginTop:'60px',width:'100%',display:'flex',flexDirection:'column',alignItems:'center',gap:'1.2rem'}}>
                  <FontAwesomeIcon icon={faDog} style={{ fontSize: '2.2rem', color: '#fff' }} />
                  <div style={{color:'#fff',fontSize:'1.1rem'}}>Welcome to <b>{activeProjectFolder}</b>!</div>
                  <button
                    style={{marginTop:'1.2rem',background:'rgba(168,190,150,0.7)',color:'#333',border:'none',borderRadius:'6px',padding:'0.4rem 1.2rem',fontWeight:'bold',cursor:'pointer'}}
                    onClick={() => setActiveProjectFolder(null)}
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
                    {projectFolders.map((folder, idx) => (
                      <div key={idx} style={{background:'rgba(255,255,255,0.08)',borderRadius:'8px',padding:'0.5rem 1rem',color:'#fff',fontWeight:'500',fontSize:'1rem',marginBottom:'0.2rem',display:'flex',alignItems:'center',gap:'0.7rem',cursor:'pointer'}} onClick={() => setActiveProjectFolder(folder)}>
                        <FontAwesomeIcon icon={faDog} style={{ fontSize: '1.2rem', color: '#fff' }} />
                        {folder}
                      </div>
                    ))}
                    {namingFolder && (
                      <div style={{background:'rgba(255,255,255,0.13)',borderRadius:'8px',padding:'0.5rem 1rem',color:'#fff',fontWeight:'500',fontSize:'1rem',marginBottom:'0.2rem',display:'flex',alignItems:'center',gap:'0.5rem'}}>
                        <input
                          type="text"
                          value={newFolderName}
                          autoFocus
                          onChange={e => setNewFolderName(e.target.value)}
                          placeholder="Name your project"
                          style={{background:'rgba(255,255,255,0.2)',border:'none',borderRadius:'4px',color:'#333',fontWeight:'500',fontSize:'1rem',padding:'0.3rem 0.7rem'}}
                          onKeyDown={e => {
                            if (e.key === 'Enter' && newFolderName.trim()) {
                              setProjectFolders([...projectFolders, newFolderName.trim()]);
                              setNamingFolder(false);
                              setNewFolderName('');
                            } else if (e.key === 'Escape') {
                              setNamingFolder(false);
                              setNewFolderName('');
                            }
                          }}
                        />
                        <button
                          style={{background:'transparent',border:'none',color:'#fff',fontSize:'1.1rem',cursor:'pointer'}}
                          title="Save"
                          onClick={() => {
                            if (newFolderName.trim()) {
                              setProjectFolders([...projectFolders, newFolderName.trim()]);
                              setNamingFolder(false);
                              setNewFolderName('');
                            }
                          }}
                        >✔</button>
                        <button
                          style={{background:'transparent',border:'none',color:'#fff',fontSize:'1.1rem',cursor:'pointer'}}
                          title="Cancel"
                          onClick={() => {
                            setNamingFolder(false);
                            setNewFolderName('');
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
