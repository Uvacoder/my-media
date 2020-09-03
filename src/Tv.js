import React, {useState} from 'react'
import {tvWatched, tvWatching, handshakeFiveTv} from './tvList'



function Tv() {

    

    const [handshakeReview, setHandshakeReview] = useState()
    const [watchedReview, setWatchedReview] = useState()
    const [watchingReview, setWatchingReview] = useState()
    


    function handleHandshakeReviewClick(e) {
        let selection = handshakeFiveTv[e].review
        setHandshakeReview(selection)
        if (selection === handshakeReview) {
            setHandshakeReview()
        }
    }

    function handleWatchingReviewClick(e) {
        let selection = tvWatching[e].review
        setWatchingReview(selection)
        if (selection === watchingReview) {
            setWatchingReview()
        }
    }

    function handleWatchedReviewClick(e) {
        let selection = tvWatched[e].review
        setWatchedReview(selection)
        if (selection === watchedReview) {
            setWatchedReview()
        }
    }

    const handshakeTv = handshakeFiveTv.map((tv, index) => (
        
        <div className="tvHandshake"  key={tv.id}>
             <img src={tv.poster} alt="tv posters" className="tv" />
             <div className="word_box">
             <h4 className="title">{tv.title}</h4>
            <h4 className="star">{Array(tv.rating).fill(String.fromCharCode(10029))}</h4>
            { handshakeReview === tv.review ? 
                <div>
                <i className="material-icons arrow_drop_up_icon" onClick={() => handleHandshakeReviewClick(index)}
                style={{display: tv.review === "" ? "none" : ""}}
                >arrow_drop_up_icon</i>
                <p className="review" style={{display:  tv.review ? "block" : "none"}}>{tv.review}</p>
                </div>
                 :
                 <i className="material-icons arrow_right_icon" onClick={() => handleHandshakeReviewClick(index)}
                 style={{display: tv.review === "" ? "none" : ""}}
                 >arrow_right_icon</i>
            }
            </div>   
        </div>
    ))


    const nowWatchingTv = tvWatching.map((tv, index) => (
        <div className="now_watching_tv"    key={tv.id}>
             <img src={tv.poster} alt="tv posters" className="tv" />
             <div className="word_box">
            <h4 className="title">{tv.title}</h4>
            <h4 className="star">{Array(tv.rating).fill(String.fromCharCode(10029))}</h4>
            { watchingReview === tv.review ? 
                <div>
                <i className="material-icons arrow_drop_up_icon" onClick={() => handleWatchingReviewClick(index)} 
                style={{display: tv.review === "" ? "none" : ""}}>arrow_drop_up_icon</i>
                <p className="review" style={{display:  tv.review ? "block" : "none"}}>{tv.review}</p>
                </div>
                 :
                 <i className="material-icons arrow_right_icon" onClick={() => handleWatchingReviewClick(index)}
                 style={{display: tv.review === "" ? "none" : ""}}
                 >arrow_right_icon</i>
            }
            </div> 
        </div>
    ))


    const recentlyWatchedTv = tvWatched.map((tv, index) => (
        <div className="recently_watched_tv"  key={tv.id}>
            <img src={tv.poster} alt="tv posters" className="tv" />
            <div className="word_box"> 
            <h4 className="title">{tv.title}</h4>
            <h4 className="star">{Array(tv.rating).fill(String.fromCharCode(10029))}</h4>
            { watchedReview === tv.review ? 
                <div>
                <i className="material-icons arrow_drop_up_icon" onClick={() => handleWatchedReviewClick(index)} 
                style={{display: tv.review === "" ? "none" : ""}}>arrow_drop_up_icon</i>
                <p className="review" style={{display:  tv.review ? "block" : "none"}}>{tv.review}</p>
                </div>
                 :
                 <i className="material-icons arrow_right_icon" onClick={() => handleWatchedReviewClick(index)}
                 style={{display: tv.review === "" ? "none" : ""}}
                 >arrow_right_icon</i>
            }
            </div>     
        </div>
    ))

    return (
        <div>
             <h1 className="section_title" id="television">Television</h1>
            <h2 className="sub_section_title">Handshake Five</h2>
            <div className="tv_handshake_flex">
            {handshakeTv}
            </div>
            <h2 className="sub_section_title">Currently Watching
            </h2>
            <div className="currently_watching_tv_flex">
            {nowWatchingTv}
            </div>
            <h2 className="sub_section_title">Recently Watched</h2>
            <div className="recently_watched__tv_flex">
            {recentlyWatchedTv}
            </div>
        </div>
    )
}

export default Tv