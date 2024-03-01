import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0); 
    const [isActive, setIsActive] = useState(false); 
  
    useEffect(() => {
      let interval = null; 
  
      
      if (isActive) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds + 1); 
        }, 1000); 
      } else if (!isActive && seconds !== 0) {
        
        clearInterval(interval); 
      }
  
    
      return () => clearInterval(interval);
    }, [isActive, seconds]); 
  
    const toggleTimer = () => {
      setIsActive(!isActive); 
    };
  
    return (
      <div className="App">
        <h1>CLOCK TIMER</h1>
        <div className="timer">
          <h2>{seconds}s</h2>
          <div className="buttons">
            <button onClick={toggleTimer}>
              {isActive ? 'Pause' : 'Start'} 
            </button>
          </div>
        </div>
      </div>
    );
  }
  

export default Timer




