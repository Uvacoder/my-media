import React, {useState, useContext} from 'react'
import {booksReading, booksRead, handshakeFiveBooks} from '../data/bookList'
import { Context } from '../Context'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

function Books() {

    const {fullStarMaker, halfStarMaker, reviewToggle, filterSet, dimmer, handleBooksReadArrowToggle, booksReadingSlice, booksReadSlice} = useContext(Context)
      
    const [handshakeReview, setHandshakeReview] = useState()
    const [watchedReview, setWatchedReview] = useState()
    const [watchingReview, setWatchingReview] = useState()
    
   

   const bookHandshake = handshakeFiveBooks.map((book, index) => (
        <div className="bookHandshake"  key={book.id} style={filterSet(book, handshakeReview)}>
            <img src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`} alt="book covers" className="book" />
            <div  className="word_box">
            <h4 className="title">{book.title}</h4>
            <span className="star-container" ><h4 className="star">{ fullStarMaker(book.rating)}</h4><h4 className="half-star">{halfStarMaker(book.rating)}</h4></span>
            { handshakeReview === book.id ? 
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

    const nowReading = booksReading.slice(0, booksReadingSlice).map((book, index) => (
        <div className="now_reading"    key={book.id} style={filterSet(book, watchingReview)}>
            <img src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`} alt="book covers" className="book" />
            <div  className="word_box">
            <h4 className="title">{book.title}</h4>
            <span className="star-container" ><h4 className="star">{ fullStarMaker(book.rating)}</h4><h4 className="half-star">{halfStarMaker(book.rating)}</h4></span>
             { watchingReview === book.id ? 
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

    const recentlyRead = booksRead.slice(0, booksReadSlice).map((book, index) => (
        <div className="recently_read"  key={book.id} style={filterSet(book, watchedReview)} >
            <img src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`} alt="book covers" className="book" />
            <div  className="word_box">
            <h4 className="title">{book.title}</h4>
            <span className="star-container" ><h4 className="star">{ fullStarMaker(book.rating)}</h4><h4 className="half-star">{halfStarMaker(book.rating)}</h4></span>
            { watchedReview === book.id ? 
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
            <h1 className="section_title" id="books"   style={dimmer}>Books</h1>
            <h2 className="sub_section_title" title="handShakeFiveBooks" style={dimmer}>Handshake Five</h2>
            <div className="book_handshake_flex">
                {bookHandshake}
            </div>
            <h2 className="sub_section_title" title="currentlyReading" style={dimmer}>Currently Reading</h2>
            <div className="currently_reading_flex">
                {nowReading}
                {/* <div className="slice_toggle" >
                    <span className="toggle_arrow" ><ArrowDropDownCircleIcon style={{ fontSize: 50 }} onClick={handleBooksReadingArrowToggle} className={booksReadingSlice === 10 ? '' : 'rotate_arrow'} /></span>
                </div> */}
            </div>
            <h2 className="sub_section_title"  title="recentlyRead" style={dimmer}>Recently Read</h2>
            <div className="recently_read_flex">
                {recentlyRead}
                <div className="slice_toggle" >
                    <span className="toggle_arrow" ><ArrowDropDownCircleIcon style={{ fontSize: 50 }} onClick={handleBooksReadArrowToggle} className={booksReadSlice === 10 ? '' : 'rotate_arrow'} /></span>
                </div>
            </div>
        </div>
    )
}

export default Books