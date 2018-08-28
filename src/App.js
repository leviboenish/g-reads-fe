import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import TopNav from './components/TopNav.js';
import Books from './components/Books.js';

class App extends Component {
  constructor(props){
      super(props)
        this.state = {
          data: null
        }
    }

    componentDidMount() {
      let apiURL = 'https://boe-two-day-app.herokuapp.com/books';
      fetch(apiURL)
        .then(response => response.json())
        .then(response =>
          this.setState({ data: response }));
    }

  render() {
    return (
      <div className="App">
        <Header />
        <TopNav />
        <Books books={this.state.data} />
      </div>
    );
  }
}

export default App;
