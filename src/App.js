import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      searchField: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => this.setState({ cards: data}));
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { cards, searchField } = this.state;
    const filteredCards = cards.filter(card => card.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <SearchBox
          placeholder="Search People"
          handleChange={this.handleChange}
        />
        <CardList cards={filteredCards} />
      </div>
    );
  }
}

export default App;
