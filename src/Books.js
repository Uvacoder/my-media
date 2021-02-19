import React, {useState, useContext} from 'react'
import {booksReading, booksRead, handshakeFiveBooks} from './bookList'
import { Context } from './Context'

function Books() {

    const {fullStarMaker, halfStarMaker, reviewToggle} = useContext(Context)
      
    const [handshakeReview, setHandshakeReview] = useState()
    const [watchedReview, setWatchedReview] = useState()
    const [watchingReview, setWatchingReview] = useState()
    
    // function handleHandshakeReviewClick(e) {
    //     let selection = handshakeFiveBooks[e].review
    //     setHandshakeReview(selection)
    //     if (selection === handshakeReview) {
    //         setHandshakeReview()
    //     }
    // }

    // function handleWatchingReviewClick(e) {
    //     let selection = booksReading[e].review
    //     setWatchingReview(selection)
    //     if (selection === watchingReview) {
    //         setWatchingReview()
    //     }
    // }

    // function handleWatchedReviewClick(e) {
    //     let selection = booksRead[e].review
    //     setWatchedReview(selection)
    //     if (selection === watchedReview) {
    //         setWatchedReview()
    //     }
    // }

    // function fullStarMaker(rating) {
    //     const  ratingSplit= rating.toString().split('.')
    //     const fullStarNumber = parseInt(ratingSplit[0])
    //     const full = Array(fullStarNumber).fill(String.fromCharCode(10029)) 
    //     return full   
    // }

    // function halfStarMaker(rating) {
    //     const  ratingSplit= rating.toString().split('.')
    //     const halfStarNumber = parseInt(ratingSplit[1])
    //     const half = halfStarNumber === 5 ?  '1/2' : ''
    //     return half   
    // }

   const bookHandshake = handshakeFiveBooks.map((book, index) => (
        <div className="bookHandshake"  key={book.id}>
            <img src={`http://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`} alt="book covers" className="book" />
            <div  className="word_box">
            <h4 className="title">{book.title}</h4>
            <span className="star-container"><h4 className="star">{ fullStarMaker(book.rating)}</h4><h4 className="half-star">{halfStarMaker(book.rating)}</h4></span>
            { handshakeReview === book.review ? 
                <div>
                <i className="material-icons arrow_drop_up_icon" onClick={() => reviewToggle(index, handshakeFiveBooks, handshakeReview, setHandshakeReview)}
                style={{display: book.review === "" ? "none" : ""}}
                >arrow_drop_up_icon</i>
                <p className="review" style={{display:  book.review ? "block" : "none"}}>{book.review}</p>
                </div>
                 :
                 <i className="material-icons arrow_right_icon" onClick={() => reviewToggle(index, handshakeFiveBooks, handshakeReview, setHandshakeReview)}
                 style={{display: book.review === "" ? "none" : ""}}
                 >arrow_right_icon</i>
            }
            </div>   
        </div>
    ))

    const nowReading = booksReading.map((book, index) => (
        <div className="now_reading"    key={book.id}>
            <img src={`http://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`} alt="book covers" className="book" />
            <div  className="word_box">
            <h4 className="title">{book.title}</h4>
            <span className="star-container"><h4 className="star">{ fullStarMaker(book.rating)}</h4><h4 className="half-star">{halfStarMaker(book.rating)}</h4></span>
             { watchingReview === book.review ? 
                <div>
                <i className="material-icons arrow_drop_up_icon" onClick={() => reviewToggle(index, booksReading, watchingReview, setWatchingReview)} 
                style={{display: book.review === "" ? "none" : ""}}>arrow_drop_up_icon</i>
                <p className="review" style={{display:  book.review ? "block" : "none"}}>{book.review}</p>
                </div>
                 :
                 <i className="material-icons arrow_right_icon" onClick={() => reviewToggle(index, booksReading, watchingReview, setWatchingReview)}
                 style={{display: book.review === "" ? "none" : ""}}
                 >arrow_right_icon</i>
            }
            </div>    
        </div>
    ))

    const recentlyRead = booksRead.map((book, index) => (
        <div className="recently_read"  key={book.id}>
            <img src={`http://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`} alt="book covers" className="book" />
            <div  className="word_box">
            <h4 className="title">{book.title}</h4>
            <span className="star-container"><h4 className="star">{ fullStarMaker(book.rating)}</h4><h4 className="half-star">{halfStarMaker(book.rating)}</h4></span>
            { watchedReview === book.review ? 
                <div>
                <i className="material-icons arrow_drop_up_icon" onClick={() => reviewToggle(index, booksRead, watchedReview, setWatchedReview)} 
                style={{display: book.review === "" ? "none" : ""}}>arrow_drop_up_icon</i>
                <p className="review" style={{display:  book.review ? "block" : "none"}}>{book.review}</p>
                </div>
                 :
                 <i className="material-icons arrow_right_icon" onClick={() => reviewToggle(index, booksRead, watchedReview, setWatchedReview)}
                 style={{display: book.review === "" ? "none" : ""}}
                 >arrow_right_icon</i>
            }
            </div>   
        </div>
    ))
   
    return (
        <div>
            <h1 className="section_title" id="books">Books</h1>
            <h2 className="sub_section_title">Handshake Five</h2>
            <div className="book_handshake_flex">
            {bookHandshake}
            </div>
            <h2 className="sub_section_title">Currently Reading</h2>
            <div className="currently_reading_flex">
            {nowReading}
            </div>
            <h2 className="sub_section_title">Recently Read</h2>
            <div className="recently_read_flex">
            {recentlyRead}
            </div>
        </div>
    )
}

export default Books