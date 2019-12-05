import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import './index.css';

class Game extends React.Component {
  constructor () {
    super();
    this.state = {
      minefield: this.makeField(10, 10, 15),
      status: 'start',
    }
  }

  makeField(xSize, ySize, bombCount) {
    const field = [];
    let bomb = bombCount;

    for (let i = 0; i < xSize; i ++) {
      const row = [];

      for (let j = 0; j < ySize; j++) {
        row.push(0);
      }

      field.push(row);
    }

    while (bomb) {
      const x = Math.floor(Math.random() * (xSize));
      const y = Math.floor(Math.random() * (ySize));

      if (field[x][y] === 0) {
        field[x][y] = 1;
        bomb--;
      }
    }

    return field;
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
            board = { this.state.minefield }
            status = { this.state.status }
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
