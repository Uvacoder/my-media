import React, {useState} from 'react'


const Context = React.createContext()




function ContextProvider({children}) {

    const [review, setReview] = useState([])

    function toggleReview() {
        
        setReview(prevState => !prevState)
    }

   return (
       <Context.Provider value={{toggleReview, review}}>
           {children}
       </Context.Provider>
   )

}

export {ContextProvider, Context}