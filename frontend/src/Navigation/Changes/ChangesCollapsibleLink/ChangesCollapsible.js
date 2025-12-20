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
    <div style={{ marginTop: 0, display: 'flex', flexDirection: 'column', gap: 0, marginLeft: -29, paddingLeft: 28 }}>
      {changeItems.map((item) => {
        const meta = typeToIcon[item.type];
        return (
          <button
            key={item.id}
            onClick={() => console.log(`Clicked change: ${item.label}`)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              padding: '0px 0px',
              borderRadius: 0,
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              textAlign: 'left',
              lineHeight: 0,
              minHeight: 0,
              height: 'auto',
              margin: 0,
            }}
          >
            <FontAwesomeIcon icon={meta.icon} color={meta.color} style={{ fontSize: '13px', minWidth: 14, marginLeft: '-2px' }} />
            <Text
              fw={400}
              c="#23272A"
              style={{ fontSize: '0.84rem', lineHeight: 1.18, fontFamily: 'inherit', wordBreak: 'break-word', marginLeft: '2px' }}
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
