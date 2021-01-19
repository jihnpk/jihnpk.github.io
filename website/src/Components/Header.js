import React from "react";
import { Link } from "react-scroll";

const Header =()=> {
    return(
        <div className="header">
            <div className="profile">
                <img src="jihnpk.jpeg" class="profile-pic" alt="Ji Hoon Park" />
                <h1 className="landing">Hi, my name is <span className="name">Ji Hoon Park</span>.<br></br>I'm a Computer Science major at Binghamton University.</h1>
                <Link
                    activeClass="active"
                    to="nav"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    <div className="continue">
                    Check out my work!
                    </div>
                    
                </Link>
            </div>
        </div>
    )
}

export default Header;