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
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" style={{ position: 'fixed', left: 12, bottom: 32, width: 72, zIndex: 1200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ThemeIcon size={48} radius="md" variant="light" color="#fff" style={{ cursor: 'pointer', background: 'transparent' }} onClick={() => setOpen(true)}>
          <FontAwesomeIcon icon={faPlus} style={{ fontSize: '1.8em', fontWeight: 300 }} color="#23272A" />
        </ThemeIcon>
      </Card>
      {open && (
        <Paper
          shadow="md"
          radius="md"
          className="communication-navbar-scroll"
          style={{
            position: 'fixed',
            left: 32,
            bottom: -70,
            minWidth: collapsed ? 80 : 245,
            width: collapsed ? '80px' : '245px',
            minHeight: 830,
            maxHeight: '830px',
            zIndex: 1201,
            padding: collapsed ? '2px' : '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'rgba(245,245,245,0.5)',
            borderRadius: '8px',
            overflowY: 'auto',
            position: 'relative',
            transition: 'width 0.3s',
          }}
        >
          {/* Collapse/expand button in top right when detail popup is open */}
          {toolboxDetailOpen ? (
            collapsed ? (
              <div style={{ width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', position: 'absolute', top: 20, left: 0, zIndex: 2 }}>
                <button
                  style={{ background: 'none', color: '#23272A', border: 'none', fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer', padding: 0, margin: 0, lineHeight: 1 }}
                  aria-label="Expand"
                  onClick={() => setCollapsed(false)}
                >
                  <FontAwesomeIcon icon={faPlus} style={{ fontSize: '0.9em' }} />
                </button>
              </div>
            ) : (
              <button
                style={{ position: 'absolute', top: 20, right: 20, background: 'none', color: '#23272A', border: 'none', fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer', zIndex: 2, padding: 0, margin: 0, lineHeight: 1 }}
                aria-label="Collapse"
                onClick={() => setCollapsed(true)}
              >
                <FontAwesomeIcon icon={faMinus} style={{ fontSize: '0.9em' }} />
              </button>
            )
          ) : (
            <button
              style={{ position: 'absolute', top: 20, right: 20, background: 'none', color: '#23272A', border: 'none', fontWeight: 500, fontSize: '1.5rem', cursor: 'pointer', zIndex: 2 }}
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          )}
          {/* Title, centered and rotated when collapsed */}
          <Text
            fw={400}
            c="#23272A"
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
              width: collapsed ? '80px' : '100%',
              transition: 'transform 0.3s',
              transform: collapsed ? 'rotate(-90deg)' : 'none',
              position: collapsed ? 'absolute' : 'static',
              top: collapsed ? '50%' : 'auto',
              left: collapsed ? '50%' : 'auto',
              marginTop: collapsed ? 0 : '3px',
              marginLeft: collapsed ? 0 : '2px',
              transform: collapsed ? 'translate(-50%, -50%) rotate(-90deg)' : 'none',
            }}
          >
            Toolbox
          </Text>
          {/* Only show content when not collapsed */}
          {!collapsed && (
            <>
              <OrganicCollapsibleLinks onSubtitleClick={subtitle => { setSelectedSubtitle(subtitle); setToolboxDetailOpen(true); }} />
              <InorganicCollapsibleLinks onSubtitleClick={subtitle => { setSelectedSubtitle(subtitle); setToolboxDetailOpen(true); }} />
              <ToolsCollapsibleLinks onSubtitleClick={subtitle => { setSelectedSubtitle(subtitle); setToolboxDetailOpen(true); }} />
              <ViewpointToolsCollapsibleLinks onSubtitleClick={subtitle => { setSelectedSubtitle(subtitle); setToolboxDetailOpen(true); }} />
              <DiagramToolsCollapsibleLinks onSubtitleClick={subtitle => { setSelectedSubtitle(subtitle); setToolboxDetailOpen(true); }} />
            </>
          )}
        </Paper>
      )}
  {/* Toolbox detail popup to the right, same height/width as toolbox */}
    <ToolboxDetailPopup open={toolboxDetailOpen} subtitle={selectedSubtitle} onClose={() => { setToolboxDetailOpen(false); setCollapsed(false); }} shift={collapsed ? 265 : 0} />
    </>
  );
}
