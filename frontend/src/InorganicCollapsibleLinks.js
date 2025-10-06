import React from 'react';
import { Collapse, Group, Text, Box } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faGripHorizontal, faSquare, faMinus, faLayerGroup, faTh, faHome, faCircle, faShapes, faBorderAll, faStairs, faBars, faDoorOpen, faWindowMaximize, faSun, faCouch, faWrench, faBlender } from '@fortawesome/free-solid-svg-icons';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ToolsCollapsibleLinks from './ToolsCollapsibleLinks';
import ViewpointToolsCollapsibleLinks from './ViewpointToolsCollapsibleLinks';
import DiagramToolsCollapsibleLinks from './DiagramToolsCollapsibleLinks';

export default function InorganicCollapsibleLinks() {
  const [opened, setOpened] = React.useState(false);

  return (
    <>
      <Box style={{ width: 'calc(100% + 15px)', height: 'calc(100% - 20px)', marginTop: 13, marginLeft: -8, marginRight: 'auto', background: 'rgba(0,0,0,0.03)', borderRadius: 8, padding: '8px 0', display: 'block' }}>
        <Group position="apart" style={{ cursor: 'pointer', flexDirection: 'column', alignItems: 'flex-start', marginLeft: 20, width: 'calc(100% + 20px)' }} onClick={() => setOpened((o) => !o)}>
          <Text fw={500} c="#23272A" style={{ fontSize: '0.90rem', fontFamily: 'inherit', letterSpacing: 1, marginBottom: 0, marginLeft: 0, lineHeight: 1.1, display: 'flex', alignItems: 'center', gap: 10 }}>
            <FontAwesomeIcon icon={faHouse} style={{ color: '#23272A', fontSize: '1.2em' }} />
            Inorganic Objects
          </Text>
          <Text fw={400} c="#6c757d" style={{ fontSize: '0.80rem', fontFamily: 'inherit', letterSpacing: 1, marginTop: 2, marginLeft: 31, lineHeight: 1.1 }}>
            Building Materials
          </Text>
        </Group>
        <FontAwesomeIcon icon={opened ? faMinus : faPlus} style={{ color: '#23272A', fontSize: '0.7em', position: 'relative', top: '-32px', right: '-220px' }} />
        <Collapse in={opened} transitionDuration={200}>
          <Box style={{ padding: '12px 0' }}>
            {/* Inorganic subtitles */}
            <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}><FontAwesomeIcon icon={faGripHorizontal} style={{marginRight:8}}/>Wall</Text>
            <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}><FontAwesomeIcon icon={faSquare} style={{marginRight:8}}/>Column</Text>
            <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}><FontAwesomeIcon icon={faMinus} style={{marginRight:8}}/>Beam</Text>
            <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}><FontAwesomeIcon icon={faLayerGroup} style={{marginRight:8}}/>Slab</Text>
            <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}><FontAwesomeIcon icon={faTh} style={{marginRight:8}}/>Mesh</Text>
            <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}><FontAwesomeIcon icon={faHome} style={{marginRight:8}}/>Roof</Text>
            <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}><FontAwesomeIcon icon={faCircle} style={{marginRight:8}}/>Shell</Text>
            <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}><FontAwesomeIcon icon={faShapes} style={{marginRight:8}}/>Morph</Text>
            <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}><FontAwesomeIcon icon={faBorderAll} style={{marginRight:8}}/>Curtain Wall</Text>
            <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}><FontAwesomeIcon icon={faStairs} style={{marginRight:8}}/>Stair</Text>
            <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}><FontAwesomeIcon icon={faBars} style={{marginRight:8}}/>Railing</Text>
            <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}><FontAwesomeIcon icon={faDoorOpen} style={{marginRight:8}}/>Door</Text>
            <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}><FontAwesomeIcon icon={faWindowMaximize} style={{marginRight:8}}/>Window</Text>
            <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}><FontAwesomeIcon icon={faSun} style={{marginRight:8}}/>Skylight</Text>
            <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}><FontAwesomeIcon icon={faCouch} style={{marginRight:8}}/>Furniture</Text>
            <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}><FontAwesomeIcon icon={faWrench} style={{marginRight:8}}/>Fixtures</Text>
            <Text fw={400} c="#23272A" style={{ fontSize: '0.90rem', marginBottom: 8, marginLeft: 57, fontFamily: 'inherit', letterSpacing: 1, display: 'flex', alignItems: 'center', gap: 16 }}><FontAwesomeIcon icon={faBlender} style={{marginRight:8}}/>Appliances</Text>
          </Box>
        </Collapse>
      </Box>
  {/* Add ToolsCollapsibleLinks, ViewpointToolsCollapsibleLinks, and DiagramToolsCollapsibleLinks below */}
  <ToolsCollapsibleLinks />
  <ViewpointToolsCollapsibleLinks />
  <DiagramToolsCollapsibleLinks />
    </>
  );
}
