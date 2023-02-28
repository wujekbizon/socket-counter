import React, { useEffect } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { options } from '../../data/options';

const Modal = ({
  setIsOpen,
  playerName,
  player2Name,
  setPlayer2Name,
  setPlayerName,
  setStartingLife,
  setPlayer1Life,
  setPlayer2Life,
  startingLife,
}) => {
  const onResetHandler = () => {
    setPlayer1Life(startingLife);
    setPlayer2Life(startingLife);
    setIsOpen(false);
  };

  useEffect(() => {
    setPlayer1Life(startingLife);
    setPlayer2Life(startingLife);
  }, [startingLife]);

  return (
    <div className="modal">
      <h2></h2>
      <div className="modal_inputs">
        <label htmlFor="p1">Player 1</label>
        <input
          type="text"
          id="p1"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
      </div>
      <div className="modal_inputs">
        <label htmlFor="p2">Player 2</label>
        <input
          type="text"
          id="p2"
          value={player2Name}
          onChange={(e) => setPlayer2Name(e.target.value)}
        />
      </div>
      <div>
        <button className="btn_reset" onClick={onResetHandler}>
          Reset
        </button>
        <select onChange={(e) => setStartingLife(e.target.value)}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>

      <button className="btn_menu-close" onClick={() => setIsOpen(false)}>
        {' '}
        <FaWindowClose className="close_icon" />
      </button>
    </div>
  );
};
export default Modal;
