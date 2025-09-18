import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faLaptop, faList, faEye, faDollarSign, faPaperclip, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

function LayoutsColumn({ setActiveLayout }) {
  return (
    <div style={{
      position: 'fixed',
      right: '5.1rem',
      top: 'calc(2rem + 210px)',
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
      zIndex: 1000,
    }}>
      <div style={{width:'100%',display:'flex',justifyContent:'flex-start',marginBottom:'0.38rem'}}>
        <span style={{ color: '#888', fontWeight: 'bold', fontSize: '0.78rem', letterSpacing: '0.04em', textAlign: 'left' }}>Layouts</span>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'0.35rem'}}>
        <button style={{display: 'flex', alignItems: 'center', gap: '0.7rem', background: 'rgba(60,60,60,0)', color: '#888', border: 'none', borderRadius: '6px', padding: '0.32rem 0.5rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0'}} onClick={() => setActiveLayout('Worksheets')}><FontAwesomeIcon icon={faThLarge} style={{fontSize:'1.09em', marginLeft: '-0.5rem', color: '#888'}} /><span style={{fontSize:'0.78rem', color: '#888'}}>Worksheets</span></button>
        <button style={{display: 'flex', alignItems: 'center', gap: '0.7rem', background: 'rgba(60,60,60,0)', color: '#888', border: 'none', borderRadius: '6px', padding: '0.32rem 0.5rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0'}} onClick={() => setActiveLayout('Presentation Sheets')}><FontAwesomeIcon icon={faLaptop} style={{fontSize:'1.09em', marginLeft: '-0.5rem', color: '#888'}} /><span style={{fontSize:'0.78rem', color: '#888'}}>Presentation Sheets</span></button>
        <button style={{display: 'flex', alignItems: 'center', gap: '0.7rem', background: 'rgba(60,60,60,0)', color: '#888', border: 'none', borderRadius: '6px', padding: '0.32rem 0.5rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0'}} onClick={() => setActiveLayout('Schedules & Specifications')}><FontAwesomeIcon icon={faList} style={{fontSize:'1.09em', marginLeft: '-0.5rem', color: '#888'}} /><span style={{fontSize:'0.78rem', color: '#888'}}>Schedules &amp; Specifications</span></button>
        <button style={{display: 'flex', alignItems: 'center', gap: '0.7rem', background: 'rgba(60,60,60,0)', color: '#888', border: 'none', borderRadius: '6px', padding: '0.32rem 0.5rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0'}} onClick={() => setActiveLayout('Site Diagrams')}><FontAwesomeIcon icon={faEye} style={{fontSize:'1.09em', marginLeft: '-0.5rem', color: '#888'}} /><span style={{fontSize:'0.78rem', color: '#888'}}>Site Diagrams</span></button>
        <button style={{display: 'flex', alignItems: 'center', gap: '0.7rem', background: 'rgba(60,60,60,0)', color: '#888', border: 'none', borderRadius: '6px', padding: '0.32rem 0.5rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0'}} onClick={() => setActiveLayout('Budgets')}><FontAwesomeIcon icon={faDollarSign} style={{fontSize:'1.09em', marginLeft: '-0.5rem', color: '#888'}} /><span style={{fontSize:'0.78rem', color: '#888'}}>Budgets</span></button>
        <button style={{display: 'flex', alignItems: 'center', gap: '0.7rem', background: 'rgba(60,60,60,0)', color: '#888', border: 'none', borderRadius: '6px', padding: '0.32rem 0.5rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0'}} onClick={() => setActiveLayout('Project Files')}><FontAwesomeIcon icon={faPaperclip} style={{fontSize:'1.09em', marginLeft: '-0.5rem', color: '#888'}} /><span style={{fontSize:'0.78rem', color: '#888'}}>Project Files</span></button>
        <button style={{display: 'flex', alignItems: 'center', gap: '0.7rem', background: 'rgba(60,60,60,0)', color: '#888', border: 'none', borderRadius: '6px', padding: '0.32rem 0.5rem', fontSize: '0.78rem', cursor: 'pointer', boxShadow: 'none', whiteSpace: 'nowrap', minWidth: '0'}} onClick={() => setActiveLayout('Calendar & Timelines')}><FontAwesomeIcon icon={faCalendarAlt} style={{fontSize:'1.09em', marginLeft: '-0.5rem', color: '#888'}} /><span style={{fontSize:'0.78rem', color: '#888'}}>Calendar &amp; Timelines</span></button>
      </div>
    </div>
  );
}

export default LayoutsColumn;
