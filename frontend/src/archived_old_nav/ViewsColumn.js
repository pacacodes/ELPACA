import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

function ViewsColumn() {
  return (
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
  );
}

export default ViewsColumn;
