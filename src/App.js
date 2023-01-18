import { useState, useEffect } from 'react';
import './App.css';
import ToolBar from './components/ToolBar/ToolBar';
import Room from './components/Room/Room';

const keyDirection = {
  "ArrowRight": 0,
  "ArrowDown": 90,
  "ArrowLeft": 180,
  "ArrowUp": 270,
}

export default function App() {
  const [direction, setDirection] = useState(0);
  const [position, setPosition] = useState({ x: 1, y: 1 });
  const [warn, setWarn] = useState(null);

  useEffect(() => {
    console.log('effect')
    function handleKeup(e) {
      if(e.code.startsWith('Arrow')) {
        if(keyDirection[e.code] === direction) {
          handleMove();
        } else {
          setDirection(keyDirection[e.code]);
          setWarn(null);
        }
      }
    }
    document.body.addEventListener('keyup', handleKeup)
    return () => document.body.removeEventListener('keyup', handleKeup)
  }, [position, direction])

  function handleMove() {
    const isMovingHorizontal = direction === 0 || direction === 180;
    const isMovingForward = direction === 0 || direction === 90;
    const axis = isMovingHorizontal ? 'y' : 'x';
    const index = isMovingForward ? +1 : -1;
    const limit = isMovingForward ? 10 : 1;
    if (position[axis] === limit) {
      return setWarn('Oops: Hit on the wall!');
    }
    const nextPosition = {
      ...position
    }
    nextPosition[axis] += index;
    setPosition(nextPosition);
  }

  function handleTurn() {
    setDirection(direction === 270 ? 0 : direction + 90);
    setWarn(null);
  }

  function handleReset() {
    setPosition({ x: 1, y: 1 });
    setDirection(0);
    setWarn(null);
  }

  return (
    <div className="container">
      <ToolBar onMove={handleMove} onTurn={handleTurn} onReset={handleReset} warn={warn}>
      </ToolBar>
      <Room position={position} direction={direction}></Room>
    </div>
  );
}