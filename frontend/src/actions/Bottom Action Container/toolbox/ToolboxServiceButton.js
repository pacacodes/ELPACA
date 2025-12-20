import React, { useState } from 'react';
import { Card, ThemeIcon } from '@mantine/core';
import '../../../communication/CommunicationNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';
// Unified popup container
import ToolboxPopupContainer from './ToolboxPopupContainer';
import OrganicCollapsibleLinks from './organic/OrganicCollapsibleLinks';
import InorganicCollapsibleLinks from './Inorganic Objects/InorganicCollapsibleLinks';
import ToolsCollapsibleLinks from './Documenting Tools/ToolsCollapsibleLinks';
import DiagramToolsCollapsibleLinks from './Diagram Tools/DiagramToolsCollapsibleLinks';
import ViewpointToolsCollapsibleLinks from './View Tools/ViewpointToolsCollapsibleLinks';
import ToolboxDetailOrganicLayout from './organic/ToolboxDetailOrganicLayout';
import InorganicWallForm from './Inorganic Objects/Wall/InorganicWallForm';
import BreadcrumbHeader from './BreadcrumbHeader';

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
      {/* Unified popup (background + breadcrumb), content switches between list and detail */}
      <ToolboxPopupContainer
        open={open}
        subtitle={toolboxDetailOpen ? (selectedSubtitle || selectedGroup) : undefined}
        onClose={() => { setOpen(false); setToolboxDetailOpen(false); }}
        onBack={toolboxDetailOpen ? () => setToolboxDetailOpen(false) : undefined}
      >
        {toolboxDetailOpen ? (
          // Detail content router
          <>
            {selectedGroup === 'Organic Objects' && (
              // Organic detail layout
              <ToolboxDetailOrganicLayout />
            )}
            {selectedGroup === 'Inorganic Objects' && (
              // Inorganic: Wall form (extend later for other subtitles)
              <InorganicWallForm onSubmit={(e) => {
                e.preventDefault();
                const height = parseFloat(e.target.height.value);
                const width = parseFloat(e.target.width.value);
                console.log('Wall parameters submitted:', { height, width });
              }} />
            )}
            {/* TODO: Add routes for Documenting, Viewpoint, Diagram detail content */}
          </>
        ) : (
          // Main list of collapsible groups
          <>
            <OrganicCollapsibleLinks onSubtitleClick={(subtitle) => openDetail('Organic Objects', subtitle)} />
            <InorganicCollapsibleLinks onSubtitleClick={(subtitle) => openDetail('Inorganic Objects', subtitle)} />
            <ToolsCollapsibleLinks onSubtitleClick={(subtitle) => openDetail('Documenting Tools', subtitle)} />
            <ViewpointToolsCollapsibleLinks onSubtitleClick={(subtitle) => openDetail('Viewpoint Tools', subtitle)} />
            <DiagramToolsCollapsibleLinks onSubtitleClick={(subtitle) => openDetail('Diagram Tools', subtitle)} />
          </>
        )}
      </ToolboxPopupContainer>
    </>
  );
}
