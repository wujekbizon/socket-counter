import React, { useState } from 'react';
import { ImMenu } from 'react-icons/im';
import Modal from '../Modal/Modal';

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="settings">
        <ImMenu className="menu_icon" onClick={() => setIsOpen(true)} />
      </div>
      {isOpen && <Modal />}
    </>
  );
};
export default Settings;
