import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

function CommunicationColumn() {
  return (
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
        <button style={{display: 'flex', alignItems: 'center', gap: '0.7rem', background: 'rgba(60,60,60,0)', color: '#888', border: 'none', borderRadius: '6px', padding: '0.32rem 0.5rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0', marginLeft: '-1.8rem'}}><FontAwesomeIcon icon={faCommentDots} style={{fontSize:'1.09em', marginLeft: '-0.5rem', color: '#888'}} /><span style={{fontSize:'0.78rem', color: '#888'}}>Great. Thank you...</span></button>
        <button style={{display: 'flex', alignItems: 'center', gap: '0.7rem', background: 'rgba(60,60,60,0)', color: '#888', border: 'none', borderRadius: '6px', padding: '0.32rem 0.5rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0', marginLeft: '-1.8rem'}}><FontAwesomeIcon icon={faCommentDots} style={{fontSize:'1.09em', marginLeft: '-0.5rem', color: '#888'}} /><span style={{fontSize:'0.78rem', color: '#888'}}>Can you send the files?</span></button>
        <button style={{display: 'flex', alignItems: 'center', gap: '0.7rem', background: 'rgba(60,60,60,0)', color: '#888', border: 'none', borderRadius: '6px', padding: '0.32rem 0.5rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0', marginLeft: '-1.8rem'}}><FontAwesomeIcon icon={faCommentDots} style={{fontSize:'1.09em', marginLeft: '-0.5rem', color: '#888'}} /><span style={{fontSize:'0.78rem', color: '#888'}}>Let's meet at 2pm</span></button>
        <button style={{display: 'flex', alignItems: 'center', gap: '0.7rem', background: 'rgba(60,60,60,0)', color: '#888', border: 'none', borderRadius: '6px', padding: '0.32rem 0.5rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0', marginLeft: '-1.8rem'}}><FontAwesomeIcon icon={faCommentDots} style={{fontSize:'1.09em', marginLeft: '-0.5rem', color: '#888'}} /><span style={{fontSize:'0.78rem', color: '#888'}}>Received. Will review.</span></button>
      </div>
    </div>
  );
}

export default CommunicationColumn;
