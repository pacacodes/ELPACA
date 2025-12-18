import React from 'react';
import { Text } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faCogs, faFileAlt, faUser } from '@fortawesome/free-solid-svg-icons';

const ChangesCollapsible = () => {
  const changeItems = [
    { id: 1, type: 'object', label: 'Adjusted pergola footprint to 12m span' },
    { id: 2, type: 'service', label: 'Updated irrigation service route near beds' },
    { id: 3, type: 'document', label: 'Revised planting schedule v2.3 uploaded' },
    { id: 4, type: 'person', label: 'Assigned review to landscape lead (M. Silva)' },
  ];

  const typeToIcon = {
    object: { icon: faCube, color: '#23272A' },
    service: { icon: faCogs, color: '#23272A' },
    document: { icon: faFileAlt, color: '#23272A' },
    person: { icon: faUser, color: '#23272A' },
  };

  return (
    <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8, marginLeft: -29, paddingLeft: 28 }}>
      {changeItems.map((item) => {
        const meta = typeToIcon[item.type];
        return (
          <button
            key={item.id}
            onClick={() => console.log(`Clicked change: ${item.label}`)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '8px 10px',
              borderRadius: 8,
              border: 'none',
              backgroundColor: 'rgba(26, 26, 26, 0.05)',
              cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            <FontAwesomeIcon icon={meta.icon} color={meta.color} style={{ fontSize: '14px', minWidth: 14 }} />
            <Text
              fw={400}
              c="#23272A"
              style={{ fontSize: '0.86rem', lineHeight: 1.3, fontFamily: 'inherit', wordBreak: 'break-word' }}
            >
              {item.label}
            </Text>
          </button>
        );
      })}
    </div>
  );
};

export default ChangesCollapsible;
