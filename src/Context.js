import React, {useState, useEffect} from 'react'


const Context = React.createContext()

function ContextProvider({children}) {

    

    function reviewToggle(e, arr, review, setter) {
        let selection = arr[e].id
        setter(selection)
        if (selection === review) {
            setter()  
        } 
    }

    function filterSet(item, activeReview) {
        const baseFilter = { filter: "grayscale(0%)"}
        const grayscale = { filter: "grayscale(100%)"}
        const hightLight = { filter: "grayscale(0%)"}
        if (activeReview === undefined ) {
            
            return baseFilter
        } else if (item.id === activeReview) {
            return hightLight
        } else if (item.id !== activeReview) {
            return grayscale
        }
    }






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
        <Context.Provider value={{fullStarMaker, halfStarMaker, reviewToggle,filterSet}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
