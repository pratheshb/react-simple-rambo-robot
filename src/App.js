import { useState } from 'react';
import './App.css';
import ToolBar from './components/ToolBar/ToolBar';
import Room from './components/Room/Room';


export default function App() {
  const [direction, setDirection] = useState(0);
  const [position, setPosition] = useState({ x: 1, y: 1 });
  const [warn, setWarn] = useState(null);

  function handleMove() {
    const newPos = {
      ...position
    }
    const isMovingHorizontal = direction === 0 || direction === 180;
    const isMovingForward = direction === 0 || direction === 90;
    const axis = isMovingHorizontal ? 'y' : 'x';
    const index = isMovingForward ? +1 : -1;
    const limit = isMovingForward ? 10 : 1;
    if (position[axis] === limit) {
      return setWarn('Oops: Hit on the wall!');
    }
    newPos[axis] += index;
    setPosition(newPos);
    setWarn(null);
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