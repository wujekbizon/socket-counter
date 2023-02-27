import React, { useState } from 'react';
import { GiHeartMinus, GiHeartPlus } from 'react-icons/gi';

const Card = () => {
  const [playerName, setPlayerName] = useState('Player 1');
  const [player_life, setPlayerLife] = useState(20);

  console.log(playerName);
  return (
    <section className="card">
      <div className="player_name">
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
      </div>
      <div className="player_life">
        <h1>{player_life}</h1>
      </div>
      <div className="player_buttons">
        <button
          onClick={() => setPlayerLife(player_life - 1)}
          className="btn_danger"
        >
          <GiHeartMinus />
        </button>
        <button
          onClick={() => setPlayerLife(player_life + 1)}
          className="btn_success"
        >
          <GiHeartPlus />
        </button>
      </div>
    </section>
  );
};
export default Card;
