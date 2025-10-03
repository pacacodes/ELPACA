import React from 'react';
import { Box, Text } from '@mantine/core';
import './CommunicationNavbar.css';

export default function ViewsSection() {
  return (
    <>
      <Box style={{ height: '24px' }} />
  <Box className="communication-navbar-scroll" style={{ position: 'fixed', top: 950, right: 29, width: 260, minWidth: 180, maxWidth: 340, height: '80px', zIndex: 197, background: 'rgba(0,0,0,0.03)', borderRadius: 8, padding: 16, overflowY: 'auto' }}>
        <Text
          fw={400}
          c="#23272A"
          style={{
            fontSize: '0.90rem',
            marginBottom: 18,
            marginLeft: 10,
            textTransform: 'uppercase',
            letterSpacing: 1,
            fontFamily: 'inherit',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: '100%'
          }}
        >
          Views
        </Text>
        {/* Add content for Views section here */}
      </Box>
    </>
  );
}
