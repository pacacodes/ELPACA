import React from 'react';
import ActionContainer from './ActionContainer';

export default function Actions() {
  console.log('ActionContainer type:', typeof ActionContainer);

  return (
    <div>
      <ActionContainer />
    </div>
  );
}