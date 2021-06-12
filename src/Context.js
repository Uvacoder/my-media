import React, {useState} from 'react'


const Context = React.createContext()

function ContextProvider({children}) {

    const [currentReview, setCurrentReview] = useState()

    function reviewToggle(e, arr, review, setter) {
        let selection = arr[e].id
        setter(selection)
        setCurrentReview(selection)
        if (selection === review) {
            setter() 
            setCurrentReview()
        } 
    }

    function filterSet(item, activeReview) {
        const baseOpacity = {opacity: 1, transition: ".5s"}
        const hidden = {opacity: .05, transition: ".5s"}
        const hightLight = {opacity: 1, transition: ".5s"}
        
        if (currentReview !== undefined && currentReview !== activeReview) {
            return hidden
        }
        if (activeReview === undefined ) {
            return baseOpacity
        } else if (item.id === activeReview) {
            return hightLight
        } else if (item.id !== activeReview) {
            return hidden
        }
    }

    const dimmer = {opacity: currentReview === undefined ? 1 : .05, transition: ".5s" }
    const fullDim = {opacity: currentReview === undefined ? 1 : .0, transition: ".5s" }

    function fullStarMaker(rating) {
        const  ratingSplit= rating.toString().split('.')
        const fullStarNumber = parseInt(ratingSplit[0])
        const full = Array(fullStarNumber).fill(String.fromCharCode(10029)) 
        return full   
    }

    function halfStarMaker(rating) {
        const  ratingSplit= rating.toString().split('.')
        const halfStarNumber = parseInt(ratingSplit[1])
        const half = halfStarNumber === 5 ?  '1/2' : ''
        return half   
    }

    const [moviesWatchingSlice, setMoviesWatchingSlice] = useState(10)
    const [moviesWatchedSlice, setMoviesWatchedSlice] = useState(10)

    function handleMovieWatchingArrowToggle() {
        return moviesWatchingSlice === 10 ? setMoviesWatchingSlice() : setMoviesWatchingSlice(10)
    }

    function handleMovieWatchedArrowToggle() {
        return moviesWatchedSlice === 10 ? setMoviesWatchedSlice() : setMoviesWatchedSlice(10)
    }

    const [tvWatchingSlice, setTvWatchingSlice] = useState(10)
    const [tvWatchedSlice, setTvWatchedSlice] = useState(10)

    function handleTvWatchingArrowToggle() {
        return tvWatchingSlice === 10 ? setTvWatchingSlice() : setTvWatchingSlice(10)
    }

    function handleTvWatchedArrowToggle() {
        return tvWatchedSlice === 10 ? setTvWatchedSlice() : setTvWatchedSlice(10)
    }

    const [booksReadingSlice, setBooksReadingSlice] = useState(10)
    const [booksReadSlice, setBooksReadSlice] = useState(10)

    function handleBooksReadingArrowToggle() {
        return booksReadingSlice === 10 ? setBooksReadingSlice() : setBooksReadingSlice(10)
    }

    function handleBooksReadArrowToggle() {
        return booksReadSlice === 10 ? setBooksReadSlice() : setBooksReadSlice(10)
    }


    


    return (
        <Context.Provider value={{fullStarMaker, halfStarMaker, reviewToggle,filterSet, currentReview, dimmer, fullDim, handleMovieWatchingArrowToggle, handleMovieWatchedArrowToggle, moviesWatchingSlice, moviesWatchedSlice, handleTvWatchingArrowToggle, handleTvWatchedArrowToggle, tvWatchingSlice, tvWatchedSlice, handleBooksReadingArrowToggle, handleBooksReadArrowToggle, booksReadingSlice, booksReadSlice}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
