import { useState, useEffect } from 'react';

const SECOND = 1_000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;

export const useTimer = (time, interval = SECOND) => {
  const [timespan, setTimespan] = useState(new Date(time) - Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimespan(new Date(time) - Date.now());
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [time, interval]);
  return {
    hours: Math.floor((timespan / HOUR) % 24),
    minutes: Math.floor((timespan / MINUTE) % 60),
    seconds: Math.floor((timespan / SECOND) % 60),
  };
};
