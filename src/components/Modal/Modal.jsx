import React from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { options } from '../../data/options';
import { useActions } from '../../hooks/useActions';
import { useSelector } from 'react-redux';

const Modal = () => {
  const { closeSideMenu, changeName, resetGame, setStartingLife } =
    useActions();
  const players = useSelector((state) => state.player.players);

  const onResetHandler = () => {
    resetGame();
    closeSideMenu();
  };

  return (
    <div className="modal">
      <h2></h2>

      {players.map(({ playerId, playerName }) => (
        <div className="modal_inputs" key={playerId}>
          <label htmlFor={playerId}>{playerName}</label>
          <input
            type="text"
            id={playerId}
            value={playerName}
            onChange={(e) => changeName({ id: playerId, name: e.target.value })}
          />
        </div>
      ))}

      <div>
        <button className="btn_reset" onClick={onResetHandler}>
          Reset
        </button>
        <label htmlFor="life">Starting Life</label>
        <select
          id="life"
          onChange={(e) => setStartingLife({ life: parseInt(e.target.value) })}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>

      <button className="btn_menu-close" onClick={() => closeSideMenu()}>
        {' '}
        <FaWindowClose className="close_icon" />
      </button>
    </div>
  );
};
export default Modal;
