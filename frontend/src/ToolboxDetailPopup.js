import React from 'react';
import { Paper, Text, Breadcrumbs } from '@mantine/core';

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
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginBottom: 18, fontSize: '0.90rem', textTransform: 'uppercase', letterSpacing: 1, fontFamily: 'inherit', fontWeight: 400, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
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
        <span style={{ color: '#23272A', fontWeight: 400 }}>{subtitle}</span>
      </div>
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
