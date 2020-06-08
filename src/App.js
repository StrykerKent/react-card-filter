import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => this.setState({ cards: data}));
  }

  render() {
    return (
      <div className="App">
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
