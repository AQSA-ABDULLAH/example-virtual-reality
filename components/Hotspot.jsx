// components/Hotspot.jsx
"use client";
import React, { useState } from 'react';
import InfoPopup from './InfoPopup';

const Hotspot = ({ position, info }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Toggle pop-up visibility
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        style={{
          position: 'absolute',
          top: position.top,
          left: position.left,
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: 'red',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={togglePopup}
      ></button>

      {/* Show info pop-up when hotspot is clicked */}
      {isPopupVisible && <InfoPopup info={info} closePopup={togglePopup} />}
    </div>
  );
};

export default Hotspot;

