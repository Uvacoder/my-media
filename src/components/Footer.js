import React, {useContext} from 'react'
import { Context } from '../Context'

function Footer() {

    const {dimmer} = useContext(Context)

    return (
            <div  className="footer" style={dimmer}> 
            
            <a href="https://scottjellen.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://s3.us-east-2.amazonaws.com/scottjellen.me.projectlist/sJellenLogo.jpg"
                    alt="logo"
                    className="logo"
                    />
            </a>
                <h1 className="copy_footer"> by uvacoder &#169; 2021</h1>
            </div>
    )
}

export default Footer
