import React, {useState, useContext} from 'react'
import {tvWatched, tvWatching, handshakeFiveTv} from '../data/tvList'
import { Context } from '../Context'

function Tv() {

    const {fullStarMaker, halfStarMaker, reviewToggle, filterSet, dimmer} = useContext(Context)

    const [handshakeReview, setHandshakeReview] = useState()
    const [watchedReview, setWatchedReview] = useState()
    const [watchingReview, setWatchingReview] = useState()
    
  

    const handshakeTv = handshakeFiveTv.map((tv, index) => (
        <div className="tvHandshake"  key={tv.id} style={filterSet(tv, handshakeReview)}>
             <img src={`https://image.tmdb.org/t/p/w200${tv.poster}`} alt="tv posters" className="tv" />
             <div className="word_box">
             <h4 className="title">{tv.title}</h4>
             <span className="star-container" ><h4 className="star">{ fullStarMaker(tv.rating)}</h4><h4 className="half-star">{halfStarMaker(tv.rating)}</h4></span>
            { handshakeReview === tv.id ? 
                <div>
                <i className="material-icons arrow_drop_up_icon" onClick={() => reviewToggle(index, handshakeFiveTv, handshakeReview, setHandshakeReview)}
                style={{display: tv.review === "" ? "none" : ""}}
                >arrow_drop_up_icon</i>
                <p className="review" style={{display:  tv.review ? "block" : "none"}}>{tv.review}</p>
                </div>
                 :
                 <i className="material-icons arrow_right_icon" onClick={() => reviewToggle(index, handshakeFiveTv, handshakeReview, setHandshakeReview)}
                 style={{display: tv.review === "" ? "none" : ""}}
                 >arrow_right_icon</i>
            }
            </div>   
        </div>
    ))

    const nowWatchingTv = tvWatching.map((tv, index) => (
        <div className="now_watching_tv"    key={tv.id} style={filterSet(tv, watchingReview)}>
             <img src={`https://image.tmdb.org/t/p/w200${tv.poster}`} alt="tv posters" className="tv" />
             <div className="word_box">
            <h4 className="title">{tv.title}</h4>
            <span className="star-container" ><h4 className="star">{ fullStarMaker(tv.rating)}</h4><h4 className="half-star">{halfStarMaker(tv.rating)}</h4></span>
            { watchingReview === tv.id ? 
                <div>
                <i className="material-icons arrow_drop_up_icon" onClick={() => reviewToggle(index, tvWatching, watchingReview, setWatchingReview)} 
                style={{display: tv.review === "" ? "none" : ""}}>arrow_drop_up_icon</i>
                <p className="review" style={{display:  tv.review ? "block" : "none"}}>{tv.review}</p>
                </div>
                 :
                 <i className="material-icons arrow_right_icon" onClick={() => reviewToggle(index, tvWatching, watchingReview, setWatchingReview)}
                 style={{display: tv.review === "" ? "none" : ""}}
                 >arrow_right_icon</i>
            }
            </div> 
        </div>
    ))


    const recentlyWatchedTv = tvWatched.map((tv, index) => (
        <div className="recently_watched_tv"  key={tv.id} style={filterSet(tv, watchedReview)}>
            <img src={`https://image.tmdb.org/t/p/w200${tv.poster}`} alt="tv posters" className="tv" />
            <div className="word_box"> 
            <h4 className="title">{tv.title}</h4>
            <span className="star-container" ><h4 className="star">{ fullStarMaker(tv.rating)}</h4><h4 className="half-star">{halfStarMaker(tv.rating)}</h4></span>
            { watchedReview === tv.id ? 
                <div>
                <i className="material-icons arrow_drop_up_icon" onClick={() => reviewToggle(index, tvWatched, watchedReview, setWatchedReview)} 
                style={{display: tv.review === "" ? "none" : ""}}>arrow_drop_up_icon</i>
                <p className="review" style={{display:  tv.review ? "block" : "none"}}>{tv.review}</p>
                </div>
                 :
                 <i className="material-icons arrow_right_icon" onClick={() => reviewToggle(index, tvWatched, watchedReview, setWatchedReview)}
                 style={{display: tv.review === "" ? "none" : ""}}
                 >arrow_right_icon</i>
            }
            </div>     
        </div>
    ))

    return (
        <div>
             <h1 className="section_title" id="television" style={dimmer}>Television</h1>
            <h2 className="sub_section_title" style={dimmer}>Handshake Five</h2>
            <div className="tv_handshake_flex">
            {handshakeTv}
            </div>
            <h2 className="sub_section_title" style={dimmer}>Currently Watching
            </h2>
            <div className="currently_watching_tv_flex">
            {nowWatchingTv}
            </div>
            <h2 className="sub_section_title" style={dimmer}>Recently Watched</h2>
            <div className="recently_watched__tv_flex">
            {recentlyWatchedTv}
            </div>
        </div>
    )
}

export default Tv