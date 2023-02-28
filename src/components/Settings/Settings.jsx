import React from 'react';
import { ImMenu } from 'react-icons/im';

const Settings = ({ setIsOpen }) => {
  return (
    <>
      <div className="settings">
        <ImMenu className="menu_icon" onClick={() => setIsOpen(true)} />
      </div>
    </>
  );
};
export default Settings;
