import React from 'react';
import Cell from './Cell';

const Row = props => {
  let cells = props.cells.map((value, index) => {
    return (
      <Cell 
      value={value}
      open={props.open}
      y = {props.y}
      x = {index}
      key = {index}
      />
    );
  });
  
  return (
    <div className="row">{cells}</div>
  );
};

export default Row;
