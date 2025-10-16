import React, { useState } from 'react';
import { Grid, Card, Text, Group, Collapse, ActionIcon } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faWater, faDroplet } from '@fortawesome/free-solid-svg-icons';
import { IconPlus, IconMinus } from '@tabler/icons-react';

export default function WateringSection() {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ marginBottom: 24, backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: '8px', position: 'relative', width: 'calc(100% - 140px)', margin: '20px auto' }}>
      <Text fw={400} style={{ fontSize: '0.90rem', marginBottom: 12, textTransform: 'capitalize', letterSpacing: 1, fontFamily: 'inherit', color: '#ffffff', display: 'flex', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faTint} style={{ fontSize: '1.32em', color: '#ffffff', marginRight: '8px' }} />
        Watering
      </Text>
      <ActionIcon
        onClick={() => setOpened((o) => !o)}
        style={{ position: 'absolute', top: 26, right: 16, background: 'none', border: 'none' }}
      >
        {opened ? <IconMinus size={14} style={{ color: '#ffffff', cursor: 'pointer' }} /> : <IconPlus size={14} style={{ color: '#ffffff', cursor: 'pointer' }} />}
      </ActionIcon>
      <Collapse in={opened}>
        <Grid gutter={16}>
          <Grid.Col span={4} style={{ paddingLeft: '20px' }}>
            <Card shadow="sm" padding="md" radius="lg" withBorder style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
              <FontAwesomeIcon icon={faTint} style={{ fontSize: '1.2em', color: '#ffffff', marginRight: '10px' }} />
              <Text fw={400} style={{ fontSize: '0.90rem', color: '#ffffff', fontFamily: 'inherit' }}>Low</Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card shadow="sm" padding="md" radius="lg" withBorder style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
              <FontAwesomeIcon icon={faWater} style={{ fontSize: '1.2em', color: '#ffffff', marginRight: '10px' }} />
              <Text fw={400} style={{ fontSize: '0.90rem', color: '#ffffff', fontFamily: 'inherit' }}>Medium</Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card shadow="sm" padding="md" radius="lg" withBorder style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
              <FontAwesomeIcon icon={faDroplet} style={{ fontSize: '1.2em', color: '#ffffff', marginRight: '10px' }} />
              <Text fw={400} style={{ fontSize: '0.90rem', color: '#ffffff', fontFamily: 'inherit' }}>High</Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Collapse>
    </div>
  );
}
