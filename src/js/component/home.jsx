import React, { useState, useEffect, useRef } from 'react'; 
import Counter from './Counter';

function Home() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [buttonText, setButtonText] = useState('Comenzar');
  const [buttonBackground, setButtonBackground] = useState('btn btn-outline-success');
  const [countdownTime, setCountdownTime] = useState(0);
  const countdownRef = useRef(null);

  
  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        setCounter(prevCounter => prevCounter + 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [isRunning]);

  
  const handleStartPause = () => {
    if (isRunning) {
      setIsRunning(false);
      setButtonText('Comenzar');
      setButtonBackground('btn btn-outline-success');
    } else {
      setIsRunning(true);
      setButtonText('Pausar');
      setButtonBackground('btn btn-outline-danger');
    }
  };

  
  const handleReset = () => {
    setCounter(0);
    setCountdownTime(0);
    setIsRunning(false);
    clearInterval(countdownRef.current); 
    countdownRef.current = null;
    setButtonText('Comenzar');
    setButtonBackground('btn btn-outline-success');
  };

  
  const handleCountdown = () => {
    
    setIsRunning(false);
    clearInterval(countdownRef.current);
    countdownRef.current = null;

    setCountdownTime(counter); 

    countdownRef.current = setInterval(() => {
      setCountdownTime(prevTime => {
        if (prevTime <= 1) {
          clearInterval(countdownRef.current); 
          countdownRef.current = null;
          setIsRunning(true);
          setButtonText('Pausar');
          setButtonBackground('btn btn-outline-danger');
          return 0;
        }
        return prevTime - 1; 
      });
    }, 1000);
  };

  return (
    <div>
      <Counter
        counter={counter}
        isRunning={isRunning}
        onStart={handleStartPause}
        onReset={handleReset}
        onCountdown={handleCountdown}
        buttonText={buttonText}
        buttonBackground={buttonBackground}
        textTitle="Contador"
        text="Empezar"
        background="alert alert-primary"
        countdownTime={countdownTime > 0 ? countdownTime : counter} 
      />
    </div>
  );
}

export default Home;

