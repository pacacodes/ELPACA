import React from 'react';
import './CommunicationNavbar.css';
import UserButton from './UserButton';
import { faCommentDots, faPaperPlane, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function CommunicationColumn() {
  return (
    <div className="communication-navbar-scroll" style={{
      position: 'fixed',
      right: '10px',
      top: '23px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '.45rem',
      background: 'rgba(200,200,200,0.2)',
      borderRadius: '8px',
      padding: '0.5rem 0.4rem',
      boxShadow: 'none',
      minWidth: '210px',
      maxWidth: '210px',
      height: '350px',
      overflowY: 'auto',
      zIndex: 1000,
    }}>
      <div style={{width:'100%',display:'flex',justifyContent:'flex-start',marginBottom:'0.38rem'}}>
        <span className="communication-title" style={{ marginLeft: '10px', marginTop: '10px' }}>Communication</span>
      </div>
        <div style={{display:'flex',flexDirection:'column',gap:'0.60rem', marginTop: '10px'}}>
          <UserButton name="Alex Johnson" role="Project Manager" subject="Great. Thank you..." icon={faPaperPlane} />
          <UserButton name="Priya Singh" role="Client Liaison" subject="Can you send the files?" icon={faPhone} />
          <UserButton name="Marco Alvarez" role="Site Lead" subject="Let's meet at 2pm" icon={faCommentDots} />
          <UserButton name="Dana Reed" role="BIM Coordinator" subject="Received. Will review." icon={faEnvelope} />
      </div>
    </div>
  );
}

export default CommunicationColumn;
