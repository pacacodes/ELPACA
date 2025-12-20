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
    <Box style={{ width: 'calc(100% + 15px)', height: 'calc(100% - 20px)', marginTop: 16, marginLeft: -8, marginRight: 'auto', background: 'rgba(255, 255, 255, 0.02)', borderRadius: 8, padding: '8px 0', display: 'block' }}>
      <Box onClick={() => setOpened((o) => !o)} style={{ position: 'relative', cursor: 'pointer', paddingRight: 28, minHeight: 61, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Group position="apart" style={{ flexDirection: 'column', alignItems: 'flex-start', marginLeft: 20, width: 'calc(100% + 20px)' }}>
        <Text fw={500} c="#ffffff" style={{ fontSize: '0.855rem', fontFamily: 'inherit', letterSpacing: 1, marginBottom: 0, marginLeft: 0, lineHeight: 1.1, display: 'flex', alignItems: 'center', gap: 10 }}>
          <FontAwesomeIcon icon={faLayerGroup} style={{ color: 'orange', fontSize: '1.2em' }} />
          Viewpoint Tools
        </Text>
        <Text fw={400} c="#bdbdbd" style={{ fontSize: '0.76rem', fontFamily: 'inherit', letterSpacing: 1, marginTop: 0, marginLeft: 31, lineHeight: 1.1 }}>
          Model Views
        </Text>
      </Group>
      <FontAwesomeIcon icon={opened ? faMinus : faPlus} style={{ color: '#ffffff', fontSize: '0.8em', position: 'absolute', top: '50%', right: 14, transform: 'translateY(-50%)' }} />
      </Box>
      <Collapse in={opened} transitionDuration={200}>
        <Box style={{ padding: '12px 0' }}>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Section')}><FontAwesomeIcon icon={faLayerGroup} style={{ color: 'orange', marginRight:8 }}/>Section</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Elevation')}><FontAwesomeIcon icon={faArrowsAltV} style={{ color: 'orange', marginRight:8 }}/>Elevation</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Interior Elevation')}><FontAwesomeIcon icon={faDoorOpen} style={{ color: 'orange', marginRight:8 }}/>Interior Elevation</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Detail')}><FontAwesomeIcon icon={faSearchPlus} style={{ color: 'orange', marginRight:8 }}/>Detail</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Worksheet')}><FontAwesomeIcon icon={faFileAlt} style={{ color: 'orange', marginRight:8 }}/>Worksheet</Text>
          <Text fw={400} c="#ffffff" style={{ fontSize: '0.855rem', marginBottom: 7, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 15, cursor: 'pointer' }} onClick={() => onSubtitleClick && onSubtitleClick('Camera')}><FontAwesomeIcon icon={faCamera} style={{ color: 'orange', marginRight:8 }}/>Camera</Text>
        </Box>
      </Collapse>
    </Box>
  );
}
