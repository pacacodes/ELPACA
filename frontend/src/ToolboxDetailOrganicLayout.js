import React from 'react';
import { Grid, Card, Text, Group } from '@mantine/core';
import SunSection from './ToolboxDetailOrganicSunSection';
import WateringSection from './ToolboxDetailOrganicWateringSection';
import SoilTypeSection from './ToolboxDetailOrganicSoilTypeSection';

export default function ToolboxDetailOrganicLayout() {
  return (
    <div style={{ width: 'calc(100% + 100px)', marginTop: 16 }}> {/* Increased width by 100px */}
      <SunSection style={{ width: 'calc(100% + 100px)' }} /> {/* Increased section width by 100px */}
      <WateringSection style={{ width: 'calc(100% + 100px)' }} /> {/* Increased section width by 100px */}
      <SoilTypeSection style={{ width: 'calc(100% + 100px)' }} /> {/* Increased section width by 100px */}
    </div>
  );
}
