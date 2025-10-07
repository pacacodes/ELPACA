import React from 'react';
import { Paper, Text } from '@mantine/core';

export default function ToolboxDetailPopup({ open, subtitle, onClose }) {
  if (!open || !subtitle) return null;
  return (
  <Paper shadow="md" radius="md" style={{ position: 'fixed', left: 358, bottom: 101, minWidth: 245, width: '245px', minHeight: 830, maxHeight: '830px', zIndex: 1202, padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(245,245,245,0.5)', borderRadius: '8px', overflowY: 'auto' }}>
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
          width: '100%'
        }}
      >
        {subtitle}
      </Text>
      {/* Add more detail content here if needed */}
      <button
        style={{ position: 'absolute', top: 20, right: 20, background: 'none', color: '#23272A', border: 'none', fontWeight: 500, fontSize: '1.5rem', cursor: 'pointer' }}
        aria-label="Close"
        onClick={onClose}
      >
        ×
      </button>
    </Paper>
  );
}
