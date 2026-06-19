import { useEffect, useState } from 'react';
import Icon from './Icon';

const MODES = [
  {
    id: 'pomodoro',
    label: 'Pomodoro',
    minutes: 25,
    icon: 'cat'
  },
  {
    id: 'short',
    label: 'Short Break',
    minutes: 5,
    icon: 'cup'
  },
  {
    id: 'long',
    label: 'Long Break',
    minutes: 15,
    icon: 'bed'
  }
];

const TimerPage = () => {
  const [activeMode, setActiveMode] = useState(MODES[0]);
  const [remainingSeconds, setRemainingSeconds] = useState(MODES[0].minutes * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return undefined;

    const interval = setInterval(() => {
      setRemainingSeconds((current) => {
        if (current <= 1) {
          setIsRunning(false);
          return 0;
        }
        return current - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const statusLabel = activeMode.id === 'pomodoro' ? 'Focus Time' : 'Break Time';

  const resetTimer = () => {
    setIsRunning(false);
    setRemainingSeconds(activeMode.minutes * 60);
  };

  const selectMode = (mode) => {
    setActiveMode(mode);
    setIsRunning(false);
    setRemainingSeconds(mode.minutes * 60);
  };

  return (
    <main className="timer-page">
      <div className="background-icons" aria-hidden="true">
        <span className="background-icon bg-frame">
          <Icon name="wallFrame" size={148} />
        </span>
        <span className="background-icon bg-shelf">
          <Icon name="shelfPlantBooks" size={204} />
        </span>
        <span className="background-icon bg-balls">
          <Icon name="yarnBalls" size={158} />
        </span>
        <span className="background-icon bg-sleeping-cat">
          <Icon name="sleepingCat" size={188} />
        </span>
      </div>

      <section className="timer-stage" aria-label="Pomodoro timer">
        <h1 className="timer-title">Pomodoro Timer</h1>

        <div className="cat-clock" aria-live="polite">
          <div className="cat-ear cat-ear-left" />
          <div className="cat-ear cat-ear-right" />
          <div className="cat-stripes">
            <span />
            <span />
            <span />
          </div>
          <div className="cat-face" aria-hidden="true">
            <span className="cat-eye" />
            <span className="cat-mouth" />
            <span className="cat-eye" />
          </div>
          <div className="cat-tail" aria-hidden="true" />

          <div className="timer-window">
            <div className="timer-display">{formattedTime}</div>
            <div className="status-badge">
              <Icon name="sparkle" size={18} />
              {statusLabel}
              <Icon name="sparkle" size={18} />
            </div>
          </div>
        </div>

        <div className="mode-grid" role="group" aria-label="Timer mode">
          {MODES.map((mode) => (
            <button
              className={`mode-card ${activeMode.id === mode.id ? 'active' : ''}`}
              key={mode.id}
              type="button"
              onClick={() => selectMode(mode)}
            >
              <span className="mode-illustration" aria-hidden="true">
                <Icon name={mode.icon} size={42} />
              </span>
              <strong>{mode.label}</strong>
              <span>{mode.minutes}:00</span>
            </button>
          ))}
        </div>

        <div className="timer-actions">
          <button className="icon-control" type="button" onClick={resetTimer} aria-label="Settings">
            <Icon name="settings" size={30} />
          </button>
          <button className="start-button" type="button" onClick={() => setIsRunning((current) => !current)}>
            {isRunning ? 'Pause' : 'Start'}
            <Icon name={isRunning ? 'pause' : 'play'} size={34} />
          </button>
          <button className="icon-control" type="button" onClick={resetTimer} aria-label="Reset timer">
            <Icon name="reset" size={32} />
          </button>
        </div>
      </section>
    </main>
  );
};

export default TimerPage;
