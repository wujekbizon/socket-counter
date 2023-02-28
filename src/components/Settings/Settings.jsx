import React from 'react';
import { TiThMenuOutline } from 'react-icons/ti';

const Settings = ({ setIsOpen }) => {
  return (
    <>
      <div className="settings">
        <TiThMenuOutline
          className="menu_icon"
          onClick={() => setIsOpen(true)}
        />
      </div>
    </>
  );
};
export default Settings;
