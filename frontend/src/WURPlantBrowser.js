import React, { useState, useEffect } from 'react';
import { Modal, Button, Grid, Card, Image, Text, Group, Badge, ScrollArea, Loader, Alert } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faLeaf, faExternalLinkAlt, faSync } from '@fortawesome/free-solid-svg-icons';

export default function WURPlantBrowser({ opened, onClose }) {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [scraping, setScraping] = useState(false);

  useEffect(() => {
    if (opened) {
      fetchPlants();
    }
  }, [opened]);

  const fetchPlants = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/wur-plants');
      if (!response.ok) {
        throw new Error('Failed to fetch plant data');
      }
      const data = await response.json();
      setPlants(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRescrape = async () => {
    setScraping(true);
    setError(null);
    try {
      const response = await fetch('/api/wur-plants/scrape', {
        method: 'POST'
      });
      if (!response.ok) {
        throw new Error('Failed to scrape plant data');
      }
      const data = await response.json();
      setPlants(data.plants);
    } catch (err) {
      setError(err.message);
    } finally {
      setScraping(false);
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <Group spacing="xs">
          <FontAwesomeIcon icon={faSeedling} style={{ color: '#00CED1' }} />
          <Text fw={600} size="lg">WUR Plant Image Collection</Text>
        </Group>
      }
      size="xl"
      styles={{
        modal: {
          backgroundColor: '#1a1a1a',
        },
        header: {
          backgroundColor: '#1a1a1a',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        },
        title: {
          color: '#ffffff',
        },
        close: {
          color: '#ffffff',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        },
      }}
    >
      <div style={{ minHeight: '400px' }}>
        {/* Action buttons */}
        <Group position="apart" mb="md">
          <Text size="sm" c="dimmed">
            {plants.length} plants available
          </Text>
          <Button
            leftIcon={<FontAwesomeIcon icon={faSync} />}
            onClick={handleRescrape}
            loading={scraping}
            size="xs"
            variant="light"
            color="cyan"
          >
            Re-scrape
          </Button>
        </Group>

        {/* Error message */}
        {error && (
          <Alert color="red" mb="md">
            {error}
          </Alert>
        )}

        {/* Loading state */}
        {loading && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
            <Loader color="cyan" size="lg" />
          </div>
        )}

        {/* Plant grid */}
        {!loading && plants.length > 0 && (
          <ScrollArea style={{ height: 'calc(80vh - 150px)' }}>
            <Grid gutter="md">
              {plants.map((plant) => (
                <Grid.Col key={plant.id} span={6} sm={4} md={3}>
                  <Card
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    withBorder
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      cursor: 'pointer',
                    }}
                    sx={{
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 4px 12px rgba(0, 206, 209, 0.3)',
                        borderColor: '#00CED1',
                      },
                    }}
                    onClick={() => window.open(plant.detailUrl, '_blank')}
                  >
                    <Card.Section>
                      <div
                        style={{
                          width: '100%',
                          height: '200px',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          overflow: 'hidden',
                        }}
                      >
                        <Image
                          src={plant.thumbnailUrl}
                          alt={plant.name}
                          height={200}
                          fit="cover"
                          placeholder={
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                              <FontAwesomeIcon icon={faLeaf} size="3x" color="rgba(255, 255, 255, 0.2)" />
                            </div>
                          }
                        />
                      </div>
                    </Card.Section>

                    <div style={{ marginTop: 12 }}>
                      <Text
                        fw={600}
                        size="sm"
                        c="#ffffff"
                        style={{
                          fontStyle: 'italic',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                        title={plant.name}
                      >
                        {plant.name}
                      </Text>
                      {plant.commonName && (
                        <Text size="xs" c="dimmed" mt={4}>
                          {plant.commonName}
                        </Text>
                      )}
                      {plant.note && (
                        <Badge
                          color="yellow"
                          variant="light"
                          size="xs"
                          mt={8}
                          style={{ textTransform: 'none' }}
                        >
                          Sample
                        </Badge>
                      )}
                    </div>

                    <Group position="apart" mt="xs">
                      <Text size="xs" c="cyan" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        View Details
                      </Text>
                    </Group>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </ScrollArea>
        )}

        {/* Empty state */}
        {!loading && plants.length === 0 && !error && (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'rgba(255, 255, 255, 0.5)' }}>
            <FontAwesomeIcon icon={faSeedling} size="3x" style={{ marginBottom: 16 }} />
            <Text size="lg">No plant data available</Text>
            <Text size="sm" mt="xs">Click "Re-scrape" to fetch plant images</Text>
          </div>
        )}
      </div>
    </Modal>
  );
}
