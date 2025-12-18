import React, { useContext } from 'react';
import { Paper, Text } from '@mantine/core';
import ToolboxDetailOrganicLayout from './organic/ToolboxDetailOrganicLayout';
import InorganicWallForm from './inorganic-collapsible-link-buttons/InorganicWallForm';
import ViewerContext from '../../Navigation/views/ViewerContext';

export default function ToolboxDetailPopup({ open, subtitle, group, onClose, onGroupClick }) {
  const { setWallDimensions } = useContext(ViewerContext);

  if (!open || !subtitle) return null;
  // Breadcrumb: TOOLBOX | [SUBTITLE] in one row, TOOLBOX and | lighter grey
  return (
    <Paper
      shadow="md"
      radius="md"
      style={{
        position: 'fixed',
        left: 252, // Moved to the right by 200px
        bottom: 90, // Moved down by an additional 5px
        minWidth: 545, // Increased width by 100px
        width: '645px', // Increased width by 100px
        minHeight: 870, // Increased height by 100px
        maxHeight: '900px', // Increased height by 100px
        zIndex: 1202,
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'rgba(26, 26, 26, 0.9)', // Slightly transparent dark grey
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
          color: '#ffffff', // White text
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
        <span style={{ color: '#ffffff', fontWeight: 400 }}>{subtitle || group}</span>
      </Text>
  {/* Organic group layout example */}
  {group === 'Organic Objects' && <ToolboxDetailOrganicLayout />}
  {/* Inorganic Objects wall parameters form */}
  {group === 'Inorganic Objects' && (
    <InorganicWallForm onSubmit={(e) => {
      e.preventDefault();
      const height = parseFloat(e.target.height.value);
      const width = parseFloat(e.target.width.value);
      console.log('Wall parameters submitted:', { height, width });

      // Store dimensions in context
      setWallDimensions({ height, width });
    }} />
  )}
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
