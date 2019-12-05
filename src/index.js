import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import './index.css';

class Game extends React.Component {
  constructor () {
    super();
    this.state = {
      minefield: [
        [0,1,0,0,0,1,0,0,0,1],
        [0,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,1,1,1,0,0],
        [0,0,0,0,0,0,0,1,0,0],
        [0,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,1],
        [0,0,0,0,1,0,0,0,0,0],
        [0,0,1,0,0,0,0,1,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,1,0,0,0,0,0],
      ],
      status: 'start',
    }
  }

  handleClick() {
    window.location.reload();
  }

  render() {
    console.log()
    if (this.state.status === 'play') {
      return (
        <div className="game">
          <h1 className="game__title">Minesweeper</h1>
          <Board
            board={this.state.minefield}
            status={this.state.status}
          />
          <button className="button_reset" onClick = {() => 
           this.handleClick()}>reset</button>
        </div>
      );
    } else {
      return (
        <div className="game">
          <button className="button_start" onClick = {() => 
           this.setState({ status: 'play' })}>Start</button>
        </div>
      );
    }
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
