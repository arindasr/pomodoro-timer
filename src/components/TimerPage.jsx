import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import alarmSound from '../assets/audio/alarm.mp3';
import lofiSong from '../assets/audio/lofi-song.mp3';

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

const modeCardBase =
  'flex min-h-[118px] cursor-pointer flex-col items-center justify-center gap-1.5 rounded-[28px] border-3 px-3.5 py-4 text-[#514033] transition duration-200 ease-out hover:-translate-y-0.5';
const modeCardInactive = 'border-[#d4c2aa] bg-[#fffdf8]/90 hover:shadow-[0_12px_26px_rgba(92,64,43,0.12)]';
const modeCardActive =
  'border-[#b37b25] bg-linear-to-b from-[#ffe89f] to-[#ffd98c] shadow-[0_14px_28px_rgba(179,123,37,0.18)]';

const TimerPage = () => {
  const [activeMode, setActiveMode] = useState(MODES[0]);
  const [remainingSeconds, setRemainingSeconds] = useState(MODES[0].minutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isLofiPlaying, setIsLofiPlaying] = useState(false);
  const alarmAudioRef = useRef(null);
  const lofiAudioRef = useRef(null);

  useEffect(() => {
    if (!isRunning) return undefined;

    const interval = setInterval(() => {
      setRemainingSeconds((current) => {
        if (current <= 1) {
          if (!alarmAudioRef.current) {
            alarmAudioRef.current = new Audio(alarmSound);
          }

          alarmAudioRef.current.currentTime = 0;
          alarmAudioRef.current.play().catch(() => {});
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

  const resetTimer = () => {
    setIsRunning(false);
    setRemainingSeconds(activeMode.minutes * 60);
  };

  const selectMode = (mode) => {
    setActiveMode(mode);
    setIsRunning(false);
    setRemainingSeconds(mode.minutes * 60);
  };

  useEffect(() => {
    return () => {
      alarmAudioRef.current?.pause();
      lofiAudioRef.current?.pause();
    };
  }, []);

  const toggleLofiSong = () => {
    if (!lofiAudioRef.current) {
      lofiAudioRef.current = new Audio(lofiSong);
      lofiAudioRef.current.addEventListener('ended', () => {
        setIsLofiPlaying(false);
      });
    }

    if (isLofiPlaying) {
      lofiAudioRef.current.pause();
      setIsLofiPlaying(false);
      return;
    }

    lofiAudioRef.current.play();
    setIsLofiPlaying(true);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-[30px] text-[#514033]">
      <div className="pointer-events-none absolute inset-0 z-1" aria-hidden="true">
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

      <section className="relative z-2 flex w-full max-w-[940px] flex-col items-center gap-7" aria-label="Pomodoro timer">
        <h1 className="m-0 mb-4 -mt-3 w-fit max-w-full border-b-4 border-[#b37b25] px-1 pb-3 text-center text-[clamp(2.6rem,8vw,5.5rem)] leading-[0.95] font-black text-[#514033] [border-image:linear-gradient(90deg,transparent,#b37b25,#7a5b43,#b37b25,transparent)_1] [text-shadow:0_5px_0_rgba(81,64,51,0.06)]">
          Pomodoro Timer
        </h1>

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

          <div className="flex min-h-[178px] flex-col items-center justify-center rounded-[44px] border-3 border-[#cdb89c] bg-linear-to-b from-[#fffef9] to-[#fffaf0] px-5 pt-6 pb-5">
            <div className="font-['Arial_Rounded_MT_Bold','Trebuchet_MS',system-ui,sans-serif] text-[clamp(4.8rem,17vw,9.4rem)] leading-[0.9] font-black tracking-normal text-[#3d2c22] tabular-nums">
              {formattedTime}
            </div>
          </div>
        </div>

        <div className="grid w-full max-w-[710px] grid-cols-3 gap-4.5 max-[620px]:grid-cols-1" role="group" aria-label="Timer mode">
          {MODES.map((mode) => (
            <button
              className={`${modeCardBase} ${activeMode.id === mode.id ? modeCardActive : modeCardInactive}`}
              key={mode.id}
              type="button"
              onClick={() => selectMode(mode)}
            >
              <span
                className={`inline-flex h-[46px] w-[52px] items-center justify-center ${
                  activeMode.id === mode.id ? 'text-[#3d2c22]' : 'text-[#7a5b43]'
                }`}
                aria-hidden="true"
              >
                <Icon name={mode.icon} size={42} />
              </span>
              <strong className="text-center text-[clamp(1.05rem,3vw,1.45rem)] leading-none font-black">
                {mode.label}
              </strong>
              <span className="text-[clamp(0.95rem,2vw,1.18rem)] font-extrabold">{mode.minutes}:00</span>
            </button>
          ))}
        </div>

        <div className="grid w-full max-w-[650px] grid-cols-[96px_minmax(220px,360px)_96px] items-center justify-center gap-7.5 max-[620px]:grid-cols-[88px_minmax(180px,1fr)_88px] max-[620px]:gap-4">
          {/* Lofi Music Button */}
          <button
            className="inline-flex h-[78px] w-[78px] cursor-pointer items-center justify-center rounded-[22px] border-3 border-[#d4c2aa] bg-[#fffdf8]/95 text-[#7a5b43] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(92,64,43,0.12)] max-[620px]:h-[72px] max-[620px]:w-[72px]"
            type="button"
            onClick={toggleLofiSong}
            aria-label={isLofiPlaying ? 'Pause lofi music' : 'Play lofi music'}
          >
            <Icon 
              name={isLofiPlaying ? 'pause' : 'play'} 
              size={40} 
              className="max-[620px]:!h-[32px] max-[620px]:!w-[32px]" 
            />
          </button>

          {/* Start/Pause Button */}
          <button
            className="inline-flex min-h-[92px] cursor-pointer items-center justify-center gap-4.5 rounded-full border-4 border-[#3e2d24] bg-linear-to-b from-[#725542] to-[#5e4435] px-12 py-5 text-[clamp(2rem,6vw,3rem)] font-black text-[#fffaf0] shadow-[0_12px_0_rgba(78,56,43,0.12)] transition duration-200 ease-out hover:-translate-y-0.5 max-[620px]:min-h-[82px] max-[620px]:px-6"
            type="button"
            onClick={() => setIsRunning((current) => !current)}
          >
            {isRunning ? 'Pause' : 'Start'}
            <Icon 
              name={isRunning ? 'pause' : 'play'} 
              size={44} 
              className="fill-current [stroke-width:1.5] max-[620px]:!h-[34px] max-[620px]:!w-[34px]" 
            />
          </button>

          {/* Reset Button */}
          <button
            className="inline-flex h-[78px] w-[78px] cursor-pointer items-center justify-center rounded-[22px] border-3 border-[#d4c2aa] bg-[#fffdf8]/95 text-[#7a5b43] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(92,64,43,0.12)] max-[620px]:h-[72px] max-[620px]:w-[72px]"
            type="button"
            onClick={resetTimer}
            aria-label="Reset timer"
          >
            <Icon 
              name="reset" 
              size={40} 
              className="max-[620px]:!h-[32px] max-[620px]:!w-[32px]" 
            />
          </button>
        </div>
      </section>
    </main>
  );
};

export default TimerPage;