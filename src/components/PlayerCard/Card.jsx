import React, { useEffect } from 'react';
import { GiHeartMinus, GiHeartPlus } from 'react-icons/gi';
import { BsShieldFillMinus, BsShieldFillPlus } from 'react-icons/bs';

const Card = ({ playerName, className, player_life, setPlayerLife }) => {
  useEffect(() => {
    if (player_life <= 0) {
      setPlayerLife(0);
    }
  }, [player_life]);

  return (
    <section className={`${player_life === 0 && 'lost'} ${className} card`}>
      <div className="player_name">
        <h2>{playerName}</h2>
      </div>
      <div className="player_life">
        <h1>{player_life}</h1>
      </div>
      <div className="player_buttons">
        <div className="sub_btns">
          <button
            onClick={() =>
              setPlayerLife(player_life <= 0 ? 0 : player_life - 1)
            }
            className="btn_danger"
            disabled={player_life === 0}
          >
            <GiHeartMinus className="icon" />
          </button>
          <button
            className="btn_danger"
            onClick={() =>
              setPlayerLife(player_life <= 0 ? 0 : player_life - 5)
            }
            disabled={player_life === 0}
          >
            <BsShieldFillMinus className="icon" />
          </button>
        </div>
        <div className="add_btns">
          <button
            onClick={() => setPlayerLife(player_life + 1)}
            className="btn_success"
            disabled={player_life === 0}
          >
            <GiHeartPlus className="icon" />
          </button>
          <button
            className="btn_success"
            disabled={player_life === 0}
            onClick={() => setPlayerLife(player_life + 5)}
          >
            <BsShieldFillPlus className="icon" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Card;
