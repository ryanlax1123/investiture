import { useState, useEffect, useRef } from 'react';
import { formatTime, calcProgress } from '../core/utils.js';
import strings from '../content/en.json';
import './App.css';

const WORK_SECONDS = 25 * 60;
const BREAK_SECONDS = 5 * 60;

const THEMES = ['default', 'win95', 'spotify', 'airbnb', 'uber', 'facebook'];

function App() {
  const [secondsLeft, setSecondsLeft] = useState(WORK_SECONDS);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [sessions, setSessions] = useState(0);
  const [theme, setTheme] = useState('default');
  const intervalRef = useRef(null);

  useEffect(() => {
    if (theme === 'default') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const totalSeconds = isBreak ? BREAK_SECONDS : WORK_SECONDS;
  const progress = calcProgress(secondsLeft, totalSeconds);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            if (!isBreak) setSessions((s) => s + 1);
            setIsBreak((b) => !b);
            return isBreak ? WORK_SECONDS : BREAK_SECONDS;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning, isBreak]);

  function handleStartPause() {
    setIsRunning((r) => !r);
  }

  function handleReset() {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setIsBreak(false);
    setSecondsLeft(WORK_SECONDS);
  }

  const modeLabel = isBreak ? strings.timer.break : strings.timer.work;

  return (
    <div className="app">
      <main className="container">
        <div className="theme-switcher">
          <select
            className="theme-select"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            {THEMES.map((t) => (
              <option key={t} value={t}>{strings.themes[t]}</option>
            ))}
          </select>
        </div>

        <h1>{strings.app.title}</h1>
        <p className="tagline">{strings.app.tagline}</p>

        <div className="timer-card">
          <span className={`mode-badge ${isBreak ? 'break' : 'work'}`}>
            {modeLabel}
          </span>

          <div className="timer-ring">
            <svg viewBox="0 0 200 200">
              <circle className="ring-bg" cx="100" cy="100" r="90" />
              <circle
                className="ring-progress"
                cx="100"
                cy="100"
                r="90"
                strokeDasharray={2 * Math.PI * 90}
                strokeDashoffset={2 * Math.PI * 90 * (1 - progress)}
              />
            </svg>
            <span className="timer-display">{formatTime(secondsLeft)}</span>
          </div>

          <div className="controls">
            <button className="btn primary" onClick={handleStartPause}>
              {isRunning ? strings.actions.pause : strings.actions.start}
            </button>
            <button className="btn secondary" onClick={handleReset}>
              {strings.actions.reset}
            </button>
          </div>

          <p className="session-count">
            {strings.timer.sessions}: {sessions}
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
