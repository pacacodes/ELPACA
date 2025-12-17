import React from 'react';

function BackToProjectsButton({ setActiveProjectFolder, setAlpacaPopupOpen, setProjectsPopupOpen }) {
  // setActiveProjectFolder: function to clear the current project selection
  // setAlpacaPopupOpen: function to close the current (project details) popup
  // setProjectsPopupOpen: function to open the main Projects popup
  return (
    <button
      style={{
        background: '#a8be96',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        padding: '0.5rem 1.2rem',
        fontWeight: 'bold',
        fontSize: '1.05rem',
        cursor: 'pointer',
        margin: '1rem 0',
        boxShadow: '0 1px 4px rgba(0,0,0,0.10)'
      }}
      onClick={() => {
        setActiveProjectFolder(null);
        setAlpacaPopupOpen(false);
        setProjectsPopupOpen(true);
      }}
    >
      ← Back to Projects
    </button>
  );
}

export default BackToProjectsButton;
