import React from 'react';
import { AppShellNavbar, Group, Button, Stack, Text, Divider, Box } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb, faMap, faPen, faDraftingCompass, faHardHat, faTasks, faFolderOpen,
  faThLarge, faLaptop, faList, faEye, faDollarSign, faPaperclip, faCalendarAlt, faCommentDots, faArrowsRotate
} from '@fortawesome/free-solid-svg-icons';

export default function MantineNavbar({ setActiveNav, setAlpacaPopupOpen, setActiveLayout }) {
  return (
    <AppShellNavbar p="md" style={{ width: 260, background: '#f8fafc', borderRight: '1px solid #e9ecef' }}>
      <Box>
        <Text size="xs" fw={700} c="gray.6" mb="sm" tt="uppercase">
          Navigation
        </Text>
        <Stack gap="xs">
          <Button fullWidth variant="subtle" leftSection={<FontAwesomeIcon icon={faLightbulb} />} onClick={() => setActiveNav('Ideas')}>Ideas</Button>
          <Button fullWidth variant="subtle" leftSection={<FontAwesomeIcon icon={faMap} />} onClick={() => setActiveNav('Maps')}>Maps</Button>
          <Button fullWidth variant="subtle" leftSection={<FontAwesomeIcon icon={faPen} />} onClick={() => setActiveNav('Sketch')}>Sketch</Button>
          <Button fullWidth variant="subtle" leftSection={<FontAwesomeIcon icon={faDraftingCompass} />} onClick={() => setActiveNav('Design')}>Design</Button>
          <Button fullWidth variant="subtle" leftSection={<FontAwesomeIcon icon={faHardHat} />} onClick={() => setActiveNav('BIM')}>BIM</Button>
          <Button fullWidth variant="subtle" leftSection={<FontAwesomeIcon icon={faTasks} />} onClick={() => setActiveNav('Tasks')}>Tasks</Button>
          <Button fullWidth variant="subtle" leftSection={<FontAwesomeIcon icon={faFolderOpen} />} onClick={() => setAlpacaPopupOpen(true)}>Projects</Button>
        </Stack>
      </Box>
      <Divider my="md" />
      <Box>
        <Text size="xs" fw={700} c="gray.6" mb="sm" tt="uppercase">
          Layers & Communication
        </Text>
        <Stack gap="xs">
          <Button fullWidth variant="light" leftSection={<FontAwesomeIcon icon={faThLarge} />} onClick={() => setActiveLayout('Worksheets')}>Worksheets</Button>
          <Button fullWidth variant="light" leftSection={<FontAwesomeIcon icon={faLaptop} />} onClick={() => setActiveLayout('Presentation Sheets')}>Presentation Sheets</Button>
          <Button fullWidth variant="light" leftSection={<FontAwesomeIcon icon={faList} />} onClick={() => setActiveLayout('Schedules & Specifications')}>Schedules & Specifications</Button>
          <Button fullWidth variant="light" leftSection={<FontAwesomeIcon icon={faEye} />} onClick={() => setActiveLayout('Site Diagrams')}>Site Diagrams</Button>
          <Button fullWidth variant="light" leftSection={<FontAwesomeIcon icon={faDollarSign} />} onClick={() => setActiveLayout('Budgets')}>Budgets</Button>
          <Button fullWidth variant="light" leftSection={<FontAwesomeIcon icon={faPaperclip} />} onClick={() => setActiveLayout('Project Files')}>Project Files</Button>
          <Button fullWidth variant="light" leftSection={<FontAwesomeIcon icon={faCalendarAlt} />} onClick={() => setActiveLayout('Calendar & Timelines')}>Calendar & Timelines</Button>
          <Button fullWidth variant="light" leftSection={<FontAwesomeIcon icon={faCommentDots} />}>Communication</Button>
          <Button fullWidth variant="light" leftSection={<FontAwesomeIcon icon={faArrowsRotate} />}>Views</Button>
        </Stack>
      </Box>
    </AppShellNavbar>
  );
}
