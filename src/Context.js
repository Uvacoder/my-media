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
    


    return (
        <Context.Provider value={{fullStarMaker, halfStarMaker, reviewToggle,filterSet, currentReview, dimmer}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
