import React from 'react';
import './App.css';
import ToolBar from './components/ToolBar/ToolBar';
import Room from './components/Room/Room';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robotDirection: 0,
      robotPosition: {
        x: 1,
        y: 1
      },
      warn: null,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    switch (e.target.id) {
      case 'move':
        this.handleMove();
        break;
      case 'turn':
        this.handleTurn();
        break;
      case 'reset':
        this.handleReset();
        break;
      default:
        break;
    }
  }

  handleMove() {
    if (this.state.warn) {
      return;
    }
    const { robotPosition, robotDirection } = this.state;
    const setErrorMessage = () => {
      this.setState({
        warn: 'Oops: Hit on the wall!'
      });
    };
    const possibleMovements = [
      { direction: 0, axis: 'y', index: +1, limit: 10 },
      { direction: 90, axis: 'x', index: +1, limit: 10 },
      { direction: 180, axis: 'y', index: -1, limit: 1 },
      { direction: 270, axis: 'x', index: -1, limit: 1 },
    ];
    for (const { direction, axis, index, limit } of possibleMovements) {
      if (robotDirection === direction) {
        if (robotPosition[axis] === limit) {
          setErrorMessage();
          return;
        }
        robotPosition[axis] += index;
      }
    }
    this.setState({
      robotPosition,
      warn: null
    });
  }

  handleTurn() {
    let { robotDirection } = this.state;
    robotDirection += 90;
    if (robotDirection === 360) {
      robotDirection = 0;
    }
    this.setState({ robotDirection, warn: null });
  }

  handleReset() {
    this.setState({
      robotDirection: 0,
      robotPosition: {
        x: 1,
        y: 1
      },
      warn: null
    });
  }

  render() {
    const { robotDirection, robotPosition } = this.state;
    return (
      <div className="container">
        <ToolBar onClick={this.handleClick} warn={this.state.warn}>
        </ToolBar>
        <Room position={robotPosition} direction={robotDirection}></Room>
      </div>
    );
  }
}
