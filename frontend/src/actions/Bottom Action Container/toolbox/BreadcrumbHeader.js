import React from 'react';
import { Text } from '@mantine/core';

export default function BreadcrumbHeader({ subtitle, onBack }) {
  return (
    <Text
      fw={400}
      style={{
        fontSize: '1.0rem',
        marginBottom: 12,
        marginLeft: 0,
        marginTop: 0,
        textTransform: 'uppercase',
        letterSpacing: 1,
        fontFamily: 'inherit',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        color: '#ffffff',
        position: 'sticky',
        top: 0,
        zIndex: 1,
        background: 'transparent',
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 36,
      }}
    >
      <span
        style={{ color: '#bdbdbd', fontWeight: 400, cursor: onBack ? 'pointer' : 'default', transition: 'color 0.2s' }}
        onClick={onBack}
        tabIndex={onBack ? 0 : -1}
        role={onBack ? 'button' : undefined}
        aria-label={onBack ? 'Back to Toolbox' : undefined}
        onKeyDown={e => { if (onBack && (e.key === 'Enter' || e.key === ' ')) onBack(); }}
      >
        TOOLBOX
      </span>
      {subtitle && <span style={{ color: '#bdbdbd', margin: '0 8px', fontWeight: 400 }}>|</span>}
      {subtitle && <span style={{ color: '#ffffff', fontWeight: 400 }}>{subtitle}</span>}
    </Text>
  );
}
