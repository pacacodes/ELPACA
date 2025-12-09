import React, { useContext, useEffect } from 'react';
import { Box, Stack, Text } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser, faUsers, faLightbulb, faTasks, faMap, faHardHat, faPen, faDraftingCompass, faFile, faCalendar, faImage, faFolder, faDiagramProject, faListCheck, faChartPie,
  faUserTie, faFileAlt, faClock, faFileContract, faPlus, faMinus
} from '@fortawesome/free-solid-svg-icons';
import { SectionContext } from './SectionContext';
import ImportProjectButton from './ImportProjectButton';

// Separate combined items into individual line items with icons
const navSubtitles = [
  [
    'Users',
    'Professionals',
    'Idea Boards',
    'Feed', // Added missing comma
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
    'Codes', // Added missing comma
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
    'Codes',
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

  useEffect(() => {
    toggleSection('nestedNavbar'); // Ensure this section is open by default
  }, [toggleSection]);

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

  const handleSubtitleClick = (subtitle) => {
    // Handle the click event for subtitles
    console.log(`Clicked on ${subtitle}`);
    // Add your navigation or action logic here
  };

  return (
    <Box
      style={{
        position: 'fixed',
        top: 34 + 280 + 10 - 20 - 80 + 20 + 25 + 5, // Adjusted position down by 5px
        height: '640px', // Increased height by 10px
        overflowY: 'auto', // Disable scrolling when collapsed
        background: 'rgba(200,200,200,0.2)', // Keep some background when collapsed
        left: '10px', // Align to the left under MainNavigation
        width: 190,
        minWidth: 100,
        maxWidth: 260,
        zIndex: 199,
        borderRadius: 8,
        padding: '16px', // Adjust padding for collapsed view
      }}
    >
      <Box
        style={{
          position: 'relative',
          top: '-5px', // Move content up by 10px
        }}
      >
        <Text
          fw={400}
          c="#23272A"
          style={{
            fontSize: '0.90rem',
            marginBottom: 10, // Move title and + button down by 10px in collapsed state
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
        </Text>
        <Stack gap={12} style={{ marginTop: 28 }}>
          {navSubtitles[activeService].map((subtitle, idx) => (
            subtitle === 'Import Project' ? (
              <ImportProjectButton key={subtitle} />
            ) : (
              <Text
                key={subtitle}
                fw={400}
                c="#23272A"
                style={{
                  fontSize: '0.90rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  fontFamily: 'inherit',
                  marginLeft: 10,
                  cursor: 'pointer', // Added pointer cursor to make it clear the button is clickable
                }}
                onClick={() => handleSubtitleClick(subtitle)} // Added click handler
              >
                <FontAwesomeIcon
                  icon={subtitleIcons[activeService][idx] || faFile}
                  style={{ marginRight: 6 }}
                />
                {subtitle}
              </Text>
            )
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
