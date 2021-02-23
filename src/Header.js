import React, {useContext} from 'react'
import useToggler from './useToggler'
import { Context } from './Context'

function Header(){
    const [show, toggle] = useToggler(true)
    const {fullDim} = useContext(Context)

    return (
        <div  className="header" style={fullDim}>
        <h1 className="main_title">Media Consumption</h1>
        <i className="material-icons menu-icon" 
             onClick={toggle}
             style={{ display: show ? "block" : "none"}}
             >menu_icon</i>
        <nav style={{display: show ? "none" : "block"}} className="nav-container">
          
          <i className="material-icons close-icon"
              onClick={toggle}
              style={{display: show ? "none" : "block"}}
              >close_icon</i>
            <a href="#movies" className="firstAnchor">Movies</a>
            <a href="#television">Television</a>
            <a href="#books" className="lastAnchor">Books</a> 
        </nav>
        </div>
    )
}

export default Header