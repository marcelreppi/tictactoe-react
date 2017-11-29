import React from 'react';

import Board from './Board'
import Control from './Control'

class Game extends React.Component {
  constructor() {
    super()

    this.state = {
      fieldValues: Array(9).fill(null),
      xTurn: true,
      winner: null
    }
  }

  handleClick = (i) => {
    const fieldValues = [...this.state.fieldValues]
    if (fieldValues[i] !== null || this.state.winner !== null) {
      return
    }

    let xTurn = this.state.xTurn
    xTurn ? fieldValues[i] = 'X' : fieldValues[i] = 'O'
    xTurn = !xTurn
    
    const winner = calculateWinner(fieldValues)
    
    this.setState({
      fieldValues,
      xTurn,
      winner
    })
  }

  reset = () => {
    this.setState({
      fieldValues: Array(9).fill(null),
      xTurn: true,
      winner: null
    })
  }


  render() {
    return (
      <div className="Game">
        <Board fieldValues={this.state.fieldValues} winner={this.state.winner} onClick={this.handleClick}/>
        <Control reset={this.reset}/>
      </div>
    );
  }
}

function calculateWinner(fieldValues) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (fieldValues[a] && fieldValues[a] === fieldValues[b] && fieldValues[a] === fieldValues[c]) {
      return { sign: fieldValues[a], line: lines[i] }
    }
  }
  return null
}

export default Game
