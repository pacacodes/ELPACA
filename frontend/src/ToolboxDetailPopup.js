import React from 'react';
import { Paper, Text, Breadcrumbs } from '@mantine/core';
import ToolboxDetailOrganicLayout from './ToolboxDetailOrganicLayout';

export default function ToolboxDetailPopup({ open, subtitle, group, onClose, onGroupClick }) {
  if (!open || !subtitle) return null;
  // Breadcrumb: TOOLBOX | [SUBTITLE] in one row, TOOLBOX and | lighter grey
  return (
    <Paper
      shadow="md"
      radius="md"
      style={{
        position: 'fixed',
        left: 32,
        bottom: 95,
  minWidth: 345,
  width: '345px',
        minHeight: 830,
        maxHeight: '830px',
        zIndex: 1202,
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'rgba(245,245,245,0.5)',
        borderRadius: '8px',
        overflowY: 'auto',
        pointerEvents: 'auto', // Ensure it does not block interactions with other elements
      }}
    >
      {/* Adjusted margins and padding to ensure the title/breadcrumb appears consistent across all toolbox detailed popups */}
      <Text
        fw={400}
        style={{
          fontSize: '0.90rem', /* Matched font size to the main Toolbox title */
          marginBottom: 12, /* Adjusted marginBottom for consistency */
          marginLeft: 0, /* Ensured alignment with other popups */
          marginTop: 12, /* Added marginTop for spacing */
          textTransform: 'uppercase',
          letterSpacing: 1,
          fontFamily: 'inherit',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          background: 'rgba(0,0,0,0.1)',
          padding: '12px 16px', /* Further increased padding for a larger background */
          borderRadius: '4px'
        }}
      >
        <span
          style={{ color: '#bdbdbd', fontWeight: 400, cursor: 'pointer', transition: 'color 0.2s' }}
          onClick={onClose}
          tabIndex={0}
          role="button"
          aria-label="Back to Toolbox"
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onClose(); }}
        >
          TOOLBOX
        </span>
        <span style={{ color: '#bdbdbd', margin: '0 8px', fontWeight: 400 }}>|</span>
        <span style={{ color: '#23272A', fontWeight: 400 }}>{subtitle || group}</span>
      </Text>
  {/* Organic group layout example */}
  {group === 'Organic Objects' && <ToolboxDetailOrganicLayout />}
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
