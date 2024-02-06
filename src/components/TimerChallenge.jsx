import PropTypes from 'prop-types';
import { useState, useRef } from 'react';

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const msTargetTime = targetTime * 1000;

  const handleStart = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, msTargetTime);

    setTimerStarted(true);
  };

  const handleStop = () => {
    clearTimeout(timer.current);

    setTimerStarted(false);
  };

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 && 's'}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timerStarted ? 'active' : ''}>
        {timerStarted ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
  );
};

TimerChallenge.propTypes = {
  title: PropTypes.string.isRequired,
  targetTime: PropTypes.number.isRequired,
};

export { TimerChallenge };
