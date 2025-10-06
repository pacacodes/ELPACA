import React from 'react';
import { Collapse, Group, Text, Box, Button } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree, faCloud, faLeaf, faClover, faCarrot, faDisease } from '@fortawesome/free-solid-svg-icons';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function OrganicCollapsibleLinks() {
  const [opened, setOpened] = React.useState(false);
  const [opened2, setOpened2] = React.useState(false);

  return (
    <>
  <Box style={{ width: 'calc(100% - 80px)', height: 'calc(100% - 20px)', marginTop: 22, marginLeft: -8, marginRight: 'auto', background: 'rgba(0,0,0,0.03)', borderRadius: 8, padding: '8px 0', display: 'block' }}>
  <Group position="apart" style={{ cursor: 'pointer', flexDirection: 'column', alignItems: 'flex-start', marginLeft: 20, width: 'calc(100% + 20px)' }} onClick={() => setOpened((o) => !o)}>
          <Text fw={500} c="#23272A" style={{ fontSize: '0.90rem', fontFamily: 'inherit', letterSpacing: 1, marginBottom: 0, marginLeft: 0, lineHeight: 1.1, display: 'flex', alignItems: 'center', gap: 10 }}>
            <FontAwesomeIcon icon={faTree} style={{ color: '#23272A', fontSize: '1.2em' }} />
            Organic Objects
          </Text>
          <Text fw={400} c="#6c757d" style={{ fontSize: '0.80rem', fontFamily: 'inherit', letterSpacing: 1, marginTop: 2, marginLeft: 31, lineHeight: 1.1 }}>
            Permaculture Layers
          </Text>
        </Group>
  <FontAwesomeIcon icon={opened ? faMinus : faPlus} style={{ color: '#23272A', fontSize: '0.7em', position: 'relative', top: '-32px', right: '-260px' }} />
        <Collapse in={opened} transitionDuration={200}>
          <Box style={{ padding: '12px 0' }}>
            {/* Example links, replace/add as needed */}
            <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{display:'flex',alignItems:'flex-end',gap:'0'}}>
                <FontAwesomeIcon icon={faTree} style={{fontSize:'1.2em', color:'#4a4a4a'}} />
                <FontAwesomeIcon icon={faTree} style={{fontSize:'0.88em', marginLeft: '-0.6em', marginTop: '0.32em', color:'#bdbdbd'}} />
              </span>
              Canopy Layer
            </Text>
            <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{display:'flex',alignItems:'flex-end',gap:'0'}}>
                <FontAwesomeIcon icon={faTree} style={{fontSize:'1.2em', color:'#4a4a4a'}} />
                <FontAwesomeIcon icon={faTree} style={{fontSize:'0.88em', marginLeft: '-0.6em', marginTop: '0.32em', color:'#bdbdbd'}} />
              </span>
              Understory Layer
            </Text>
            <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}>
              <FontAwesomeIcon icon={faCloud} style={{color:'#4a4a4a'}} />
              Shrub Layer
            </Text>
            <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}>
              <FontAwesomeIcon icon={faLeaf} style={{color:'#4a4a4a'}} />
              Herbaceous Layer
            </Text>
            <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}>
              <FontAwesomeIcon icon={faClover} style={{color:'#4a4a4a'}} />
              Ground Cover Layer
            </Text>
            <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}>
              <FontAwesomeIcon icon={faCarrot} style={{color:'#4a4a4a'}} />
              Root Crop Layer
            </Text>
            <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}>
              <FontAwesomeIcon icon={faPagelines} style={{color:'#4a4a4a'}} />
              Vine Layer
            </Text>
            <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}>
              <FontAwesomeIcon icon={faDisease} style={{color:'#4a4a4a'}} />
              Fungi Layer
            </Text>
          </Box>
        </Collapse>
      </Box>
      {/* Inorganic collapsible group below with 13px margin */}
      {/* import and use InorganicCollapsibleLinks below if needed in parent */}
    </>
  );
}
