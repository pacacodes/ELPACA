import React from 'react';
import BIMViewer from './viewer/BIMViewer';
import BIMSidebar from './ui/BIMSidebar';
import { Group } from '@mantine/core';

/**
 * BIMApp
 * Top-level BIM module entry. Combines viewer and sidebar in a modular, IP-clear way.
 */
export default function BIMApp() {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: 0, overflow: 'hidden' }}>
      <BIMViewer />
    </div>
  );
}
