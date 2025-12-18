import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Paper, Text } from '@mantine/core';
import '../../communication/CommunicationNavbar.css';
import OrganicCollapsibleLinks from './organic/OrganicCollapsibleLinks';
import InorganicCollapsibleLinks from './InorganicCollapsibleLinks';
import ToolsCollapsibleLinks from './ToolsCollapsibleLinks';
import DiagramToolsCollapsibleLinks from './DiagramToolsCollapsibleLinks';
import ViewpointToolsCollapsibleLinks from './ViewpointToolsCollapsibleLinks';
import DocumentingToolsCollapsibleLinks from './DocumentingToolsCollapsibleLinks';
import ToolboxDetailPopup from './ToolboxDetailPopup';

const ToolboxButton = () => {
  const [toolboxOpen, setToolboxOpen] = useState(false);
  const [toolboxDetailOpen, setToolboxDetailOpen] = useState(false);
  const [selectedSubtitle, setSelectedSubtitle] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const openDetail = (group, subtitle) => {
    setSelectedGroup(group);
    setSelectedSubtitle(subtitle);
    setToolboxDetailOpen(true);
  };

  return (
    <>
      <button
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '20px',
        }}
        onClick={() => {
          console.log('[ToolboxButton] Clicked +, opening toolbox');
          setToolboxOpen(true);
          // Open a sensible default group
          try {
            window.dispatchEvent(new CustomEvent('openToolboxGroup', { detail: 'documenting' }));
          } catch (e) {
            // no-op
          }
        }}
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
            zIndex: 3000,
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

          {/* Collapsible link groups */}
          <ToolsCollapsibleLinks onSubtitleClick={(subtitle) => openDetail('Documenting Tools', subtitle)} />
          <DocumentingToolsCollapsibleLinks onSubtitleClick={(subtitle) => openDetail('Documenting Tools', subtitle)} />
          <OrganicCollapsibleLinks onSubtitleClick={(subtitle) => openDetail('Organic Objects', subtitle)} />
          <InorganicCollapsibleLinks onSubtitleClick={(subtitle) => openDetail('Inorganic Objects', subtitle)} />
          <DiagramToolsCollapsibleLinks onSubtitleClick={(subtitle) => openDetail('Diagram Tools', subtitle)} />
          <ViewpointToolsCollapsibleLinks onSubtitleClick={(subtitle) => openDetail('Viewpoint Tools', subtitle)} />
        </Paper>
      )}

      {/* Detail popup */}
      <ToolboxDetailPopup
        open={toolboxDetailOpen}
        subtitle={selectedSubtitle}
        group={selectedGroup}
        onClose={() => setToolboxDetailOpen(false)}
      />
    </>
  );
};

export default ToolboxButton;
