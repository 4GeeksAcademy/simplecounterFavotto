

import React, { useState, useEffect } from "react";

export const Counter = () => {
   
    const [counter, setCounter] = useState(0);
    const [isRunning, setIsRunning] = useState(false)
    const [status, setStaus] = useState({
        text: 'empezar',
        background: 'alert alert-primary',

    })

    const handleStart = () => {
        setIsRunning(!isRunning)
        
        setStaus({
            text: 'empezo',
            background: 'alert alert-success',
            textTitle: 'Contadorriendo el tiempo'
        })
    }

    const handleReset = () => {
        setCounter(0);
        setIsRunning(false);
        setStaus({
            text: 'comienza',
            background: 'alert alert-primary',
            textTitle: 'contador' 
        })
    }

    useEffect(() => {
        if (isRunning) { 
            const newInterval = setInterval(() => {
                setCounter((counter) => counter + 1) 
            }, 10);
            return () => clearInterval(newInterval)

        }
    }, [isRunning])




    return (
        <div className="container">
            <h1 className="text-center" style={{ color: 'mediumpurple' }} > {status.textTitle} </h1>
            <h2 className={status.background} style={{ display: 'flex', justifyContent: 'center', textAlign: 'center',  backgroundColor: 'lightpink', color: 'purple'   }}  > { status.text} </h2>
            <div className="container background" style={{display: 'flex', justifyContent: 'center', color: 'mediumpurple', WebkitTextStroke: 'medium' }}>
  <div>{status.icon}</div>
  <div>{Math.floor(counter / 100000000 % 10)}</div>
  <div>{Math.floor(counter / 10000000 % 10)}</div>
  <div>,</div>
  <div>{Math.floor(counter / 1000000 % 10)}</div>
  <div>{Math.floor(counter / 100000 % 10)}</div>
  <div>{Math.floor(counter / 10000 % 10)}</div>
  <div>{Math.floor(counter / 1000 % 10)}</div>
  <div>{Math.floor(counter / 100 % 10)}</div>
  <div>,</div>
  <div>{Math.floor(counter / 10 % 10)}</div>
  <div>{Math.floor(counter / 1 % 10)}</div>
</div>

            <div className="text-center mt-2">
                <button onClick={handleStart} type="button" className="btn btn-outline-success fw-bold">
                    {}
                    {isRunning ? 'Pausar' : counter === 0 ? 'Comenzar' : 'Continuar'}
                </button> 
                <button onClick={handleReset} type="button" className="btn btn-outline-danger fw-bold">Resetear</button>
            </div>

        </div>
    )


}
