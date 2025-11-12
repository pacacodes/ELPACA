import React, { useContext, useEffect } from 'react';
import { Box, Text, Button } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { SectionContext } from './SectionContext';

export default function AIChatBotSection() {
  const { sectionsState, toggleSection } = useContext(SectionContext);

  useEffect(() => {
    toggleSection('aiChatBotSection'); // Ensure this section is open by default
  }, [toggleSection]);

  const isCollapsed = sectionsState.aiChatBotSection;

  return (
    <Box
      className="communication-navbar-scroll"
      style={{
        position: 'fixed',
        top: 10 + 480 + 10 - 35 - 80 + 20 + (isCollapsed ? 35 + 15 + 40 : 290 + 200 - 100) + 15 + (sectionsState.nestedNavbar ? 10 : 0) + (sectionsState.viewsSection ? 80 : 35) + 15, // Adjust position below ViewsSection and move up 100px when expanded
        height: isCollapsed ? '35px' : '200px', // Set height to 300px when expanded
        overflowY: isCollapsed ? 'hidden' : 'auto', // Add scrollbar when expanded
        background: 'rgba(200,200,200,0.2)', // Match background style
        right: 19,
        width: 190,
        minWidth: 100,
        maxWidth: 260,
        zIndex: 199,
        borderRadius: 8,
        padding: isCollapsed ? '0 16px' : '16px', // Match padding for collapsed view
      }}
    >
      <Box
        style={{
          position: 'relative',
          top: '-5px', // Move content up by 10px
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, cursor: 'pointer' }} onClick={() => toggleSection('aiChatBotSection')}>
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
            AI Chat Bot
          </Text>
          <FontAwesomeIcon icon={isCollapsed ? faPlus : faMinus} style={{ fontSize: '0.8rem', marginLeft: '-12px' }} />
        </div>
        {!isCollapsed && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginLeft: 0, marginBottom: 8, justifyContent: 'space-between', height: 'calc(100% - 40px)' }}>
            <div style={{ flex: 1, overflowY: 'auto', padding: '8px' }}>
              <Text fw={400} c="#23272A" style={{ fontSize: '0.85rem' }}>
                Welcome to the Chat Bot! How can I assist you today?
              </Text>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', padding: '8px', borderTop: '1px solid #ccc', position: 'relative', height: '100px' }}>
              <select style={{ position: 'absolute', left: '8px', bottom: '8px', padding: '4px', border: 'none', borderRadius: '4px' }}>
                <option value="agent">Agent</option>
                <option value="ask">Ask</option>
              </select>
              <input
                type="text"
                placeholder="Type your message..."
                style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginRight: '8px', height: '100%', width: 'calc(100% - 60px)' }}
              />
              <Button variant="filled" color="blue" size="sm" style={{ position: 'absolute', right: '8px', bottom: '8px', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', boxShadow: 'none', background: 'none' }}>
                <FontAwesomeIcon icon={faPaperPlane} style={{ fontSize: '1rem', color: '#4A4A4A' }} />
              </Button>
            </div>
          </div>
        )}
      </Box>
    </Box>
  );
}