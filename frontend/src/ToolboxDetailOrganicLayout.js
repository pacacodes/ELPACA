import React from 'react';
import { Grid, Card, Text, Group } from '@mantine/core';
import SunSection from './ToolboxDetailOrganicSunSection';
import WateringSection from './ToolboxDetailOrganicWateringSection';
import SoilTypeSection from './ToolboxDetailOrganicSoilTypeSection';

export default function ToolboxDetailOrganicLayout() {
  return (
    <div style={{ width: '100%', marginTop: 32 }}>
      <SunSection />
      <WateringSection />
      <SoilTypeSection />
    </div>
  );
}
