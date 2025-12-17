import React, { useState } from 'react';
import { Grid, Card, Text, Group, Button } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree, faImages } from '@fortawesome/free-solid-svg-icons';
import SunSection from './ToolboxDetailOrganicSunSection';
import WateringSection from './ToolboxDetailOrganicWateringSection';
import SoilTypeSection from './ToolboxDetailOrganicSoilTypeSection';
import WURPlantBrowser from '../../plants/WURPlantBrowser';

export default function ToolboxDetailOrganicLayout() {
  const [browserOpened, setBrowserOpened] = useState(false);

  return (
    <div style={{ width: 'calc(100% + 100px)', marginTop: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}> {/* Centered content */}
      <div style={{ marginBottom: 16, padding: 8, background: 'rgba(255, 255, 255, 0.05)', borderRadius: 8, maxWidth: 'calc(80% - 100px)', wordWrap: 'break-word', overflowWrap: 'break-word', textAlign: 'center' }}> {/* Centered text box */}
        <Group position="center"> {/* Centered icons */}
          <FontAwesomeIcon icon={faTree} style={{ fontSize: '1.2em', color: '#00CED1' }} />
          <FontAwesomeIcon icon={faTree} style={{ fontSize: '0.88em', marginLeft: '-0.6em', marginTop: '0.32em', color: 'rgba(255, 255, 255, 0.2)' }} />
        </Group>
        <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', fontFamily: 'inherit', letterSpacing: 1, whiteSpace: 'pre-wrap', wordWrap: 'break-word', lineHeight: 1.5, marginTop: 8 }}> {/* Centered text */}
          Canopy refers to the upper layer of vegetation in a forest, formed by mature tree crowns.
        </Text>
      </div>
      
      {/* Temporary button to browse WUR plant images */}
      <div style={{ marginBottom: 16, width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Button
          leftIcon={<FontAwesomeIcon icon={faImages} />}
          onClick={() => {
            console.log('Browse WUR Plant Images button clicked'); // Debugging log
            setBrowserOpened(true);
          }}
          variant="light"
          color="cyan"
          size="sm"
          styles={{
            root: {
              backgroundColor: 'rgba(0, 206, 209, 0.1)',
              border: '1px solid rgba(0, 206, 209, 0.3)',
              cursor: 'pointer', /* Ensures the cursor changes to pointer */
              '&:hover': {
                backgroundColor: 'rgba(0, 206, 209, 0.2)',
              },
            },
          }}
        >
          Browse WUR Plant Images
        </Button>
      </div>

      <SunSection style={{ width: 'calc(100% + 100px)' }} /> {/* Increased section width by 100px */}
      <WateringSection style={{ width: 'calc(100% + 100px)' }} /> {/* Increased section width by 100px */}
      <SoilTypeSection style={{ width: 'calc(100% + 100px)' }} /> {/* Increased section width by 100px */}
      
      {/* WUR Plant Browser Modal */}
      <WURPlantBrowser opened={browserOpened} onClose={() => setBrowserOpened(false)} />
    </div>
  );
}
