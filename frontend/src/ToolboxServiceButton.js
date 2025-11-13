import React, { useState } from 'react';
import { Card, ThemeIcon, Paper, Text } from '@mantine/core';
import './CommunicationNavbar.css';
import OrganicCollapsibleLinks from './OrganicCollapsibleLinks';
import InorganicCollapsibleLinks from './InorganicCollapsibleLinks';
import ToolsCollapsibleLinks from './ToolsCollapsibleLinks';
import ToolboxDetailPopup from './ToolboxDetailPopup';
import ViewpointToolsCollapsibleLinks from './ViewpointToolsCollapsibleLinks';
import DiagramToolsCollapsibleLinks from './DiagramToolsCollapsibleLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

export default function ObjectsAndSystemsServiceButton() {
  const [open, setOpen] = useState(false);
  const [toolboxDetailOpen, setToolboxDetailOpen] = useState(false);
  const [selectedSubtitle, setSelectedSubtitle] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" style={{ position: 'fixed', left: '50%', transform: 'translateX(-50%)', bottom: 32, width: 72, zIndex: 1200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ThemeIcon size={48} radius="md" variant="light" color="#fff" style={{ cursor: 'pointer', background: 'transparent' }} onClick={() => setOpen(true)}>
          <FontAwesomeIcon icon={faPlus} style={{ fontSize: '1.8em', fontWeight: 300 }} color="#23272A" />
        </ThemeIcon>
      </Card>
      {/* Only show Toolbox popup when detail popup is NOT open */}
      {open && !toolboxDetailOpen && (
        <Paper
          shadow="md"
          radius="md"
          className="communication-navbar-scroll"
          style={{
            position: 'fixed',
            left: 252, // Adjusted to move the popup 20px further to the right
            bottom: -35, // Adjusted to move the popup down by an additional 5px
            minWidth: 245,
            width: '245px',
            minHeight: 870, // Increased height by 40px
            maxHeight: '870px', // Increased height by 40px
            zIndex: 1201,
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'rgba(26, 26, 26, 0.9)', // Slightly transparent dark grey
            borderRadius: '8px',
            overflowY: 'auto',
            position: 'relative',
            transition: 'width 0.3s, bottom 0.3s', // Added transition for smooth movement
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
          <OrganicCollapsibleLinks onSubtitleClick={subtitle => { setSelectedSubtitle(subtitle); setSelectedGroup('Organic Objects'); setToolboxDetailOpen(true); }} />
          <InorganicCollapsibleLinks onSubtitleClick={subtitle => { setSelectedSubtitle(subtitle); setSelectedGroup('Inorganic Objects'); setToolboxDetailOpen(true); }} />
          <ToolsCollapsibleLinks onSubtitleClick={subtitle => { setSelectedSubtitle(subtitle); setSelectedGroup('Documenting Tools'); setToolboxDetailOpen(true); }} />
          <ViewpointToolsCollapsibleLinks onSubtitleClick={subtitle => { setSelectedSubtitle(subtitle); setSelectedGroup('Viewpoint Tools'); setToolboxDetailOpen(true); }} />
          <DiagramToolsCollapsibleLinks onSubtitleClick={subtitle => { setSelectedSubtitle(subtitle); setSelectedGroup('Diagram Tools'); setToolboxDetailOpen(true); }} />
        </Paper>
      )}
  {/* Toolbox detail popup to the right, same height/width as toolbox */}
    {/* When detail popup is open, hide Toolbox popup and show only detail popup */}
    {toolboxDetailOpen && (
      <ToolboxDetailPopup
        open={toolboxDetailOpen}
        subtitle={selectedSubtitle}
        group={selectedGroup}
        onClose={() => { setToolboxDetailOpen(false); setCollapsed(false); setSelectedSubtitle(null); setSelectedGroup(null); }}
        shift={collapsed ? 265 : 0}
        style={{
          position: 'fixed',
          left: 252, // Adjusted to match the placement of the toolbox popup
          bottom: -35, // Same bottom alignment as the toolbox popup
          minWidth: 245,
          width: '245px',
          minHeight: 870, // Same height as the toolbox popup
          maxHeight: '870px',
          zIndex: 1201,
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'rgba(26, 26, 26, 0.9)',
          borderRadius: '8px',
          overflowY: 'auto',
          transition: 'width 0.3s, bottom 0.3s',
        }}
      />
    )}
    </>
  );
}
