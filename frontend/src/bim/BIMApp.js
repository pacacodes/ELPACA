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
    <Group noWrap align="flex-start" style={{ width: '100%', height: '100vh', background: '#e9ecef' }}>
      <BIMSidebar>
        {/* Future: property panels, tools, file upload, etc. */}
        <div>Load IFC, inspect properties, and more…</div>
      </BIMSidebar>
      <div style={{ flex: 1, height: '100%' }}>
        <BIMViewer />
      </div>
    </Group>
  );
}
