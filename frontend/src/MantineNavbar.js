import React from 'react';
import { AppShellNavbar, Group, Button, Stack, Text, Divider, Box } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb, faMap, faPen, faDraftingCompass, faHardHat, faTasks, faFolderOpen,
  faThLarge, faLaptop, faList, faEye, faDollarSign, faPaperclip, faCalendarAlt, faCommentDots, faArrowsRotate
} from '@fortawesome/free-solid-svg-icons';

export default function MantineNavbar({ setActiveNav, setAlpacaPopupOpen, setActiveLayout }) {
  return (
    <AppShellNavbar
      style={{ width: 260, height: '100%', background: 'var(--mantine-color-body)', borderRight: '1px solid var(--mantine-color-gray-3)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 'var(--mantine-spacing-md)' }}
    >
      <Box>
        <Text size="xs" fw={700} c="gray.6" mb="sm" tt="uppercase" style={{ letterSpacing: 1 }}>
          Navigation
        </Text>
        <Stack gap="xs">
          <Button fullWidth variant="subtle" color="gray" leftSection={<FontAwesomeIcon icon={faLightbulb} />} onClick={() => setActiveNav('Ideas')}>Ideas</Button>
          <Button fullWidth variant="subtle" color="gray" leftSection={<FontAwesomeIcon icon={faMap} />} onClick={() => setActiveNav('Maps')}>Maps</Button>
          <Button fullWidth variant="subtle" color="gray" leftSection={<FontAwesomeIcon icon={faPen} />} onClick={() => setActiveNav('Sketch')}>Sketch</Button>
          <Button fullWidth variant="subtle" color="gray" leftSection={<FontAwesomeIcon icon={faDraftingCompass} />} onClick={() => setActiveNav('Design')}>Design</Button>
          <Button fullWidth variant="subtle" color="gray" leftSection={<FontAwesomeIcon icon={faHardHat} />} onClick={() => setActiveNav('BIM')}>BIM</Button>
          <Button fullWidth variant="subtle" color="gray" leftSection={<FontAwesomeIcon icon={faTasks} />} onClick={() => setActiveNav('Tasks')}>Tasks</Button>
          <Button fullWidth variant="subtle" color="gray" leftSection={<FontAwesomeIcon icon={faFolderOpen} />} onClick={() => setAlpacaPopupOpen(true)}>Projects</Button>
        </Stack>
      </Box>
      <Divider my="md" color="gray.3" />
      <Box>
        <Text size="xs" fw={700} c="gray.6" mb="sm" tt="uppercase" style={{ letterSpacing: 1 }}>
          Layers & Communication
        </Text>
        <Stack gap="xs">
          <Button fullWidth variant="light" color="gray" leftSection={<FontAwesomeIcon icon={faThLarge} />} onClick={() => setActiveLayout('Worksheets')}>Worksheets</Button>
          <Button fullWidth variant="light" color="gray" leftSection={<FontAwesomeIcon icon={faLaptop} />} onClick={() => setActiveLayout('Presentation Sheets')}>Presentation Sheets</Button>
          <Button fullWidth variant="light" color="gray" leftSection={<FontAwesomeIcon icon={faList} />} onClick={() => setActiveLayout('Schedules & Specifications')}>Schedules & Specifications</Button>
          <Button fullWidth variant="light" color="gray" leftSection={<FontAwesomeIcon icon={faEye} />} onClick={() => setActiveLayout('Site Diagrams')}>Site Diagrams</Button>
          <Button fullWidth variant="light" color="gray" leftSection={<FontAwesomeIcon icon={faDollarSign} />} onClick={() => setActiveLayout('Budgets')}>Budgets</Button>
          <Button fullWidth variant="light" color="gray" leftSection={<FontAwesomeIcon icon={faPaperclip} />} onClick={() => setActiveLayout('Project Files')}>Project Files</Button>
          <Button fullWidth variant="light" color="gray" leftSection={<FontAwesomeIcon icon={faCalendarAlt} />} onClick={() => setActiveLayout('Calendar & Timelines')}>Calendar & Timelines</Button>
          <Button fullWidth variant="light" color="gray" leftSection={<FontAwesomeIcon icon={faCommentDots} />}>Communication</Button>
          <Button fullWidth variant="light" color="gray" leftSection={<FontAwesomeIcon icon={faArrowsRotate} />}>Views</Button>
        </Stack>
      </Box>
    </AppShellNavbar>
  );
}
