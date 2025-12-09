import React, { useState } from 'react';
import { Text } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImport } from '@fortawesome/free-solid-svg-icons';

export default function ImportProjectButton() {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      console.log('Uploaded file:', uploadedFile);
      // Placeholder: Add logic to handle the uploaded file
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <FontAwesomeIcon icon={faFileImport} style={{ marginRight: 6 }} />
      <label style={{ cursor: 'pointer', color: '#23272A', fontSize: '0.90rem' }}>
        Import Project
        <input
          type="file"
          accept=".pln"
          onChange={handleFileUpload}
          style={{ display: 'none' }}
        />
      </label>
    </div>
  );
}