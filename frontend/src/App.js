import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree, faCloud, faMountain, faThLarge, faLaptop, faList, faEye, faDollarSign, faPaperclip, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';
// Removed duplicate import of faPagelines and faVine

function App() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupPos, setPopupPos] = useState({ x: window.innerWidth / 2 - 170, y: window.innerHeight / 2 - 150 });
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  // Only popup state and drag logic needed

  // No plant API or Wikipedia fetch logic

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
          background: '#4caf50',
          color: 'white',
          fontSize: '2rem',
          border: 'none',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-label="Add plant"
        onClick={() => setPopupOpen(true)}
      >
        +
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
              minHeight: '300px',
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
              if (e.target.closest('button[aria-label="Close popup"]')) return;
              setDragging(true);
              setDragOffset({ x: e.clientX - popupPos.x, y: e.clientY - popupPos.y });
            }}
          >
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
              }}
              aria-label="Close popup"
            >
              <svg width="18" height="18" viewBox="0 0 18 18">
                <line x1="3" y1="3" x2="15" y2="15" stroke="white" strokeWidth="2" />
                <line x1="15" y1="3" x2="3" y2="15" stroke="white" strokeWidth="2" />
              </svg>
            </button>
            {/* Column of buttons on the left */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginRight: '2rem', alignItems: 'flex-start', pointerEvents: 'auto' }}>
              {[
         { name: 'ground cover layer', icon: 'grass' },
                { name: 'root layer', icon: 'grassroots' },
                { name: 'herbaceous layer', icon: faPagelines },
                { name: 'shrub layer', icon: faTree },
                { name: 'low tree layer', icon: faCloud },
                { name: 'tall tree layer', icon: faMountain },
                { name: 'vine layer', icon: faPagelines },
              ].map((layer, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <button
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'rgba(60,60,60,0.5)',
                      color: 'white',
                      border: 'none',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                    }}
                    aria-label={layer.name}
                  >
                    {layer.icon === 'grass' ? (
                      <svg width="32" height="32" viewBox="0 0 64 64" fill="none" style={{display:'block',margin:'0 auto',position:'relative',top:'-12px'}} xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 62 Q12 40 20 62 Q24 48 28 62 Q32 38 36 62 Q40 50 44 62 Q48 44 52 62" stroke="#fff" strokeWidth="3.5" fill="none"/>
                      </svg>
                      ) : layer.icon === 'grassroots' ? (
                        <svg width="32" height="32" viewBox="0 0 64 64" fill="none" style={{display:'block',margin:'0 auto',position:'relative',top:'-2px'}} xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 20 Q12 4 20 20 Q24 8 28 20 Q32 2 36 20 Q40 10 44 20 Q48 6 52 20" stroke="#fff" strokeWidth="3" fill="none"/>
                          <path d="M32 20 Q30 14 28 20" stroke="#fff" strokeWidth="2" fill="none"/>
                          <path d="M32 20 Q34 14 36 20" stroke="#fff" strokeWidth="2" fill="none"/>
                          <path d="M32 20 Q32 12 32 20" stroke="#fff" strokeWidth="2" fill="none"/>
                          <polygon points="28,22 36,22 32,60" fill="#fff" />
                          <path d="M32 40 Q30 44 32 48" stroke="#fff" strokeWidth="1.5" fill="none"/>
                          <path d="M32 44 Q34 48 32 52" stroke="#fff" strokeWidth="1.5" fill="none"/>
                        </svg>
                      ) : layer.icon === 'roots' ? (
                        <svg width="32" height="32" viewBox="0 0 64 64" fill="none" style={{display:'block',margin:'0 auto',position:'relative',top:'-2px'}} xmlns="http://www.w3.org/2000/svg">
                          <path d="M32 8 V32 M32 32 Q28 40 24 32 M32 32 Q36 40 40 32 M32 32 Q20 44 16 32 M32 32 Q44 44 48 32" stroke="#fff" strokeWidth="3.5" fill="none"/>
                        </svg>
                    ) : (
                      <FontAwesomeIcon icon={layer.icon} style={{fontSize:'1.5rem'}} />
                    )}
                  </button>
                  <span style={{ textTransform: 'capitalize', fontWeight: '500', color: 'white', fontSize: '1rem' }}>{layer.name}</span>
                </div>
              ))}
            </div>
          </div>
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

      {/* Floating alpaca button in top right with 6 surrounding buttons */}
      <div style={{
        position: 'fixed',
        right: '2rem',
        top: '2rem',
        width: '160px',
        height: '160px',
        pointerEvents: 'none',
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
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: '#4caf50',
                color: 'white',
                border: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                pointerEvents: 'auto',
              }}
              aria-label={`Circle button ${i+1}`}
            >
              {i === 0 ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="10" r="6" fill="white" />
                  <rect x="9" y="16" width="6" height="4" rx="2" fill="white" />
                  <rect x="10" y="20" width="4" height="2" rx="1" fill="white" />
                  <line x1="10" y1="13" x2="14" y2="13" stroke="#4caf50" strokeWidth="1.5" />
                  <line x1="12" y1="13" x2="12" y2="16" stroke="#4caf50" strokeWidth="1.5" />
                </svg>
              ) : null}
            </button>
          );
        })}
        {/* Center alpaca button */}
        <button
          style={{
            position: 'absolute',
            left: '56px',
            top: '56px',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: '#4caf50',
            color: 'white',
            fontSize: '2rem',
            border: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'auto',
          }}
          aria-label="Alpaca"
        >
        </button>
      </div>

      {/* Layouts category column below top right buttons */}
      <div style={{
        position: 'fixed',
        right: '2.5rem',
        top: 'calc(2rem + 180px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0.35rem',
        background: 'rgba(60,60,60,0)',
        borderRadius: '8px',
        padding: '0.25rem 0.7rem',
        boxShadow: 'none',
        minWidth: '60px',
        maxWidth: '140px',
      }}>
        <div style={{width:'100%',display:'flex',justifyContent:'center',marginBottom:'0.18rem'}}>
          <span style={{ color: '#222', fontWeight: 'bold', fontSize: '0.78rem', letterSpacing: '0.04em', textAlign: 'center', textTransform: 'lowercase' }}>layouts</span>
        </div>
        {/* Worksheets button */}
        <button style={{
          display: 'flex', alignItems: 'center', gap: '0.25rem', background: 'rgba(60,60,60,0)', color: '#333', border: 'none', borderRadius: '6px', padding: '0.18rem 0.3rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0'
        }}>
          <FontAwesomeIcon icon={faThLarge} style={{fontSize:'0.9em'}} />
          <span style={{fontSize:'0.78rem'}}>Worksheets</span>
        </button>
        {/* Presentation Sheets button */}
        <button style={{
          display: 'flex', alignItems: 'center', gap: '0.25rem', background: 'rgba(60,60,60,0)', color: '#333', border: 'none', borderRadius: '6px', padding: '0.18rem 0.3rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0'
        }}>
          <FontAwesomeIcon icon={faLaptop} style={{fontSize:'0.9em'}} />
          <span style={{fontSize:'0.78rem'}}>Presentation Sheets</span>
        </button>
        {/* Schedules & Specifications button */}
        <button style={{
          display: 'flex', alignItems: 'center', gap: '0.25rem', background: 'rgba(60,60,60,0)', color: '#333', border: 'none', borderRadius: '6px', padding: '0.18rem 0.3rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0'
        }}>
          <FontAwesomeIcon icon={faList} style={{fontSize:'0.9em'}} />
          <span style={{fontSize:'0.78rem'}}>Schedules &amp; Specifications</span>
        </button>
        {/* Site Diagrams button */}
        <button style={{
          display: 'flex', alignItems: 'center', gap: '0.25rem', background: 'rgba(60,60,60,0)', color: '#333', border: 'none', borderRadius: '6px', padding: '0.18rem 0.3rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0'
        }}>
          <FontAwesomeIcon icon={faEye} style={{fontSize:'0.9em'}} />
          <span style={{fontSize:'0.78rem'}}>Site Diagrams</span>
        </button>
        {/* Budgets button */}
        <button style={{
          display: 'flex', alignItems: 'center', gap: '0.25rem', background: 'rgba(60,60,60,0)', color: '#333', border: 'none', borderRadius: '6px', padding: '0.18rem 0.3rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0'
        }}>
          <FontAwesomeIcon icon={faDollarSign} style={{fontSize:'0.9em'}} />
          <span style={{fontSize:'0.78rem'}}>Budgets</span>
        </button>
        {/* Project Files button */}
        <button style={{
          display: 'flex', alignItems: 'center', gap: '0.25rem', background: 'rgba(60,60,60,0)', color: '#333', border: 'none', borderRadius: '6px', padding: '0.18rem 0.3rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0'
        }}>
          <FontAwesomeIcon icon={faPaperclip} style={{fontSize:'0.9em'}} />
          <span style={{fontSize:'0.78rem'}}>Project Files</span>
        </button>
        {/* Calendar & Timelines button */}
        <button style={{
          display: 'flex', alignItems: 'center', gap: '0.25rem', background: 'rgba(60,60,60,0)', color: '#333', border: 'none', borderRadius: '6px', padding: '0.18rem 0.3rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0'
        }}>
          <FontAwesomeIcon icon={faCalendarAlt} style={{fontSize:'0.9em'}} />
          <span style={{fontSize:'0.78rem'}}>Calendar &amp; Timelines</span>
        </button>
      </div>
    </div>
  );
}

export default App;
