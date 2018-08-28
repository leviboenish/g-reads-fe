import React from 'react';


const Books = (props) => {
if(props.books !== null){
  console.log(props.books)
  let bookArr = props.books.data.map((item, i) => {
    console.log(item)
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
export default Books;
