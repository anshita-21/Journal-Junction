// src/components/ToggleSwitch.jsx
import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ isOn, handleToggle }) => {
  return (
    <div className="toggle-switch">
      <input
        checked={isOn}
        onChange={handleToggle}
        className="toggle-switch-checkbox"
        id={`toggle-switch-new`}
        type="checkbox"
      />
      <label
        className="toggle-switch-label"
        htmlFor={`toggle-switch-new`}
      >
        <span className={`toggle-switch-inner ${isOn ? 'bg-gray-900' : 'bg-white'}`} />
        <span className={`toggle-switch-switch ${isOn ? 'bg-white' : 'bg-black'}`} />
      </label>
    </div>
  );
};

export default ToggleSwitch;
