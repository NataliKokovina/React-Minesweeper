import React from 'react';

class Cell extends React.Component {

  render() {
    if (!this.props.value[1]) {

      return (
        <button
          className="square-is-close" onClick = {() => 
              this.props.open(this.props)}>
            {' '}     
        </button>
      );
    } else {
        return (
        <button
            className ="square-is-open">
            {this.props.value[0]}       
        </button>
      );
    }
  } 
}

export default Cell;
