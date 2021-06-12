import React, {useState, useContext} from 'react'
import {tvWatched, tvWatching, handshakeFiveTv} from '../data/tvList'
import { Context } from '../Context'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';

function Tv() {

    const {fullStarMaker, halfStarMaker, reviewToggle, filterSet, dimmer, handleTvWatchedArrowToggle, tvWatchingSlice, tvWatchedSlice} = useContext(Context)

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

    const nowWatchingTv = tvWatching.slice(0, tvWatchingSlice).map((tv, index) => (
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


    const recentlyWatchedTv = tvWatched.slice(0, tvWatchedSlice).map((tv, index) => (
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
                {/* <div className="currently_watching_slice_toggle" >
                    <span className="currently_watching_toggle_arrow" ><ArrowDropDownCircleIcon style={{ fontSize: 50 }} onClick={handleTvWatchingArrowToggle} className={tvWatchingSlice === 10 ? '' : 'rotate_arrow'} /></span>
                </div> */}
            </div>
            <h2 className="sub_section_title" style={dimmer}>Recently Watched</h2>
            <div className="recently_watched__tv_flex">
                {recentlyWatchedTv}
                <div className="recently_watched_slice_toggle" >
                    <span className="recently_watched_toggle_arrow" ><ArrowDropDownCircleIcon style={{ fontSize: 50 }} onClick={handleTvWatchedArrowToggle} className={tvWatchedSlice === 10 ? '' : 'rotate_arrow'} /></span>
                </div>
            </div>
        </div>
    )
}

export default Tv