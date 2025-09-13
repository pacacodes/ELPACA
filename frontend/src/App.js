import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree, faCloud, faMountain, faThLarge, faLaptop, faList, faEye, faDollarSign, faPaperclip, faCalendarAlt, faPlus, faMap, faPen, faDraftingCompass, faHardHat, faTasks } from '@fortawesome/free-solid-svg-icons';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

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
                    onClick={() => { console.log(`Clicked: ${layer.name}`); }}
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

      {/* Navigation title above circular array */}
      <div style={{position:'fixed', right:'2rem', top:'1.2rem', width:'160px', display:'flex', justifyContent:'flex-start', marginBottom:'0.38rem', zIndex:1002}}>
        <div style={{width:'100%',display:'flex',justifyContent:'flex-start',marginBottom:'0.38rem'}}>
          <span style={{ color: '#888', fontWeight: 'bold', fontSize: '0.78rem', letterSpacing: '0.04em', textAlign: 'left', marginLeft: '-2.7rem' }}>Navigation</span>
        </div>
      </div>
      {/* Floating alpaca button in top right with 6 surrounding buttons */}
      <div style={{
        position: 'fixed',
        right: '2rem',
        top: '2.8rem', // shift down to allow space for title
        width: '160px',
        height: '160px',
        pointerEvents: 'none',
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
            left: '50%',
            top: '50%',
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
        >
          <FontAwesomeIcon icon={faDog} style={{ fontSize: '1.4rem' }} />
        </button>
      </div>

      {/* Layouts category column below top right buttons */}
      <div style={{
        position: 'fixed',
        right: '5.1rem',
        top: 'calc(2rem + 180px)',
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
        right: '5.6rem',
        top: 'calc(2rem + 445px)',
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
        </div>
      </div>
    </div>
  );
}

export default App;
