import React, { useState } from 'react';
import { GiHeartMinus, GiHeartPlus } from 'react-icons/gi';

const Card = ({ playerName }) => {
  const [player_life, setPlayerLife] = useState(20);

  return (
    <section className={`${player_life === 0 && 'lost'} card`}>
      <div className="player_name">
        <h2>{playerName}</h2>
      </div>
      <div className="player_life">
        <h1>{player_life}</h1>
      </div>
      <div className="player_buttons">
        <button
          onClick={() => setPlayerLife(player_life <= 0 ? 0 : player_life - 1)}
          className="btn_danger"
          disabled={player_life === 0}
        >
          <GiHeartMinus className="icon" />
        </button>
        <button
          onClick={() => setPlayerLife(player_life + 1)}
          className="btn_success"
          disabled={player_life === 0}
        >
          <GiHeartPlus className="icon" />
        </button>
      </div>
    </section>
  );
};
export default Card;
