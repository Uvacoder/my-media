import React from 'react'
import {booksReading, booksRead, handshakeFiveBooks} from './bookList'







function Books() {
      
 

    

    


   const bookHandshake = handshakeFiveBooks.map(book => (
    
        <div className="bookHandshake"  key={book.id}>
            
            <img src={`http://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`} alt="book covers" className="book" />
            <div  className="word_box">
            <h4 className="title">{book.title}</h4>
            <h4 className="star">{Array(book.rating).fill(String.fromCharCode(10029))}</h4>
            <p className="review">{book.review}</p>
            </div>   
        </div>
    ))
    const nowReading = booksReading.map(book => (
        <div className="now_reading"    key={book.id}>
            <img src={`http://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`} alt="book covers" className="book" />
            <div  className="word_box">
            <h4 className="title">{book.title}</h4>
            <h4 className="star">{Array(book.rating).fill(String.fromCharCode(10029))}</h4>
            <p className="review">{book.review}</p>
            </div>    
            
        </div>
    ))
    const recentlyRead = booksRead.map(book => (
        <div className="recently_read"  key={book.id}>
            <img src={`http://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`} alt="book covers" className="book" />
            <div  className="word_box">
            <h4 className="title">{book.title}</h4>
            <h4 className="star">{Array(book.rating).fill(String.fromCharCode(10029))}</h4>
            <p className="review">{book.review}</p>
            </div>   
        </div>
    ))
   


    return (
        <div>
            <h1>Books</h1>
            <h2>Handshake Five</h2>
            <div className="book_handshake_flex">
            {bookHandshake}
            </div>
            <h2>Currently Reading</h2>
            <div className="currently_reading_flex">
            {nowReading}
            </div>
            <h2>Recently Read</h2>
            <div className="recently_read_flex">
            {recentlyRead}
            </div>

        </div>
    )
}

export default Books