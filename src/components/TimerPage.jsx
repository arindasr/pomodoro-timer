import { useEffect, useMemo, useState } from 'react';
import Icon from './Icon';

const WORK_MINUTES = 25;
const REST_MINUTES = 5;

const TimerPage = ({ onBack }) => {
  const [minutes, setMinutes] = useState(WORK_MINUTES);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkMode, setIsWorkMode] = useState(true);
  const [sessions, setSessions] = useState(0);
  const [task, setTask] = useState('');
  const [showTaskInput, setShowTaskInput] = useState(true);
  const [statusMessage, setStatusMessage] = useState('Siapkan satu tugas kecil, lalu mulai fokus.');

  useEffect(() => {
    if (!isRunning) return undefined;

    const interval = setInterval(() => {
      setSeconds((currentSeconds) => {
        if (currentSeconds > 0) return currentSeconds - 1;

        setMinutes((currentMinutes) => {
          if (currentMinutes > 0) {
            setSeconds(59);
            return currentMinutes - 1;
          }

          setIsRunning(false);

          if (isWorkMode) {
            setSessions((current) => current + 1);
            setIsWorkMode(false);
            setStatusMessage('Sesi fokus selesai. Ambil rehat sebentar, kamu sudah sampai sini.');
            setSeconds(0);
            return REST_MINUTES;
          }

          setIsWorkMode(true);
          setStatusMessage('Rehat selesai. Saatnya masuk ke sesi fokus berikutnya.');
          setSeconds(0);
          return WORK_MINUTES;
        });

        return 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, isWorkMode]);

  const totalSeconds = isWorkMode ? WORK_MINUTES * 60 : REST_MINUTES * 60;
  const remainingSeconds = minutes * 60 + seconds;
  const progress = Math.min(100, Math.max(0, ((totalSeconds - remainingSeconds) / totalSeconds) * 100));

  const formatTime = () => `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const quote = useMemo(() => {
    const quotes = [
      'Mulai kecil dulu. Konsistensi sering datang setelah timer berjalan.',
      'Satu sesi fokus lebih baik daripada menunggu mood yang sempurna.',
      'Rapikan meja, tutup distraksi, lalu biarkan waktunya bekerja.',
      'Istirahat bukan jeda dari produktivitas. Itu bagian dari ritmenya.'
    ];
    return quotes[sessions % quotes.length];
  }, [sessions]);

  const resetTimer = () => {
    setIsRunning(false);
    setIsWorkMode(true);
    setMinutes(WORK_MINUTES);
    setSeconds(0);
    setSessions(0);
    setTask('');
    setShowTaskInput(true);
    setStatusMessage('Siapkan satu tugas kecil, lalu mulai fokus.');
  };

  const saveTask = () => {
    if (!task.trim()) return;
    setShowTaskInput(false);
    setStatusMessage('Tugas sudah siap. Mulai timer saat kamu siap.');
  };

  return (
    <main className="timer-page">
      <section className="timer-shell">
        <button className="ghost-button" onClick={onBack}>
          <Icon name="arrowLeft" size={18} />
          Kembali ke beranda
        </button>

        <div className="timer-top">
          <span className={`mode-pill ${isWorkMode ? '' : 'rest'}`}>
            <Icon name={isWorkMode ? 'focus' : 'cup'} size={18} />
            {isWorkMode ? 'Mode fokus' : 'Mode rehat'}
          </span>
          <span className="session-pill">
            <Icon name="sprout" size={17} />
            {sessions} sesi
          </span>
        </div>

        <div className="timer-face">
          <div className="timer-display">{formatTime()}</div>
          <div className="progress-track" aria-label="Progress timer">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="quote-box">
          <div>{statusMessage}</div>
          <div style={{ marginTop: 8, fontWeight: 600 }}>{quote}</div>
        </div>

        {showTaskInput && !isRunning && (
          <div className="task-row">
            <input
              className="task-input"
              type="text"
              placeholder="Tugas fokus hari ini"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') saveTask();
              }}
            />
            <button className="btn btn-secondary" onClick={saveTask}>
              Simpan
            </button>
          </div>
        )}

        {!showTaskInput && task && (
          <div className="task-chip">
            <span>{task}</span>
            <button
              className="icon-button"
              onClick={() => {
                setShowTaskInput(true);
                setTask('');
              }}
              aria-label="Hapus tugas"
            >
              <Icon name="close" size={18} />
            </button>
          </div>
        )}

        <div className="timer-actions">
          {!isRunning ? (
            <button className="btn btn-primary" onClick={() => setIsRunning(true)}>
              <Icon name="play" size={20} />
              Mulai
            </button>
          ) : (
            <button className="btn btn-primary" onClick={() => setIsRunning(false)}>
              <Icon name="pause" size={20} />
              Jeda
            </button>
          )}
          <button className="btn btn-secondary" onClick={resetTimer}>
            <Icon name="reset" size={20} />
            Reset
          </button>
        </div>

        <div className="timer-meta">
          <span>25 menit fokus</span>
          <span>5 menit rehat</span>
          <span>pindah mode otomatis</span>
        </div>

        <div className="tip-box">
          Tip: taruh ponsel agak jauh sebelum menekan mulai, supaya sesi pertama terasa lebih mudah.
        </div>
      </section>
    </main>
  );
};

export default TimerPage;
