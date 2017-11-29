import React from 'react';

import Field from './Field'
import '../css/Board.css'

class Board extends React.Component {
  
  renderField = (i) => {
    let css = ''
    if (this.props.winner && this.props.winner.line.includes(i)) {
      css = 'winning'
    }
    return (
      <Field winning={css} value={this.props.fieldValues[i]} onClick={() => this.props.onClick(i)} />
    )
  }

  render() {
    return (
      <div className="Board">
        <div className="board-row">
          {this.renderField(0)}
          {this.renderField(1)}
          {this.renderField(2)}
        </div>
        <div className="board-row">
          {this.renderField(3)}
          {this.renderField(4)}
          {this.renderField(5)}
        </div>
        <div className="board-row">
          {this.renderField(6)}
          {this.renderField(7)}
          {this.renderField(8)}
        </div>
      </div>
    );
  }
}

export default Board;
