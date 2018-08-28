import React from 'react';


const Books = (props) => {
if(props.books !== null){
  console.log(props.books)
  let bookArr = props.books.data.map((item, i) => {
    console.log(item)
    return (
      <li key={i}>
        <img src={item.BookCoverURL} />
        <h4>Title: {item.BookTitle}</h4>
        <h5>Genre: {item.BookGenre}</h5>
        <p>{item.BookDescription}</p>
      </li>
    )
  })

  return (
    <section>
      <h2>Books</h2>
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
