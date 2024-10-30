import React from 'react';

export const Counter = ({
  counter,
  isRunning,
  onStart,
  onPause,
  onReset,
  onCountdown,
  buttonText,
  buttonBackground,
  textTitle,
  text,
  background,
  countdownTime,
}) => {

  const handleStartPause = () => {
    if (isRunning) {
      onPause();
    } else {
      onStart();
    }
  };

  const handleCountdown = () => {
    onCountdown();
  };

  return (
    <div className="container">
      <h1 className="text-center" style={{ color: 'mediumpurple' }}>{textTitle}</h1>
      <h2 className={background} style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', backgroundColor: 'lightpink', color: 'purple' }}>{text}</h2>
      <div className="container background" style={{ display: 'flex', justifyContent: 'center', color: 'mediumpurple', WebkitTextStroke: 'medium' }}>
        <div>{Math.floor((countdownTime > 0 ? countdownTime : counter) / 100000000 % 10)}</div>
        <div>{Math.floor((countdownTime > 0 ? countdownTime : counter) / 10000000 % 10)}</div>
        <div>,</div>
        <div>{Math.floor((countdownTime > 0 ? countdownTime : counter) / 1000000 % 10)}</div>
        <div>{Math.floor((countdownTime > 0 ? countdownTime : counter) / 100000 % 10)}</div>
        <div>{Math.floor((countdownTime > 0 ? countdownTime : counter) / 10000 % 10)}</div>
        <div>{Math.floor((countdownTime > 0 ? countdownTime : counter) / 1000 % 10)}</div>
        <div>{Math.floor((countdownTime > 0 ? countdownTime : counter) / 100 % 10)}</div>
        <div>,</div>
        <div>{Math.floor((countdownTime > 0 ? countdownTime : counter) / 10 % 10)}</div>
        <div>{Math.floor((countdownTime > 0 ? countdownTime : counter) / 1 % 10)}</div>
      </div>

      <div className="text-center mt-2">
        <button onClick={handleStartPause} type="button" className={buttonBackground} fw-bold>
          {buttonText}
        </button>
        <button onClick={onReset} type="button" className="btn btn-outline-danger fw-bold">Resetear</button>
        <button onClick={handleCountdown} type="button" className="btn btn-outline-warning fw-bold">Countdown</button>
      </div>
    </div>
  );
};

export default Counter;
