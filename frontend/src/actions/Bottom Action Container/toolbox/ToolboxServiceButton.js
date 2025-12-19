import React, { useState } from 'react';
import { Card, ThemeIcon, Paper, Text, Portal } from '@mantine/core';
import '../../../communication/CommunicationNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import ToolboxDetailPopup from './ToolboxDetailPopup';
import OrganicCollapsibleLinks from './organic/OrganicCollapsibleLinks';
import InorganicCollapsibleLinks from './InorganicCollapsibleLinks';
import ToolsCollapsibleLinks from './Documenting Tools/ToolsCollapsibleLinks';
import DiagramToolsCollapsibleLinks from './Diagram Tools/DiagramToolsCollapsibleLinks';
import ViewpointToolsCollapsibleLinks from './View Tools/ViewpointToolsCollapsibleLinks';

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
            setToolboxDetailOpen(false);
          }}
          aria-label="Open Toolbox"
        >
          <FontAwesomeIcon icon={faToolbox} style={{ fontSize: '1.32em', fontWeight: 300 }} color="#23272A" />
        </button>
      ) : (
        <Card shadow="sm" padding="lg" radius="md" style={{ position: 'fixed', left: '50%', transform: 'translateX(-50%)', bottom: 32, width: 72, zIndex: 1200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ThemeIcon size={56} radius="md" variant="light" color="#fff" style={{ cursor: 'pointer', background: 'transparent', marginBottom: '20px' }} onClick={() => { setOpen(true); setToolboxDetailOpen(false); }}>
            <FontAwesomeIcon icon={faToolbox} style={{ fontSize: '1.32em', fontWeight: 300 }} color="#23272A" />
          </ThemeIcon>
        </Card>
      )}
      {/* Only show Toolbox popup when detail popup is NOT open */}
      {open && !toolboxDetailOpen && (
        <Portal>
        <Paper
          shadow="md"
          radius="md"
          className="communication-navbar-scroll"
          style={{
            position: 'fixed',
            left: '50%',
            transform: 'translateX(calc(-50% - clamp(260px, 30vw, 520px)))',
            top: 'clamp(12px, 2vh, 15px)',
            bottom: 'clamp(12px, 2vh, 15px)',
            minWidth: 250,
            width: 'clamp(250px, 24vw, 320px)',
            zIndex: 3000,
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'rgba(26, 26, 26, 0.9)', // Slightly transparent dark grey
            borderRadius: '8px',
            overflowY: 'auto',
            transition: 'width 0.3s, top 0.3s, bottom 0.3s, transform 0.3s',
            pointerEvents: 'auto',
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
            fw={500}
            c="#ffffff"
            style={{
              fontSize: '1.0rem',
              marginBottom: 14,
              marginLeft: 2,
              marginTop: 0,
              textTransform: 'uppercase',
              letterSpacing: 1,
              fontFamily: 'inherit',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              width: '100%',
            }}
          >
            Toolbox
          </Text>

          {/* Collapsible link groups (ordered): Organic, Inorganic, Documenting, Viewpoint, Diagram */}
          <OrganicCollapsibleLinks onSubtitleClick={(subtitle) => openDetail('Organic Objects', subtitle)} />
          <InorganicCollapsibleLinks onSubtitleClick={(subtitle) => openDetail('Inorganic Objects', subtitle)} />
          <ToolsCollapsibleLinks onSubtitleClick={(subtitle) => openDetail('Documenting Tools', subtitle)} />
          <ViewpointToolsCollapsibleLinks onSubtitleClick={(subtitle) => openDetail('Viewpoint Tools', subtitle)} />
          <DiagramToolsCollapsibleLinks onSubtitleClick={(subtitle) => openDetail('Diagram Tools', subtitle)} />
        </Paper>
        </Portal>
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
