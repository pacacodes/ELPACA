import React from 'react';
import { Box, Button, Group } from '@mantine/core';

export default function TopBar() {
  return (
    <Box
      style={{
        position: 'fixed',
        top: '10px', // Moved down by 10px
        left: '10px', // Added 10px gap from the left edge
        right: '10px', // Added 10px gap from the right edge
        width: 'auto', // Adjusted width to allow for 10px gap on both sides
        height: '25px',
        backgroundColor: '#f0f0f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start', // Adjusted alignment to remove search bar
        padding: '0 10px',
        zIndex: 1000,
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px', // Rounded corners
      }}
    >
      {/* Left side buttons */}
      <Group spacing="xs">
        {['ELPACA', 'File', 'Edit', 'View', 'Design', 'Document', 'Options', 'Teamwork', 'Window', 'Help'].map((label) => (
          <Button
            key={label}
            variant="subtle"
            size="xs"
            style={{
              fontSize: '0.75rem',
              padding: '2px 6px',
              height: '20px',
              lineHeight: '20px',
              background: 'none', // Removed background
              border: 'none', // Removed border
              boxShadow: 'none', // Removed box shadow
            }}
          >
            {label}
          </Button>
        ))}
      </Group>
    </Box>
  );
}