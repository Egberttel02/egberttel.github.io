import React from "react";

//https://v5.reactrouter.com/web/guides/quick-start
import { Link } from "react-router-dom";


const Navbar = () => {
    //download npm i react-router-dom untuk buka link to
    return(
        <nav className="navbar">
            <a>
                <svg id="logo-72" width="52" height="44" viewBox="0 0 53 44" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M23.2997 0L52.0461 28.6301V44H38.6311V34.1553L17.7522 13.3607L13.415 13.3607L13.415 44H0L0 0L23.2997 0ZM38.6311 15.2694V0L52.0461 0V15.2694L38.6311 15.2694Z" className="ccustom" fill="#FF1E56"></path> </svg>
            </a>

            <ul className="nav-links">            
                <Link to='/'><li>Home</li></Link>
                <Link to='/'><li>About</li></Link>
                <Link to='/'><li>Service</li></Link>
                <Link to='/'><li>Contact</li></Link>
            </ul>
        </nav>
    );
}

export default Navbar;