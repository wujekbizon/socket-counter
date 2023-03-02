import React, { useEffect, useState } from 'react';
import { GiHeartMinus, GiHeartPlus } from 'react-icons/gi';
import { BsShieldFillMinus, BsShieldFillPlus } from 'react-icons/bs';
import { useActions } from '../../hooks/useActions';
import { useSelector } from 'react-redux';

const Card = ({ playerName, className }) => {
  const { addLife, subtractLife } = useActions();
  const playerLife = useSelector((state) => state.player.playerLife);

  // useEffect(() => {
  //   if (playerLife <= 0) {
  //     setPlayerLife(0);
  //   }
  // }, [playerLife]);

  return (
    <section className={`${playerLife === 0 && 'lost'} ${className} card`}>
      <div className="player_name">
        <h2>{playerName}</h2>
      </div>
      <div className="player_life">
        <h1>{playerLife}</h1>
      </div>
      <div className="player_buttons">
        <div className="sub_btns">
          <button
            onClick={() => subtractLife()}
            className="btn_danger"
            disabled={playerLife === 0}
          >
            <GiHeartMinus className="icon" />
          </button>
          <button
            className="btn_danger"
            // onClick={() => setPlayerLife(playerLife <= 0 ? 0 : playerLife - 5)}
            disabled={playerLife === 0}
          >
            <BsShieldFillMinus className="icon" />
          </button>
        </div>
        <div className="add_btns">
          <button
            onClick={() => addLife()}
            className="btn_success"
            disabled={playerLife === 0}
          >
            <GiHeartPlus className="icon" />
          </button>
          <button
            className="btn_success"
            disabled={playerLife === 0}
            // onClick={() => setPlayerLife(playerLife + 5)}
          >
            <BsShieldFillPlus className="icon" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Card;
