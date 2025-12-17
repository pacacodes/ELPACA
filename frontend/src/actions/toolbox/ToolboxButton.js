import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Paper, Text } from '@mantine/core';
import '../../communication/CommunicationNavbar.css';

const ToolboxButton = () => {
  const [toolboxOpen, setToolboxOpen] = useState(false);
  const [toolboxDetailOpen, setToolboxDetailOpen] = useState(false);

  return (
    <>
      <button
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '20px',
        }}
        onClick={() => setToolboxOpen(true)}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
      {/* Toolbox Popup - Rendered at document level for proper positioning */}
      {toolboxOpen && !toolboxDetailOpen && (
        <Paper
          shadow="md"
          radius="md"
          className="communication-navbar-scroll"
          style={{
            position: 'fixed',
            left: '210px',
            top: '324px',
            minWidth: '245px',
            width: '245px',
            minHeight: '870px',
            maxHeight: '870px',
            zIndex: 1201,
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'rgba(26, 26, 26, 0.9)',
            borderRadius: '8px',
            overflowY: 'auto',
            transition: 'width 0.3s, left 0.3s',
          }}
        >
          {/* Close button in top right */}
          <button
            style={{ 
              position: 'absolute', 
              top: '20px', 
              right: '20px', 
              background: 'none', 
              color: '#ffffff', 
              border: 'none', 
              fontWeight: 500, 
              fontSize: '1.5rem', 
              cursor: 'pointer', 
              zIndex: 2 
            }}
            aria-label="Close"
            onClick={() => setToolboxOpen(false)}
          >
            ×
          </button>
          {/* Title */}
          <Text
            fw={400}
            c="#ffffff"
            style={{
              fontSize: '0.90rem',
              marginBottom: '18px',
              marginLeft: '2px',
              marginTop: '3px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontFamily: 'inherit',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              width: '100%',
              transition: 'transform 0.3s',
            }}
          >
            Toolbox
          </Text>
        </Paper>
      )}
    </>
  );
};

export default ToolboxButton;
