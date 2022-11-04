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
    let { x, y } = this.state.robotPosition;
    const setErrorMessage = () => {
      this.setState({
        warn: 'Oops: Hit on the wall!'
      });
    }
    switch (this.state.robotDirection) {
      case 0:
        if (y === 10) {
          setErrorMessage();
          return;
        }
        y++;
        break;
      case 90:
        if (x === 10) {
          setErrorMessage();
          return;
        }
        x++;
        break;
      case 180:
        if (y === 1) {
          setErrorMessage();
          return;
        }
        y--;
        break;
      case 270:
        if (x === 1) {
          setErrorMessage();
          return;
        }
        x--;
        break;
      default:
        break;
    }
    this.setState({
      robotPosition: { x, y },
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
