import React, { useState, useEffect, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ProjectHeader from './ProjectHeader';
import PermaculturePopup from './PermaculturePopup';
import NewProjectForm from './NewProjectForm';
import NavigationCircle from './NavigationCircle';
import LayoutsColumn from './LayoutsColumn';
import CommunicationColumn from './CommunicationColumn';
import ViewsColumn from './ViewsColumn';
import AlpacaPopup from './AlpacaPopup';

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [activeProjectFolder, setActiveProjectFolder] = useState(null);
  const [activeLayout, setActiveLayout] = useState('');
  const [activeNav, setActiveNav] = useState(0);
  const [alpacaPopupOpen, setAlpacaPopupOpen] = useState(false);
  const [alpacaPopupPos, setAlpacaPopupPos] = useState({ x: window.innerWidth / 2 - 160, y: window.innerHeight / 2 - 90 });
  const [alpacaDragging, setAlpacaDragging] = useState(false);
  const [alpacaDragOffset, setAlpacaDragOffset] = useState({ x: 0, y: 0 });
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupPos, setPopupPos] = useState({ x: window.innerWidth / 2 - 170, y: window.innerHeight / 2 - 150 });
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [namingFolder, setNamingFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [newFolderStreet, setNewFolderStreet] = useState('');
  const [newFolderCity, setNewFolderCity] = useState('');
  const [newFolderState, setNewFolderState] = useState('');
  const [newFolderZip, setNewFolderZip] = useState('');
  const [newFolderCountry, setNewFolderCountry] = useState('');
  const [nativePlants, setNativePlants] = useState([]);

  const sampleProject = useMemo(() => ({
    name: 'Sample Project',
    address: '2442 Crest View Drive, Los Angeles, CA 90046',
    sample: true,
    description: 'A sample project to explore features before starting your own.',
    file: 'Sample_Project.epc'
  }), []);

  useEffect(() => {
    if (!activeProjectFolder) {
      setActiveProjectFolder(sampleProject);
    }
  }, [activeProjectFolder, sampleProject]);

  useEffect(() => {
    if (popupOpen && activeProjectFolder && activeProjectFolder.address) {
      fetch('/api/native-plants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address: activeProjectFolder.address })
      })
        .then(res => res.json())
        .then(data => {
          if (data && Array.isArray(data.plants)) {
            setNativePlants(data.plants);
          } else {
            setNativePlants([]);
          }
        })
        .catch(() => setNativePlants([]));
    }
  }, [popupOpen, activeProjectFolder]);

  return (
    <div style={{ padding: '2rem', position: 'relative', minHeight: '100vh' }}>
      <NavigationCircle setActiveNav={setActiveNav} setAlpacaPopupOpen={setAlpacaPopupOpen} />
      <LayoutsColumn setActiveLayout={setActiveLayout} />
      <CommunicationColumn />
      <ViewsColumn />
      <AlpacaPopup
        alpacaPopupOpen={alpacaPopupOpen}
        setAlpacaPopupOpen={setAlpacaPopupOpen}
        alpacaPopupPos={alpacaPopupPos}
        setAlpacaPopupPos={setAlpacaPopupPos}
        alpacaDragging={alpacaDragging}
        setAlpacaDragging={setAlpacaDragging}
        alpacaDragOffset={alpacaDragOffset}
        setAlpacaDragOffset={setAlpacaDragOffset}
        activeProjectFolder={activeProjectFolder}
        setActiveProjectFolder={setActiveProjectFolder}
        setPopupOpen={setPopupOpen}
        setNamingFolder={setNamingFolder}
        setNewFolderName={setNewFolderName}
        allProjectFolders={[sampleProject]}
      />
      <ProjectHeader
        projectName={sampleProject.name}
        projectAddress={sampleProject.address}
        sectionTitle={
          activeNav === -1 ? 'Projects' :
          activeNav === 0 ? 'Ideas' :
          activeNav === 1 ? 'Site Analysis' :
          activeNav === 2 ? 'Design Development' :
          activeNav === 3 ? 'Construction Documents' :
          activeNav === 4 ? 'Construction Management' :
          'Daily Management'
        }
        layoutSubtitle={activeLayout}
      />

      {/* Floating plus button in bottom left */}
      <button
        style={{
          position: 'fixed',
          left: '2rem',
          bottom: '2rem',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'rgba(168, 190, 150, 0.7)',
          color: 'white',
          fontSize: '2rem',
          border: 'none',
          boxShadow: '0 2px 8px rgba(0,0,0,0.20)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1002,
        }}
        aria-label="Add plant"
        onClick={() => setPopupOpen(true)}
      >
        <FontAwesomeIcon icon={faPlus} style={{color: 'white', fontSize: '1.3rem'}} />
      </button>

      <PermaculturePopup
        popupOpen={popupOpen}
        setPopupOpen={setPopupOpen}
        popupPos={popupPos}
        setPopupPos={setPopupPos}
        dragging={dragging}
        setDragging={setDragging}
        dragOffset={dragOffset}
        setDragOffset={setDragOffset}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        activeProjectFolder={activeProjectFolder}
        nativePlants={nativePlants}
        sectionList={['Canopy','Understory','Shrub','Herbaceous','Ground Cover','Root Crop','Vine','Fungi']}
      />

      {namingFolder && (
        <NewProjectForm
          newFolderName={newFolderName}
          setNewFolderName={setNewFolderName}
          newFolderStreet={newFolderStreet}
          setNewFolderStreet={setNewFolderStreet}
          newFolderCity={newFolderCity}
          setNewFolderCity={setNewFolderCity}
          newFolderState={newFolderState}
          setNewFolderState={setNewFolderState}
          newFolderZip={newFolderZip}
          setNewFolderZip={setNewFolderZip}
          newFolderCountry={newFolderCountry}
          setNewFolderCountry={setNewFolderCountry}
          setNamingFolder={setNamingFolder}
          setActiveProjectFolder={setActiveProjectFolder}
          setPopupOpen={setPopupOpen}
          setAlpacaPopupOpen={setAlpacaPopupOpen}
          setNativePlants={setNativePlants}
        />
      )}
    </div>
  );
}

export default App;
