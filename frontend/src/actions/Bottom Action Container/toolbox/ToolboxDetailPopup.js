import React, { useContext } from 'react';
import { Paper, Text, Portal } from '@mantine/core';
import ToolboxDetailOrganicLayout from './organic/ToolboxDetailOrganicLayout';
import InorganicWallForm from './inorganic-collapsible-link-buttons/InorganicWallForm';
import ViewerContext from '../../../Navigation/views/ViewerContext';

export default function ToolboxDetailPopup({ open, subtitle, group, onClose, onGroupClick }) {
  const { setWallDimensions } = useContext(ViewerContext);

  if (!open || !subtitle) return null;
  // Breadcrumb: TOOLBOX | [SUBTITLE] in one row, TOOLBOX and | lighter grey
  return (
    <Portal>
    <Paper
      shadow="md"
      radius="md"
       style={{
        position: 'fixed',
        left: '50%',
        transform: 'translateX(calc(-50% - clamp(260px, 30vw, 520px)))',
        top: 'clamp(12px, 2vh, 15px)',
        bottom: 'clamp(12px, 2vh, 15px)',
        minWidth: 250,
        width: 'clamp(250px, 24vw, 320px)',
        zIndex: 3000,
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'rgba(26, 26, 26, 0.9)', // Slightly transparent dark grey
        borderRadius: '8px',
        overflowY: 'auto',
        transition: 'width 0.3s, top 0.3s, bottom 0.3s, transform 0.3s',
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
    </Portal>
  );
}
