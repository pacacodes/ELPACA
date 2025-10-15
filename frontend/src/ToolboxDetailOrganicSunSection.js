import React, { useState } from 'react';
import { Grid, Card, Text, Group, Collapse, ActionIcon, Badge, ScrollArea } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloudSun, faCloud } from '@fortawesome/free-solid-svg-icons';
import { IconPlus, IconMinus } from '@tabler/icons-react';

export default function SunSection() {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ marginBottom: 24, backgroundColor: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: '8px', position: 'relative', width: 'calc(100% - 140px)', margin: '20px auto', overflow: 'auto', maxHeight: 'calc(100vh - 100px)' }}>
      <Text fw={400} style={{ fontSize: '0.90rem', marginBottom: 12, textTransform: 'capitalize', letterSpacing: 1, fontFamily: 'inherit', color: '#ffffff' }}>Sun</Text>
      <ActionIcon
        onClick={() => setOpened((o) => !o)}
        style={{ position: 'absolute', top: 26, right: 16, background: 'none', border: 'none' }}
      >
        {opened ? <IconMinus size={14} style={{ color: '#ffffff', cursor: 'pointer' }} /> : <IconPlus size={14} style={{ color: '#ffffff', cursor: 'pointer' }} />}
      </ActionIcon>
      <Collapse in={opened}>
        <Grid gutter={16}>
          <Grid.Col span={4} style={{ paddingLeft: '23px' }}>
            <Card shadow="sm" padding="md" radius="lg" withBorder style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
              <FontAwesomeIcon icon={faSun} style={{ fontSize: '1.05em', color: '#ffffff', marginRight: '10px' }} />
              <Text fw={400} style={{ fontSize: '0.90rem', color: '#ffffff', fontFamily: 'inherit' }}>Full Sun</Text>
            </Card>
            <Grid gutter={8} style={{ marginTop: 16 }}>
              {Array.from({ length: 12 }).map((_, index) => (
                <Grid.Col span={6} key={index}>
                  <Card shadow="sm" padding="sm" radius={8} withBorder style={{ backgroundColor: 'rgba(200, 200, 200, 0.4)', borderRadius: '8px', width: '160px', height: '240px', transform: 'rotate(90deg)' }}>
                    <Text fw={500} style={{ fontSize: '0.85rem', marginBottom: 8 }}>Card Title {index + 1}</Text>
                    <Text fw={400} style={{ fontSize: '0.75rem', color: '#666' }}>Card description goes here.</Text>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </Grid.Col>
          <Grid.Col span={4} style={{ paddingLeft: '20px' }}>
            <Card shadow="sm" padding="md" radius="lg" withBorder style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
              <FontAwesomeIcon icon={faCloudSun} style={{ fontSize: '1.2em', color: '#F4E285', marginRight: '10px' }} />
              <Text fw={400} style={{ fontSize: '0.90rem', color: '#ffffff', fontFamily: 'inherit' }}>Partial Sun</Text>
            </Card>
            <Grid gutter={8} style={{ marginTop: 16 }}>
              {Array.from({ length: 12 }).map((_, index) => (
                <Grid.Col span={6} key={index}>
                  <Card shadow="sm" padding="sm" radius={8} withBorder style={{ backgroundColor: 'rgba(200, 200, 200, 0.4)', borderRadius: '8px', width: '160px', height: '240px', transform: 'rotate(90deg)' }}>
                    <Text fw={500} style={{ fontSize: '0.85rem', marginBottom: 8 }}>Card Title {index + 1}</Text>
                    <Text fw={400} style={{ fontSize: '0.75rem', color: '#666' }}>Card description goes here.</Text>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </Grid.Col>
          <Grid.Col span={4} style={{ paddingLeft: '20px' }}>
            <Card shadow="sm" padding="md" radius="lg" withBorder style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
              <FontAwesomeIcon icon={faCloud} style={{ fontSize: '1.2em', color: '#B0C4DE', marginRight: '10px' }} />
              <Text fw={400} style={{ fontSize: '0.90rem', color: '#ffffff', fontFamily: 'inherit' }}>Shade</Text>
            </Card>
            <Grid gutter={8} style={{ marginTop: 16 }}>
              {Array.from({ length: 12 }).map((_, index) => (
                <Grid.Col span={6} key={index}>
                  <Card shadow="sm" padding="sm" radius={8} withBorder style={{ backgroundColor: 'rgba(200, 200, 200, 0.4)', borderRadius: '8px', width: '160px', height: '240px', transform: 'rotate(90deg)' }}>
                    <Text fw={500} style={{ fontSize: '0.85rem', marginBottom: 8 }}>Card Title {index + 1}</Text>
                    <Text fw={400} style={{ fontSize: '0.75rem', color: '#666' }}>Card description goes here.</Text>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </Grid.Col>
        </Grid>
      </Collapse>
    </div>
  );
}
