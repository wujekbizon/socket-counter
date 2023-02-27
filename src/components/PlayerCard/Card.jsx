import React, { useState } from 'react';
import { GiHeartMinus, GiHeartPlus } from 'react-icons/gi';

const Card = ({ playerName }) => {
  const [player_life, setPlayerLife] = useState(20);

  return (
    <section className="card">
      <div className="player_name">
        <h2>{playerName}</h2>
      </div>
      <div className="player_life">
        <h1>{player_life}</h1>
      </div>
      <div className="player_buttons">
        <button
          onClick={() => setPlayerLife(player_life - 1)}
          className="btn_danger"
        >
          <GiHeartMinus className="icon" />
        </button>
        <button
          onClick={() => setPlayerLife(player_life + 1)}
          className="btn_success"
        >
          <GiHeartPlus className="icon" />
        </button>
      </div>
    </section>
  );
};
export default Card;
