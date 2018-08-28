import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import TopNav from './components/TopNav.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TopNav />
      </div>
    );
  }
}

export default App;
