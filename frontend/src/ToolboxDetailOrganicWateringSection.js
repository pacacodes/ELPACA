import React, { useState } from 'react';
import { Grid, Card, Text, Group, Collapse, ActionIcon } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faWater, faDroplet } from '@fortawesome/free-solid-svg-icons';
import { IconPlus, IconMinus } from '@tabler/icons-react';

export default function WateringSection() {
  const [opened, setOpened] = useState(true);

  return (
    <div style={{ marginBottom: 24, backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: '8px', position: 'relative' }}>
      <Text fw={400} style={{ fontSize: '0.90rem', marginBottom: 12, textTransform: 'capitalize', letterSpacing: 1, fontFamily: 'inherit', color: '#ffffff' }}>Watering</Text>
      <ActionIcon
        onClick={() => setOpened((o) => !o)}
        style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none' }}
      >
        {opened ? <IconMinus size={14} style={{ color: '#ffffff', cursor: 'pointer' }} /> : <IconPlus size={14} style={{ color: '#ffffff', cursor: 'pointer' }} />}
      </ActionIcon>
      <Collapse in={opened}>
        <Grid gutter={16}>
          <Grid.Col span={4}>
            <Card shadow="sm" padding="md" radius="md" withBorder style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
              <Group position="apart" spacing={10} style={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faTint} style={{ fontSize: '1.05em', color: '#ffffff' }} />
                <Text fw={400} style={{ fontSize: '0.90rem', color: '#ffffff', fontFamily: 'inherit' }}>Low</Text>
              </Group>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card shadow="sm" padding="md" radius="md" withBorder style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
              <Group position="apart" spacing={10} style={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faWater} style={{ fontSize: '1.05em', color: '#ffffff' }} />
                <Text fw={400} style={{ fontSize: '0.90rem', color: '#ffffff', fontFamily: 'inherit' }}>Medium</Text>
              </Group>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card shadow="sm" padding="md" radius="md" withBorder style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
              <Group position="apart" spacing={10} style={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faDroplet} style={{ fontSize: '1.05em', color: '#ffffff' }} />
                <Text fw={400} style={{ fontSize: '0.90rem', color: '#ffffff', fontFamily: 'inherit' }}>High</Text>
              </Group>
            </Card>
          </Grid.Col>
        </Grid>
      </Collapse>
    </div>
  );
}
