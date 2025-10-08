import React, { useState } from 'react';
import { Grid, Card, Text, Group, Collapse, ActionIcon } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain, faLeaf, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { IconPlus, IconMinus } from '@tabler/icons-react';

export default function SoilTypeSection() {
  const [opened, setOpened] = useState(true);

  return (
    <div style={{ marginBottom: 24, backgroundColor: '#F5F5F5', padding: '16px', borderRadius: '8px', position: 'relative' }}>
      <Text fw={400} style={{ fontSize: '0.90rem', marginBottom: 12, textTransform: 'capitalize', letterSpacing: 1, fontFamily: 'inherit', color: '#23272A' }}>Soil Type</Text>
      <ActionIcon
        onClick={() => setOpened((o) => !o)}
        style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none' }}
      >
        {opened ? <IconMinus size={14} style={{ position: 'absolute', top: 16, right: 16, color: '#23272A', zIndex: 10, cursor: 'pointer' }} /> : <IconPlus size={14} style={{ position: 'absolute', top: 16, right: 16, color: '#23272A', zIndex: 10, cursor: 'pointer' }} />}
      </ActionIcon>
      <Collapse in={opened}>
        <Grid gutter={16}>
          <Grid.Col span={4}>
            <Card shadow="sm" padding="md" radius="md" withBorder style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
              <Group position="apart" spacing={10} style={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faMountain} style={{ fontSize: '1.05em', color: '#8B4513' }} />
                <Text fw={400} style={{ fontSize: '0.90rem', color: '#23272A', fontFamily: 'inherit' }}>Sandy</Text>
              </Group>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card shadow="sm" padding="md" radius="md" withBorder style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
              <Group position="apart" spacing={10} style={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faLeaf} style={{ fontSize: '1.05em', color: '#228B22' }} />
                <Text fw={400} style={{ fontSize: '0.90rem', color: '#23272A', fontFamily: 'inherit' }}>Loamy</Text>
              </Group>
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card shadow="sm" padding="md" radius="md" withBorder style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
              <Group position="apart" spacing={10} style={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faSeedling} style={{ fontSize: '1.05em', color: '#A0522D' }} />
                <Text fw={400} style={{ fontSize: '0.90rem', color: '#23272A', fontFamily: 'inherit' }}>Clay</Text>
              </Group>
            </Card>
          </Grid.Col>
        </Grid>
      </Collapse>
    </div>
  );
}
