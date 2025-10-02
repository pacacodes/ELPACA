import React from 'react';
import { Box, Stack, Text } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser, faUsers, faLightbulb, faTasks, faMap, faHardHat, faPen, faDraftingCompass, faFile, faCalendar, faImage, faFolder, faDiagramProject, faListCheck, faChartPie
} from '@fortawesome/free-solid-svg-icons';

const navSubtitles = [
  [
    'Users & Professionals',
    'Ideas',
    'Budgets',
    'Calendar & Timelines'
  ], // Lightbulb
    [
      'Users & Professionals',
      'Spaces',
      'Photos',
      'Files',
      'Schedules & Specifications',
      'Calendar & Timelines',
      'Tasks'
    ], // Tasks
    [
      'Worksheets',
      'Presentation Sheets',
      'Schedules & Specifications',
      'Site Diagrams',
      'Budgets',
      'Project Files',
      'Calendar & Timelines'
    ], // Map
  ['New Project', 'Select Project', 'Import Project', 'Export Project'], // Alpaca
  [
    'Users & Professionals',
    'Spaces',
    'Photos',
    'Project Files',
    'Schedules & Specifications',
    'Calendar & Timelines',
    'Tasks'
  ], // HardHat
  [
    'Worksheets',
    'Presentation Sheets',
    'Schedules & Specifications',
    'Design Diagrams',
    'Budgets',
    'Project Files',
    'Calendar & Timelines'
  ], // Pen
  [
    'Worksheets',
    'Presentation Sheets',
    'Schedules & Specifications',
    'Budgets',
    'Project Files',
    'User Interface',
    'Calendar & Timelines'
  ], // Compass
];

export default function NestedNavbar({ activeService }) {
  // Map subtitles to icons for each service
  const subtitleIcons = [
    [faUsers, faLightbulb, faChartPie, faCalendar], // Lightbulb
    [faUsers, faDiagramProject, faImage, faFile, faListCheck, faCalendar, faListCheck], // Tasks (last item is now faListCheck)
    [faFile, faFile, faListCheck, faDiagramProject, faChartPie, faFolder, faCalendar], // Map
    [faFile, faFile, faFile, faFile], // Alpaca (generic file icon)
    [faUsers, faDiagramProject, faImage, faFolder, faListCheck, faCalendar, faListCheck], // HardHat (last item is now faListCheck)
    [faFile, faFile, faListCheck, faDiagramProject, faChartPie, faFolder, faCalendar], // Pen
    [faFile, faFile, faListCheck, faChartPie, faFolder, faUser, faCalendar], // Compass
  ];
  // Titles for each navigation button
  const sectionTitles = [
    'Ideas',        // Lightbulb
    'Daily Management', // Tasks
    'Existing Info', // Map
    'Projects',     // Alpaca
    'Construction Management', // HardHat
    'Design',       // Pen
    'Construction Documents' // Compass
  ];

  return (
    <Box style={{ position: 'fixed', top: 270, right: 29, width: 240, minWidth: 140, maxWidth: 320, zIndex: 199, background: 'rgba(0,0,0,0.03)', borderRadius: 8, padding: 16 }}>
      <Text size="lg" fw={700} c="#23272A" style={{ marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>{sectionTitles[activeService]}</Text>
      <Stack gap={12}>
        {navSubtitles[activeService].map((subtitle, idx) => (
          <Text key={subtitle} size="md" fw={500} c="#23272A" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <FontAwesomeIcon icon={subtitleIcons[activeService][idx] || faFile} style={{ marginRight: 6 }} />
            {subtitle}
          </Text>
        ))}
      </Stack>
    </Box>
  );
}
