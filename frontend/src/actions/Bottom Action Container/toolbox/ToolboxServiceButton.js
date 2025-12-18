import React, { useState } from 'react';
import { Card, ThemeIcon, Paper, Text } from '@mantine/core';
import '../../../communication/CommunicationNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import ToolboxDetailPopup from './ToolboxDetailPopup';
import OrganicCollapsibleLinks from './organic/OrganicCollapsibleLinks';
import InorganicCollapsibleLinks from './InorganicCollapsibleLinks';
import ToolsCollapsibleLinks from './ToolsCollapsibleLinks';
import DiagramToolsCollapsibleLinks from './DiagramToolsCollapsibleLinks';
import ViewpointToolsCollapsibleLinks from './ViewpointToolsCollapsibleLinks';
import DocumentingToolsCollapsibleLinks from './DocumentingToolsCollapsibleLinks';

export default function ObjectsAndSystemsServiceButton({ inline = false }) {
  const [open, setOpen] = useState(false);
  const [toolboxDetailOpen, setToolboxDetailOpen] = useState(false);
  const [selectedSubtitle, setSelectedSubtitle] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [collapsed, setCollapsed] = useState(false);

  const openDetail = (group, subtitle) => {
    console.log('[ToolboxServiceButton] Open detail:', group, subtitle);
    setSelectedGroup(group);
    setSelectedSubtitle(subtitle);
    setToolboxDetailOpen(true);
  };

  return (
    <>
      {inline ? (
        <button
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => {
            console.log('[ToolboxServiceButton] Inline trigger clicked');
            setOpen(true);
            try {
              window.dispatchEvent(new CustomEvent('openToolboxGroup', { detail: 'documenting' }));
            } catch (e) {}
          }}
          aria-label="Open Toolbox"
        >
          <FontAwesomeIcon icon={faToolbox} style={{ fontSize: '1.32em', fontWeight: 300 }} color="#23272A" />
        </button>
      ) : (
        <Card shadow="sm" padding="lg" radius="md" style={{ position: 'fixed', left: '50%', transform: 'translateX(-50%)', bottom: 32, width: 72, zIndex: 1200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ThemeIcon size={56} radius="md" variant="light" color="#fff" style={{ cursor: 'pointer', background: 'transparent', marginBottom: '20px' }} onClick={() => setOpen(true)}>
            <FontAwesomeIcon icon={faToolbox} style={{ fontSize: '1.32em', fontWeight: 300 }} color="#23272A" />
          </ThemeIcon>
        </Card>
      )}
      {/* Only show Toolbox popup when detail popup is NOT open */}
      {open && !toolboxDetailOpen && (
        <Paper
          shadow="md"
          radius="md"
          className="communication-navbar-scroll"
          style={{
            position: 'fixed',
            left: '50%',
            transform: 'translateX(-50%)',
            top: 324,
            minWidth: 245,
            width: '245px',
            minHeight: 870, // Increased height by 40px
            maxHeight: '870px', // Increased height by 40px
            zIndex: 3000,
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'rgba(26, 26, 26, 0.9)', // Slightly transparent dark grey
            borderRadius: '8px',
            overflowY: 'auto',
            transition: 'width 0.3s, top 0.3s',
          }}
        >
          {/* Always show close button in top right */}
          <button
            style={{ position: 'absolute', top: 20, right: 20, background: 'none', color: '#ffffff', border: 'none', fontWeight: 500, fontSize: '1.5rem', cursor: 'pointer', zIndex: 2 }}
            aria-label="Close"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
          {/* Title */}
          <Text
            fw={400}
            c="#ffffff" // Updated to white text
            style={{
              fontSize: '0.90rem',
              marginBottom: 18,
              marginLeft: 2,
              marginTop: 3,
              textTransform: 'uppercase',
              letterSpacing: 1,
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

      {/* Detail popup rendered separately */}
      <ToolboxDetailPopup
        open={toolboxDetailOpen}
        subtitle={selectedSubtitle}
        group={selectedGroup}
        onClose={() => setToolboxDetailOpen(false)}
      />
    </>
  );
}
