import React from 'react';

import '../css/App.css';
import Game from './Game'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>My TicTacToe React-style</h2>
        <Game />
      </div>
    );
  }
}

export default App;
