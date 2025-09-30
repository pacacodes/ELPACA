import React, { useState, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import MantineNavbar from './MantineNavbar';
import BIMApp from './bim/BIMApp';

function App() {
  const [activeNav, setActiveNav] = useState('Ideas');
  const [alpacaPopupOpen, setAlpacaPopupOpen] = useState(false);
  const [activeLayout, setActiveLayout] = useState('Worksheets');

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <MantineNavbar
        setActiveNav={setActiveNav}
        setAlpacaPopupOpen={setAlpacaPopupOpen}
        setActiveLayout={setActiveLayout}
      />
      <div style={{ flex: 1, height: '100%' }}>
        {/* Render main content based on navigation/layout selection */}
        <BIMApp />
      </div>
    </div>
  );
}

export default App;
