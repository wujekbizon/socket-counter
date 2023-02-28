import React from 'react';

const Modal = ({ playerName, player2Name, setPlayer2Name, setPlayerName }) => {
  return (
    <div className="modal">
      <h2></h2>
      <div>
        <label htmlFor="p1">Player 1</label>
        <input
          type="text"
          id="p1"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="p2">Player 2</label>
        <input
          type="text"
          id="p2"
          value={player2Name}
          onChange={(e) => setPlayer2Name(e.target.value)}
        />
      </div>
      <button>Reset</button>
    </div>
  );
};
export default Modal;
