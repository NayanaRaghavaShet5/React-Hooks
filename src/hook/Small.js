import React, { useState, useEffect } from 'react';

const Small = () => {

  const [counter, setCounter] = useState(0);
  const [mousePoint, setMousePoint] = useState({ xpos: '', ypos: '' });

  const incrementCounter = () => {
    setCounter(counter + 1);
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
  });

  const handleMouseMove = (e) => {
    setMousePoint({
      xpos: e.pageX,
      ypos: e.pageY
    });
  }

  return (
    <div className="App">
      <button onClick={incrementCounter}>{`Mahadeva Button is Clicked ${counter} times`}</button>
      <h2>Mouse Position</h2>
      {JSON.stringify(mousePoint, null, 2)}
      <br />
    </div>
  );
}

export default Small;
