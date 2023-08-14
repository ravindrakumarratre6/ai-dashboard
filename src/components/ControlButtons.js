// ControlButtons.js
import React from 'react';

const ControlButtons = ({ onStart, onStop, onConfigure }) => {
    // console.log("control",onConfigure,onStart,onStop)
  return (
    <div className="border p-4">
      <h2 className="text-lg font-semibold mb-2">Model Controls</h2>
      <button onClick={onStart} className="mr-2 bg-green-500 text-white px-4 py-2">
        Start Model
      </button>
      <button onClick={onStop} className="mr-2 bg-red-500 text-white px-4 py-2">
        Stop Model
      </button>
      <button onClick={onConfigure} className="bg-blue-500 text-white px-4 py-2">
        Configure Model
      </button>
    </div>
  );
};

export default ControlButtons;
