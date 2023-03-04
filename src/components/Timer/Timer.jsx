import React, { useState } from 'react';
import { useTimer } from '../../hooks/useTimer';
import { TfiTimer } from 'react-icons/tfi';

let date = new Date(Date.now() + 60 * 20 * 1000);

const Timer = () => {
  const [presets, setPresets] = useState(20);
  const { minutes, seconds } = useTimer(date);

  const onStartTimer = () => {
    date = new Date(Date.now() + 60 * presets * 1000);
  };

  return (
    <section className="timer">
      <div>
        <h4>
          {minutes}:{seconds}
        </h4>
      </div>

      <div>
        <h4>Presets</h4>
        <div>
          <div className="set_timer">
            <TfiTimer />
            <button onClick={() => setPresets(50)}>50</button>
          </div>
          <div className="set_timer">
            <TfiTimer />
            <button onClick={() => setPresets(30)}>30</button>
          </div>
          <div className="set_timer">
            <TfiTimer />
            <button onClick={() => setPresets(40)}>40</button>
          </div>
        </div>
      </div>
      <button onClick={onStartTimer}>Start</button>
    </section>
  );
};
export default Timer;
