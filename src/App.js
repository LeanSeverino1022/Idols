
// I refer to the items as monsters. Not sure yet if I'm going to change this to people or whatever, I just want a filterable sample to get started.

// import logo from './logo.svg';
import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {

    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App" style={{ background: '#F1F3F5' }}>
        <input
          type='search'
          placeholder='Search name'
          onChange={e =>  this.setState({ searchField: e.target.value }) }
        />
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    );
  }

}

export default App;
