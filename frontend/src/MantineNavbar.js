import React from 'react';
import { AppShellNavbar, Group, Button, Stack, Text, Divider, Paper } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb, faMap, faPen, faDraftingCompass, faHardHat, faTasks, faFolderOpen,
  faThLarge, faLaptop, faList, faEye, faDollarSign, faPaperclip, faCalendarAlt, faCommentDots, faArrowsRotate
} from '@fortawesome/free-solid-svg-icons';

export default function MantineNavbar({ setActiveNav, setAlpacaPopupOpen, setActiveLayout }) {
  return (
    <AppShellNavbar style={{ width: 260, height: '100vh', background: '#f8fafc', borderRight: '1px solid #e9ecef' }}>
      <div style={{ padding: '16px' }}>
        <Text size="sm" weight={700} color="gray" mb="xs">Navigation</Text>
        <Group direction="column" spacing="xs">
          <Button leftIcon={<FontAwesomeIcon icon={faLightbulb} />} variant="subtle" onClick={() => setActiveNav('Ideas')}>Ideas</Button>
          <Button leftIcon={<FontAwesomeIcon icon={faMap} />} variant="subtle" onClick={() => setActiveNav('Maps')}>Maps</Button>
          <Button leftIcon={<FontAwesomeIcon icon={faPen} />} variant="subtle" onClick={() => setActiveNav('Sketch')}>Sketch</Button>
          <Button leftIcon={<FontAwesomeIcon icon={faDraftingCompass} />} variant="subtle" onClick={() => setActiveNav('Design')}>Design</Button>
          <Button leftIcon={<FontAwesomeIcon icon={faHardHat} />} variant="subtle" onClick={() => setActiveNav('BIM')}>BIM</Button>
          <Button leftIcon={<FontAwesomeIcon icon={faTasks} />} variant="subtle" onClick={() => setActiveNav('Tasks')}>Tasks</Button>
          <Button leftIcon={<FontAwesomeIcon icon={faFolderOpen} />} variant="subtle" onClick={() => setAlpacaPopupOpen(true)}>Projects</Button>
        </Group>
        <Divider my="md" />
        <Text size="sm" weight={700} color="gray" mb="xs">Layers & Communication</Text>
        <Stack spacing="xs">
          <Button leftIcon={<FontAwesomeIcon icon={faThLarge} />} variant="light" onClick={() => setActiveLayout('Worksheets')}>Worksheets</Button>
          <Button leftIcon={<FontAwesomeIcon icon={faLaptop} />} variant="light" onClick={() => setActiveLayout('Presentation Sheets')}>Presentation Sheets</Button>
          <Button leftIcon={<FontAwesomeIcon icon={faList} />} variant="light" onClick={() => setActiveLayout('Schedules & Specifications')}>Schedules & Specifications</Button>
          <Button leftIcon={<FontAwesomeIcon icon={faEye} />} variant="light" onClick={() => setActiveLayout('Site Diagrams')}>Site Diagrams</Button>
          <Button leftIcon={<FontAwesomeIcon icon={faDollarSign} />} variant="light" onClick={() => setActiveLayout('Budgets')}>Budgets</Button>
          <Button leftIcon={<FontAwesomeIcon icon={faPaperclip} />} variant="light" onClick={() => setActiveLayout('Project Files')}>Project Files</Button>
          <Button leftIcon={<FontAwesomeIcon icon={faCalendarAlt} />} variant="light" onClick={() => setActiveLayout('Calendar & Timelines')}>Calendar & Timelines</Button>
          <Button leftIcon={<FontAwesomeIcon icon={faCommentDots} />} variant="light">Communication</Button>
          <Button leftIcon={<FontAwesomeIcon icon={faArrowsRotate} />} variant="light">Views</Button>
        </Stack>
      </div>
    </AppShellNavbar>
  );
}
