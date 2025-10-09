import React from 'react';
import { Collapse, Group, Text, Box } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faArrowsAltV, faDoorOpen, faSearchPlus, faFileAlt, faCamera } from '@fortawesome/free-solid-svg-icons';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function ViewpointToolsCollapsibleLinks(props) {
  const [opened, setOpened] = React.useState(false);
  // Accept onSubtitleClick prop
  const onSubtitleClick = props && props.onSubtitleClick ? props.onSubtitleClick : undefined;
  React.useEffect(() => {
    const handler = e => {
      if (e.detail === 'viewpoint') setOpened(true);
    };
    window.addEventListener('openToolboxGroup', handler);
    return () => window.removeEventListener('openToolboxGroup', handler);
  }, []);
  return (
    <Box style={{ width: 'calc(100% + 15px)', height: 'calc(100% - 20px)', marginTop: 13, marginLeft: -8, marginRight: 'auto', background: 'rgba(255, 255, 255, 0.02)', borderRadius: 8, padding: '8px 0', display: 'block' }}>
      <Group position="apart" style={{ cursor: 'pointer', flexDirection: 'column', alignItems: 'flex-start', marginLeft: 20, width: 'calc(100% + 20px)' }} onClick={() => setOpened((o) => !o)}>
        <Text fw={500} c="#ffffff" style={{ fontSize: '0.90rem', fontFamily: 'inherit', letterSpacing: 1, marginBottom: 0, marginLeft: 0, lineHeight: 1.1, display: 'flex', alignItems: 'center', gap: 10 }}>
          <FontAwesomeIcon icon={faLayerGroup} style={{ color: 'orange', fontSize: '1.2em' }} />
          Viewpoint Tools
        </Text>
        <Text fw={400} c="#bdbdbd" style={{ fontSize: '0.80rem', fontFamily: 'inherit', letterSpacing: 1, marginTop: 2, marginLeft: 31, lineHeight: 1.1 }}>
          Model Views
        </Text>
      </Group>
      <FontAwesomeIcon icon={opened ? faMinus : faPlus} style={{ color: '#ffffff', fontSize: '0.7em', position: 'relative', top: '-32px', right: '-220px' }} />
      <Collapse in={opened} transitionDuration={200}>
        <Box style={{ padding: '12px 0' }}>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Section')}><FontAwesomeIcon icon={faLayerGroup} style={{ color: 'orange', marginRight:8 }}/>Section</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Elevation')}><FontAwesomeIcon icon={faArrowsAltV} style={{ color: 'orange', marginRight:8 }}/>Elevation</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Interior Elevation')}><FontAwesomeIcon icon={faDoorOpen} style={{ color: 'orange', marginRight:8 }}/>Interior Elevation</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Detail')}><FontAwesomeIcon icon={faSearchPlus} style={{ color: 'orange', marginRight:8 }}/>Detail</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Worksheet')}><FontAwesomeIcon icon={faFileAlt} style={{ color: 'orange', marginRight:8 }}/>Worksheet</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Camera')}><FontAwesomeIcon icon={faCamera} style={{ color: 'orange', marginRight:8 }}/>Camera</Text>
        </Box>
      </Collapse>
    </Box>
  );
}
