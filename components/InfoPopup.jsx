import React from 'react';

const InfoPopup = ({ info, closePopup }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '80%',
        transform: 'translate(50%, -50%)',
        padding: '20px',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        borderRadius: '10px',
        zIndex: '1000',
        width: '200px'
      }}
    >
      <p>{info}</p>
      <button onClick={closePopup} style={{ marginTop: '10px' }}>
        Close
      </button>
    </div>
  );
};

export default InfoPopup;
