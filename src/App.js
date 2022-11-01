import React from 'react';
import './App.css';
import ToolBar from './components/ToolBar/ToolBar';
import Room from './components/Room/Room';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      robotDirection: 0,
      robotPlacement: {
        x: 1,
        y: 1
      },
      warning: null,
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
    let { x, y } = this.state.robotPlacement;
    let warn = null;
    const msg = 'Oops: Hit on the wall!';
    switch (this.state.robotDirection) {
      case 0:
        if (y === 10) {
          warn = msg;
          break;
        }
        y++;
        break;
      case 90:
        if (x === 10) {
          warn = msg;
          break;
        }
        x++;
        break;
      case 180:
        if (y === 1) {
          warn = msg;
          break;
        }
        y--;
        break;
      case 270:
        if (x === 1) {
          warn = msg;
          break;
        }
        x--;
        break;
      default:
        break;
    }
    this.setState({
      robotPlacement: { x, y },
      warn
    });
  }

  handleTurn() {
    let { robotDirection } = this.state
    robotDirection += 90;
    if (robotDirection === 360) {
      robotDirection = 0;
    }
    this.setState({ robotDirection, warn: null });
  }

  handleReset() {
    this.setState({
      robotDirection: 0,
      robotPlacement: {
        x: 1,
        y: 1
      },
      warn: null
    });
  }

  render() {
    return (
      <div className="container">
        <ToolBar onClick={this.handleClick} warn={this.state.warn}>
        </ToolBar>
        <Room {...this.state}></Room>
      </div>
    );
  }
}
