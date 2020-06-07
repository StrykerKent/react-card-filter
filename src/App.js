import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: [
        {
          id: 1,
          name: 'Steve'
        },
        {
          id: 2,
          name: 'Bob'
        },
        {
          id: 3,
          name: 'Tom'
        },
      ]
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.cards.map((cards) => <h2 key={cards.id}>{cards.name}</h2>)
        }
      </div>
    );
  }
}

export default App;
