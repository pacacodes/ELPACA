import React, { useState } from 'react';
import { ScrollArea, Box } from '@mantine/core';
import NestedNavbar from './NestedNavbar';
import CommunicationNavbar from './CommunicationNavbar';
import ViewsSection from './ViewsSection';
import AIChatBotSection from './AIChatBotSection';

export default function MainNavbar() {
  const [activeSections, setActiveSections] = useState({
    nestedNavbar: true,
    communicationNavbar: true,
    viewsSection: true,
    aiChatBotSection: true,
  });

  const toggleSection = (section) => {
    setActiveSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <ScrollArea style={{ height: '100%' }}>
      {[
        { id: 'nestedNavbar', label: 'Nested Navbar', Component: NestedNavbar },
        { id: 'communicationNavbar', label: 'Communication', Component: CommunicationNavbar },
        { id: 'viewsSection', label: 'Views', Component: ViewsSection },
        { id: 'aiChatBotSection', label: 'AI Chat Bot', Component: AIChatBotSection },
      ].map(({ id, label, Component }) => (
        <Box key={id} style={{ marginBottom: '10px' }}>
          <Box
            onClick={() => toggleSection(id)}
            style={{
              cursor: 'pointer',
              padding: '10px',
              background: activeSections[id] ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
              borderRadius: '4px',
            }}
          >
            {label}
          </Box>
          {activeSections[id] && (
            <Box style={{ marginTop: '10px', paddingLeft: '10px' }}>
              <Component />
            </Box>
          )}
        </Box>
      ))}
    </ScrollArea>
  );
}