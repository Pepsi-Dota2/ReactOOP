import React from 'react';
import SubComponent from '../model/hotel';

function TryTest() {
  return (
    <div>
        <SubComponent message = "Hello world"  />
        <SubComponent />
    </div>
  );
}

export default TryTest;
