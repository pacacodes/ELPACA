import React, { useState } from 'react';
import BIMViewer from './viewer/BIMViewer';
import BIMSidebar from './ui/BIMSidebar';
import { Group } from '@mantine/core';

/**
 * BIMApp
 * Top-level BIM module entry. Combines viewer and sidebar in a modular, IP-clear way.
 */
export default function BIMApp() {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      console.log('Uploaded file:', uploadedFile);

      // Read the file content for analysis
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log('File content:', e.target.result);
        // Placeholder: Add logic to parse .pln files if possible
      };
      reader.readAsArrayBuffer(uploadedFile);
    }
  };

  return (
    <div style={{ width: '100%', height: '100%', minHeight: 0, overflow: 'hidden' }}>
      <BIMViewer file={file} />
    </div>
  );
}
