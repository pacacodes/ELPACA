import React from 'react';
import { Box, Stack, Text } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser, faUsers, faLightbulb, faTasks, faMap, faHardHat, faPen, faDraftingCompass, faFile, faCalendar, faImage, faFolder, faDiagramProject, faListCheck, faChartPie,
  faUserTie, faFileAlt, faClock, faFileContract
} from '@fortawesome/free-solid-svg-icons';

// Separate combined items into individual line items with icons
const navSubtitles = [
  [
    'Users',
    'Professionals',
    'Ideas',
    'Budgets',
    'Calendar',
    'Timelines'
  ], // Lightbulb
  [
    'Users',
    'Professionals',
    'Spaces',
    'Photos',
    'Files',
    'Schedules',
    'Specifications',
    'Calendar',
    'Timelines',
    'Tasks'
  ], // Tasks
  [
    'Worksheets',
    'Presentation Sheets',
    'Schedules',
    'Specifications',
    'Site Diagrams',
    'Budgets',
    'Project Files',
    'Calendar',
    'Timelines'
  ], // Map
  ['New Project', 'Select Project', 'Import Project', 'Export Project'], // Alpaca
  [
    'Users',
    'Professionals',
    'Spaces',
    'Photos',
    'Permits', // Added Permits
    'Project Files',
    'Schedules',
    'Specifications',
    'Calendar',
    'Timelines',
    'Tasks'
  ], // HardHat
  [
    'Worksheets',
    'Presentation Sheets',
    'Schedules',
    'Specifications',
    'Design Diagrams',
    'Budgets',
    'Project Files',
    'Calendar',
    'Timelines'
  ], // Pen
  [
    'Worksheets',
    'Presentation Sheets',
    'Schedules',
    'Specifications',
    'Budgets',
    'Permits', // Added Permits
    'Project Files',
    'User Interface',
    'Calendar',
    'Timelines',
  ], // Compass
  [
    'Users',
    'Professionals',
    'Spaces',
    'Photos',
    'Project Files',
    'Schedules',
    'Specifications',
    'Calendar',
    'Timelines',
    'Tasks',
    'Permits' // Added Permits
  ], // HardHat
];

const subtitleIcons = [
  [faUser, faUsers, faLightbulb, faChartPie, faCalendar, faDiagramProject], // Lightbulb
  [faUser, faUserTie, faDiagramProject, faImage, faFile, faListCheck, faFileAlt, faCalendar, faClock, faListCheck], // Tasks
  [faFile, faFile, faListCheck, faFileAlt, faDiagramProject, faChartPie, faFolder, faCalendar, faClock], // Map
  [faFile, faFile, faFile, faFile], // Alpaca
  [faUser, faUserTie, faDiagramProject, faImage, faFolder, faListCheck, faFileAlt, faCalendar, faClock, faListCheck], // HardHat
  [faFile, faFile, faListCheck, faFileAlt, faDiagramProject, faChartPie, faFolder, faCalendar, faClock], // Pen
  [
    faFile, faFile, faListCheck, faFileAlt, faChartPie, faFolder, faUser, faCalendar, faClock, faFileContract // Added icon for Permits
  ], // Compass
  [
    faUser, faUserTie, faDiagramProject, faImage, faFolder, faListCheck, faFileAlt, faCalendar, faClock, faListCheck, faFileContract // Added icon for Permits
  ], // HardHat
];

export default function NestedNavbar({ activeService }) {
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
  <Box style={{ position: 'fixed', top: 270, right: 29, width: 180, minWidth: 100, maxWidth: 260, height: '270px', zIndex: 199, background: 'rgba(200,200,200,0.2)', borderRadius: 8, padding: 16, overflowY: 'auto' }}>
      <Text
        fw={400}
        c="#23272A"
        style={{
          fontSize: '0.90rem',
          marginBottom: 18,
          marginLeft: 10,
          textTransform: 'uppercase',
          letterSpacing: 1,
          fontFamily: 'inherit',
          whiteSpace: 'normal',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          width: '100%'
        }}
      >
        {sectionTitles[activeService]}
      </Text>
  <Stack gap={12} style={{ marginTop: 28 }}>
        {navSubtitles[activeService].map((subtitle, idx) => (
          <Text key={subtitle} fw={400} c="#23272A" style={{ fontSize: '0.90rem', display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'inherit', marginLeft: 10 }}>
            <FontAwesomeIcon icon={subtitleIcons[activeService][idx] || faFile} style={{ marginRight: 6 }} />
            {subtitle}
          </Text>
        ))}
      </Stack>
    </Box>
  );
}
