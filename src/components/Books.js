import React, { Component } from 'react';


class Books extends Component {
  constructor(props){
      super(props)
        this.state = {
          data: null
        }
    }

    componentDidMount() {
      let apiURL = 'https://boe-two-day-app.herokuapp.com/books/';
      fetch(apiURL)
        .then(response => response.json())
        .then(response =>
          this.setState({ data: response.data }));
    }

render(){
  if(this.state.data !== null){
    let bookArr = this.state.data.map((item, i) => {
      return (
        <li className='book' key={i}>
          <img className='book-cover' src={item.BookCoverURL} />
          <h4  className='book-title'>Title: {item.BookTitle}</h4>
          <h5  className='book-genre'>Genre: {item.BookGenre}</h5>
          <p className='book-description'>{item.BookDescription}</p>
        </li>
      )
    })

    return (
      <section>
        <ul>
          {bookArr}
        </ul>
      </section>
      );
  } else {
    return(
      <div>
        <p>Loading</p>
      </div>
    )
  }
}
}
export default Books;
