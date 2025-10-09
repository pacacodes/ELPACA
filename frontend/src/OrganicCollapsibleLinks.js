import React from 'react';
import { Collapse, Group, Text, Box, Button } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree, faCloud, faLeaf, faClover, faCarrot, faDisease } from '@fortawesome/free-solid-svg-icons';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function OrganicCollapsibleLinks(props) {
  const [opened, setOpened] = React.useState(false);
  const [opened2, setOpened2] = React.useState(false);
  // Accept onSubtitleClick prop
  const onSubtitleClick = props && props.onSubtitleClick ? props.onSubtitleClick : undefined;
  React.useEffect(() => {
    const handler = e => {
      if (e.detail === 'organic') setOpened(true);
    };
    window.addEventListener('openToolboxGroup', handler);
    return () => window.removeEventListener('openToolboxGroup', handler);
  }, []);
  return (
    <>
  <Box style={{ width: 'calc(100% + 15px)', height: 'calc(100% - 20px)', marginTop: 22, marginLeft: -8, marginRight: 'auto', background: 'rgba(255, 255, 255, 0.02)', borderRadius: 8, padding: '8px 0', display: 'block' }}>
  <Group position="apart" style={{ cursor: 'pointer', flexDirection: 'column', alignItems: 'flex-start', marginLeft: 20, width: 'calc(100% + 20px)' }} onClick={() => setOpened((o) => !o)}>
          <Text fw={500} c="#ffffff" style={{ fontSize: '0.90rem', fontFamily: 'inherit', letterSpacing: 1, marginBottom: 0, marginLeft: 0, lineHeight: 1.1, display: 'flex', alignItems: 'center', gap: 10 }}>
            <FontAwesomeIcon icon={faTree} style={{ color: '#ffffff', fontSize: '1.2em' }} />
            Organic Objects
          </Text>
          <Text fw={400} c="#bdbdbd" style={{ fontSize: '0.80rem', fontFamily: 'inherit', letterSpacing: 1, marginTop: 2, marginLeft: 31, lineHeight: 1.1 }}>
            Permaculture Layers
          </Text>
        </Group>
  <FontAwesomeIcon icon={opened ? faMinus : faPlus} style={{ color: '#ffffff', fontSize: '0.7em', position: 'relative', top: '-32px', right: '-220px' }} />
        <Collapse in={opened} transitionDuration={200}>
          <Box style={{ padding: '12px 0' }}>
            {/* Example links, replace/add as needed */}
            <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Canopy')}>
              <span style={{display:'flex',alignItems:'flex-end',gap:'0'}}>
                <FontAwesomeIcon icon={faTree} style={{fontSize:'1.2em', color:'#4a4a4a'}} />
                <FontAwesomeIcon icon={faTree} style={{fontSize:'0.88em', marginLeft: '-0.6em', marginTop: '0.32em', color:'#bdbdbd'}} />
              </span>
                Canopy
            </Text>
            <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Understory')}>
              <span style={{display:'flex',alignItems:'flex-end',gap:'0'}}>
                <FontAwesomeIcon icon={faTree} style={{fontSize:'1.2em', color:'#4a4a4a'}} />
                <FontAwesomeIcon icon={faTree} style={{fontSize:'0.88em', marginLeft: '-0.6em', marginTop: '0.32em', color:'#bdbdbd'}} />
              </span>
                Understory
            </Text>
            <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Shrub')}>
              <FontAwesomeIcon icon={faCloud} style={{color:'#4a4a4a'}} />
                Shrub
            </Text>
            <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Herbaceous')}>
              <FontAwesomeIcon icon={faLeaf} style={{color:'#4a4a4a'}} />
                Herbaceous
            </Text>
            <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Ground Cover')}>
              <FontAwesomeIcon icon={faClover} style={{color:'#4a4a4a'}} />
                Ground Cover
            </Text>
            <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Root Crop')}>
              <FontAwesomeIcon icon={faCarrot} style={{color:'#4a4a4a'}} />
                Root Crop
            </Text>
            <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Vine')}>
              <FontAwesomeIcon icon={faPagelines} style={{color:'#4a4a4a'}} />
                Vine
            </Text>
            <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Fungi')}>
              <FontAwesomeIcon icon={faDisease} style={{color:'#4a4a4a'}} />
                Fungi
            </Text>
          </Box>
        </Collapse>
      </Box>
      {/* Inorganic collapsible group below with 13px margin */}
      {/* import and use InorganicCollapsibleLinks below if needed in parent */}
    </>
  );
}
