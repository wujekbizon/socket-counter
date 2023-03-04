import { useState, useEffect } from 'react';

const SECOND = 1_000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;

export const useTimer = (time: any, interval = SECOND) => {
  const date = new Date(time).valueOf() - Date.now().valueOf();
  const [timespan, setTimespan] = useState(date);

  let intervalId: NodeJS.Timer;

  useEffect(() => {
    intervalId = setInterval(() => {
      setTimespan(date);
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
