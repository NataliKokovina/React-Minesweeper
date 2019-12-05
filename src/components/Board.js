import React from 'react';
import Row from './Row';

class Board extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: this.startGame(props),
      openCell: 0,
    };
  }

  countGoodCell() {
    let goodCell = 0;

    for (let i = 0; i < this.state.board.length; i++) {
      for (let j = 0; j < this.state.board.length; j++) {
        if (this.state.board[i][j][0] !== 'X') {
          goodCell++;
        }
      }
    }

    return goodCell;
  }

  countBomb(props, x, y) {
    let bomb = 0;

    if (x > 0) {
      if (props.board[x-1][y] === 1) {
        bomb++;
      }

      if (y < props.board[x].length - 1 && props.board[x-1][y+1] === 1) {
        bomb++;
      }
    }

    if (y > 0) {
      if (x < props.board[x].length - 1 && props.board[x+1][y-1] === 1) {
        bomb++;
      }

      if (props.board[x][y-1] === 1) {
        bomb++;
      }
    }

    if (y > 0 && x > 0 && props.board[x-1][y-1] === 1) {
      bomb++;
    }

    if (x < props.board[x].length-1) {
      if (props.board[x+1][y] === 1) {
        bomb++;
      }

      if (y < props.board[x].length - 1 && props.board[x+1][y+1] === 1) {
        bomb++;
      }
    }

    if (y < props.board[x].length && props.board[x][y+1] === 1) {
      bomb++;
    }

    return bomb;
  }

  open = props => {
    let { board } = this.state;
    let current = board[props.y][props.x];

    if (props.value[0] === 'X') {
      window.setTimeout(() => {
        alert("You lose!");
        window.location.reload();
      }, 50);
    } else {
      this.setState({ openCell: this.state.openCell + 1 });
      current[1] = true;
      this.setState({ board });

      if (this.state.openCell === this.countGoodCell() - 1) {
        window.setTimeout(() => {
          alert("You win!");
          window.location.reload();
        }, 50);
      }
    }
  }

  startGame(props) {
    let board = [];

    for (let i = 0; i < props.board.length; i++) {
      board.push([]);
      for (let j = 0; j < props.board[i].length; j++) {
        if (props.board[i][j] !== 1) {
          let count = this.countBomb(props, i, j);

          if (count === 0) {
            count = ' ';
          }

          board[i].push([count, false]);
        } else {
          board[i].push(['X', false]);
        }
      }
    }

    return board;
  }

  render() {
     let rows = this.state.board.map((row, index) => {
      return (
        <Row 
          cells={row}
          open={this.open}
          y={index}
          key={index}
        />
      );
    });

    return (
      <div>
        <div className="board-row">{rows}</div>
      </div>
    );
  }
}

export default Board;
