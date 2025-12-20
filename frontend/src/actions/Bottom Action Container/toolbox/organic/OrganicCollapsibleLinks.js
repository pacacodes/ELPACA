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
  <Box style={{ width: 'calc(100% + 15px)', height: 'calc(100% - 20px)', marginTop: 26, marginLeft: -8, marginRight: 'auto', background: 'rgba(255, 255, 255, 0.02)', borderRadius: 8, padding: '8px 0', display: 'block' }}>
  <Box onClick={() => setOpened((o) => !o)} style={{ position: 'relative', cursor: 'pointer', paddingRight: 28, minHeight: 61, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
  <Group position="apart" style={{ flexDirection: 'column', alignItems: 'flex-start', marginLeft: 20, width: 'calc(100% + 20px)' }}>
          <Text fw={500} c="#ffffff" style={{ fontSize: '0.855rem', fontFamily: 'inherit', letterSpacing: 1, marginBottom: 0, marginLeft: 0, lineHeight: 1.1, display: 'flex', alignItems: 'center', gap: 10 }}>
            <FontAwesomeIcon icon={faTree} style={{ color: '#00CED1', fontSize: '1.2em' }} />
            Organic Objects
          </Text>
          <Text fw={400} c="#bdbdbd" style={{ fontSize: '0.76rem', fontFamily: 'inherit', letterSpacing: 1, marginTop: 0, marginLeft: 31, lineHeight: 1.1 }}>
            Permaculture Layers
          </Text>
        </Group>
  <FontAwesomeIcon icon={opened ? faMinus : faPlus} style={{ color: '#ffffff', fontSize: '0.8em', position: 'absolute', top: '50%', right: 14, transform: 'translateY(-50%)' }} />
  </Box>
        <Collapse in={opened} transitionDuration={200}>
          <Box style={{ padding: '12px 0' }}>
            {/* Example links, replace/add as needed */}
            <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Canopy')}>
              <span style={{display:'flex',alignItems:'flex-end',gap:'0'}}>
                <FontAwesomeIcon icon={faTree} style={{fontSize:'1.2em', color:'#00CED1'}} />
                <FontAwesomeIcon icon={faTree} style={{fontSize:'0.88em', marginLeft: '-0.6em', marginTop: '0.32em', color:'rgba(255, 255, 255, 0.2)'}} />
              </span>
                Canopy
            </Text>
            <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Understory')}>
              <span style={{display:'flex',alignItems:'flex-end',gap:'0'}}>
                <FontAwesomeIcon icon={faTree} style={{fontSize:'1.2em', color:'rgba(255, 255, 255, 0.2)'}} />
                <FontAwesomeIcon icon={faTree} style={{fontSize:'0.88em', marginLeft: '-0.6em', marginTop: '0.32em', color:'#00CED1'}} />
              </span>
                Understory
            </Text>
            <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Shrub')}>
              <FontAwesomeIcon icon={faCloud} style={{color:'#008080'}} />
                Shrub
            </Text>
            <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Herbaceous')}>
              <FontAwesomeIcon icon={faLeaf} style={{color:'#008080'}} />
                Herbaceous
            </Text>
            <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Ground Cover')}>
              <FontAwesomeIcon icon={faClover} style={{color:'#008080'}} />
                Ground Cover
            </Text>
            <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Root Crop')}>
              <FontAwesomeIcon icon={faCarrot} style={{color:'#008080'}} />
                Root Crop
            </Text>
            <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Vine')}>
              <FontAwesomeIcon icon={faPagelines} style={{color:'#008080'}} />
                Vine
            </Text>
            <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Fungi')}>
              <FontAwesomeIcon icon={faDisease} style={{color:'#008080'}} />
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
