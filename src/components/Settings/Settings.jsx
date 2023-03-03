import React from 'react';
import { TiThMenuOutline } from 'react-icons/ti';
import { useActions } from '../../hooks/useActions';

const Settings = () => {
  const { openSideMenu } = useActions();

  return (
    <>
      <div className="settings">
        <TiThMenuOutline className="menu_icon" onClick={() => openSideMenu()} />
      </div>
    </>
  );
};
export default Settings;
