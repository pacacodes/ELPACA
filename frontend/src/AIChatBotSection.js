import React, { useContext, useEffect } from 'react';
import { Box, Text, Button } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { SectionContext } from './SectionContext';

export default function AIChatBotSection() {
  const { sectionsState, toggleSection } = useContext(SectionContext);

  useEffect(() => {
    toggleSection('aiChatBotSection'); // Ensure this section is open by default
  }, [toggleSection]);

  return (
    <Box
      className="communication-navbar-scroll"
      style={{
        position: 'fixed',
        top: 34 + 400 + 10 + 30 + 25 - 10 + 5 + 5, // Moved down by an additional 5px
        height: '540px', // Increased height by 40px
        overflowY: 'auto', // Add scrollbar when expanded
        background: 'rgba(200,200,200,0.2)', // Match background style
        right: 9, // Moved to the right by 10px
        width: 190,
        minWidth: 100,
        maxWidth: 260,
        zIndex: 199,
        borderRadius: 8,
        padding: '16px', // Match padding for collapsed view
      }}
    >
      <Box
        style={{
          position: 'relative',
          top: '-5px', // Move content up by 10px
        }}
      >
        <div style={{ marginBottom: 8 }}>
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
        </div>
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
      </Box>
    </Box>
  );
}