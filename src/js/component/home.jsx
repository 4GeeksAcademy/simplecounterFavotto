import React, { useState, useEffect } from 'react';
import Counter from './Counter';

function Home() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [buttonText, setButtonText] = useState('Comenzar');
  const [buttonBackground, setButtonBackground] = useState('btn btn-outline-success');
  const [countdownTime, setCountdownTime] = useState(0);

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setCounter(prevCounter => prevCounter + 1);
      }, 10);
      return () => clearInterval(intervalId);
    }
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
    setButtonText('Pausar');
    setButtonBackground('btn btn-outline-danger');
  };

  const handlePause = () => {
    setIsRunning(false);
    setButtonText('Comenzar');
    setButtonBackground('btn btn-outline-success');
  };

  const handleReset = () => {
    setCounter(0);
    setIsRunning(false);
    setIsCountingDown(false);
    setCountdownTime(counter);
  };

  const handleCountdown = () => {
    setIsRunning(false); 
    setCountdownTime(counter); 

    const intervalId = setInterval(() => {
      if (countdownTime > 0) {
        setCountdownTime(prevTime => prevTime - 1);
      } else {
        
        setIsRunning(true);
        setButtonText('Pausar');
        setButtonBackground('btn btn-outline-danger');
        clearInterval(intervalId);
      }
    }, 1000);
  };

  return (
    <div>
      <Counter
        counter={counter}
        isRunning={isRunning}
        onStart={handleStart}
        onPause={handlePause}
        onReset={handleReset}
        onCountdown={handleCountdown}
        buttonText={buttonText}
        buttonBackground={buttonBackground}
        textTitle="Contador"
        text="Empezar"
        background="alert alert-primary"
        countdownTime={countdownTime} 
      />
    </div>
  );
}

export default Home;