import React, { useContext } from 'react';
import { Box, Paper } from '@mantine/core';
import NestedNavbar from './NestedNavbar';
import CommunicationNavbar from './CommunicationNavbar';
import ViewsSection from './ViewsSection';
import AIChatBotSection from './AIChatBotSection';
import { SectionContext } from './SectionContext';

export default function MainNavbar() {
  const { sectionsState } = useContext(SectionContext);

  return (
    <Paper
      shadow="md"
      radius="md"
      style={{
        position: 'fixed',
        left: 32,
        bottom: 90,
        width: '260px',
        zIndex: 1202,
        padding: '1rem',
        background: 'rgba(26, 26, 26, 0.9)',
        borderRadius: '8px',
        overflowY: 'auto',
      }}
    >
      <Box style={{ marginBottom: sectionsState.nestedNavbar ? '10px' : '20px' }}>
        <NestedNavbar activeService={0} />
      </Box>
      <Box style={{ marginBottom: sectionsState.communicationNavbar ? '10px' : '20px' }}>
        <CommunicationNavbar />
      </Box>
      <Box style={{ marginBottom: sectionsState.viewsSection ? '10px' : '20px' }}>
        <ViewsSection />
      </Box>
      <Box>
        <AIChatBotSection />
      </Box>
    </Paper>
  );
}