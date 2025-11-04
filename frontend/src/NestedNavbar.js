import React, { useContext } from 'react';
import { Box, Stack, Text } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser, faUsers, faLightbulb, faTasks, faMap, faHardHat, faPen, faDraftingCompass, faFile, faCalendar, faImage, faFolder, faDiagramProject, faListCheck, faChartPie,
  faUserTie, faFileAlt, faClock, faFileContract, faPlus, faMinus
} from '@fortawesome/free-solid-svg-icons';
import { SectionContext } from './SectionContext';

// Separate combined items into individual line items with icons
const navSubtitles = [
  [
    'Users',
    'Professionals',
    'Idea Boards',
    'Feed'
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
  [ 
    'Sample Project', 
    'New Project', 
    'Select Project', 
    'Import Project', 
    'Export Project'
  ], // Alpaca
  [
    'Users',
    'Professionals',
    'Spaces',
    'Photos',
    'Codes'
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
    'Codes',
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
    'Codes'
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
    'Codes',
    'Permits', // Added Permits
    'Project Files',
    'Schedules',
    'Specifications',
    'Calendar',
    'Timelines',
    'Tasks',
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
  const { sectionsState, toggleSection } = useContext(SectionContext);
  const isCollapsed = sectionsState.nestedNavbar;

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
    <Box
      style={{
        position: 'fixed',
        top: isCollapsed ? 34 + 280 + 10 : 270,
        height: isCollapsed ? 20 : 'auto', // Set height to 20px when collapsed
        background: 'rgba(200,200,200,0.2)', // Keep some background when collapsed
        right: 19,
        width: 190,
        minWidth: 100,
        maxWidth: 260,
        zIndex: 199,
        borderRadius: 8,
        padding: 16
      }}
    >
      <Text
        fw={400}
        c="#23272A"
        style={{
          fontSize: '0.90rem',
          marginBottom: 18,
          marginLeft: 0, // Adjusted from 10px to 0 to move left
          textTransform: 'uppercase',
          letterSpacing: 1,
          fontFamily: 'inherit',
          whiteSpace: 'normal',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={() => toggleSection('nestedNavbar')}
      >
        {sectionTitles[activeService]}
        <FontAwesomeIcon icon={isCollapsed ? faPlus : faMinus} style={{ fontSize: '0.8rem', marginLeft: '-30px' }} />
      </Text>
      {!isCollapsed && (
        <Stack gap={12} style={{ marginTop: 28 }}>
          {navSubtitles[activeService].map((subtitle, idx) => (
            <Text key={subtitle} fw={400} c="#23272A" style={{ fontSize: '0.90rem', display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'inherit', marginLeft: 10 }}>
              <FontAwesomeIcon icon={subtitleIcons[activeService][idx] || faFile} style={{ marginRight: 6 }} />
              {subtitle}
            </Text>
          ))}
        </Stack>
      )}
    </Box>
  );
}
