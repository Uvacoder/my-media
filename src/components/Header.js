import React, {useContext} from 'react'
import { Context } from '../Context'

function Header(){
    const {fullDim, handleHamburgerClick, dropDownNavClick, isNavOpen} = useContext(Context)

    return (
        <div  className="header" style={fullDim}>
        <h1 className="main_title">Media Consumption</h1>
        <i className="material-icons menu-icon" 
             onClick={() => handleHamburgerClick()}
             style={{ display: isNavOpen ? "none" : "block"}}
             >menu_icon</i>
        <nav style={{display: isNavOpen ? "block" : "none"}} className="nav-container">
          
          <i className="material-icons close-icon"
              onClick={() => handleHamburgerClick()}
              style={{display: isNavOpen ? "block" : "none"}}
              >close_icon</i>
            <a href="#movies" className="firstAnchor" onClick={dropDownNavClick}>Movies</a>
            <a href="#television" onClick={dropDownNavClick}>Television</a>
            <a href="#books" className="lastAnchor" onClick={dropDownNavClick}>Books</a> 
        </nav>
        </div>
    )
}

export default Header