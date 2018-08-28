import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import TopNav from './components/TopNav.js';
import Books from './components/Books.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <TopNav />
        <Books />
      </div>
    );
  }
}

export default App;
