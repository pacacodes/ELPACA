import React from 'react';
import { Paper, Portal } from '@mantine/core';
import BreadcrumbHeader from './BreadcrumbHeader';

export default function ToolboxPopupContainer({ open, subtitle, onClose, onBack, children }) {
  if (!open) return null;
  return (
    <Portal>
      <Paper
        shadow="md"
        radius="md"
        className="communication-navbar-scroll"
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
          background: 'rgba(26, 26, 26, 0.9)',
          borderRadius: '8px',
          overflowY: 'auto',
          transition: 'width 0.3s, top 0.3s, bottom 0.3s, transform 0.3s',
          pointerEvents: 'auto',
        }}
      >
        {/* Close button */}
        <button
          style={{ position: 'absolute', top: 20, right: 20, background: 'none', color: '#ffffff', border: 'none', fontWeight: 500, fontSize: '1.5rem', cursor: 'pointer', zIndex: 2 }}
          aria-label="Close"
          onClick={onClose}
        >
          ×
        </button>

        {/* Breadcrumb header */}
        <BreadcrumbHeader subtitle={subtitle} onBack={onBack} />

        {/* Content */}
        {children}
      </Paper>
    </Portal>
  );
}
