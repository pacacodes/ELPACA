import React, { useContext } from 'react';
import { Box, Text } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { SectionContext } from './SectionContext';

export default function AIChatBotSection() {
  const { sectionsState, toggleSection } = useContext(SectionContext);
  const isCollapsed = sectionsState.aiChatBotSection;

  return (
    <Box
      style={{
        position: 'fixed',
        top: isCollapsed
          ? 34 + 280 + 10 + (sectionsState.nestedNavbar ? 60 : 0) + (sectionsState.communicationNavbar ? 60 : 0) + (sectionsState.viewsSection ? 60 : 0)
          : 1200, // Original position when expanded
        height: isCollapsed ? 20 : 'auto', // Set height to 20px when collapsed
        background: 'rgba(200,200,200,0.2)', // Match background style of ViewsSection
        right: 19,
        width: 190,
        minWidth: 190,
        maxWidth: 340,
        zIndex: 196,
        borderRadius: 8,
        padding: isCollapsed ? 0 : 16,
      }}
    >
      <div
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, cursor: 'pointer' }}
        onClick={() => toggleSection('aiChatBotSection')}
      >
        <Text
          fw={400}
          c="#23272A"
          style={{
            fontSize: '0.90rem',
            textTransform: 'uppercase',
            letterSpacing: 1,
            fontFamily: 'inherit',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: '100%',
          }}
        >
          Chat Bot
        </Text>
        <FontAwesomeIcon icon={isCollapsed ? faPlus : faMinus} style={{ fontSize: '0.8rem', marginLeft: '-12px' }} />
      </div>
      {!isCollapsed && (
        <div style={{ padding: 8 }}>
          <Text fw={400} c="#23272A" style={{ fontSize: '0.85rem' }}>
            Welcome to the Chat Bot! How can I assist you today?
          </Text>
        </div>
      )}
    </Box>
  );
}