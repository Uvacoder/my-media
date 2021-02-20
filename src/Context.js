import React, {useState, useEffect} from 'react'


const Context = React.createContext()

function ContextProvider({children}) {

    const [notReview, setNotReview] = useState(true)

    function reviewToggle(e, arr, reviewArr, setter) {
        let selection = arr[e].review
        setter(selection)
        setNotReview(true)
        if (selection === reviewArr) {
            setter()
            setNotReview(false)
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
        <Context.Provider value={{fullStarMaker, halfStarMaker, reviewToggle, notReview, setNotReview}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
