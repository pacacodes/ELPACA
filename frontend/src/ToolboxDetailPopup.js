import React from 'react';
import { Paper, Text, Breadcrumbs } from '@mantine/core';

export default function ToolboxDetailPopup({ open, subtitle, group, onClose, onGroupClick }) {
  if (!open || !subtitle) return null;
  // Breadcrumbs logic
  const items = [
    { title: 'TOOLBOX', onClick: onClose },
    ...(group ? [{ title: group.toUpperCase(), onClick: () => onGroupClick && onGroupClick(group) }] : []),
    { title: subtitle }
  ];
  // Match Toolbox popup position and size
  return (
    <Paper
      shadow="md"
      radius="md"
      style={{
        position: 'fixed',
        left: 32,
        bottom: -70,
        minWidth: 245,
        width: '245px',
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
      <Breadcrumbs
        separator="|"
        style={{ marginBottom: 18, width: '100%', fontSize: '0.90rem', textTransform: 'uppercase', letterSpacing: 1, fontFamily: 'inherit', color: '#23272A' }}
      >
        {items.map((item, idx) => (
          <span
            key={idx}
            style={{ cursor: item.onClick ? 'pointer' : 'default', color: item.onClick ? '#007bff' : '#23272A', fontWeight: item.onClick ? 500 : 400 }}
            onClick={item.onClick}
          >
            {item.title}
          </span>
        ))}
      </Breadcrumbs>
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
