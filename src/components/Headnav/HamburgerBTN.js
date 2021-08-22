import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../css/components/HamburgerBTN.css'

const HamburgerBTN = () => {
    useEffect(() => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".navMenu");
        const navLink = document.querySelectorAll(".navLink");
    
        
        navLink.forEach(n => n.addEventListener("click", closeMenu));

        function mobileMenu() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        }

        function closeMenu() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }

        hamburger.addEventListener("click", mobileMenu);
    },[])

    return ( 
        <div>
            <div className="navbar">
                <ul className="navMenu">

                    <Link to="/sign_in" className="navLink-signIn">
                        <div className="hover-menu-signIn-burger">
                            <li className="navItem">
                                    Sign In
                            </li>
                        </div>
                    </Link>

                    <Link to="/" className="navLink">
                        <div className="hover-menu-burger">
                            <li className="navItem">
                                    Home
                            </li>
                        </div>
                    </Link>
                    
                    <Link to="/Graph" className="navLink">
                        <div className="hover-menu-burger">
                            <li className="navItem">
                                    Graph
                            </li>
                        </div>
                    </Link>
                    
                    <Link to="/Map" className="navLink">
                        <div className="hover-menu-burger">
                            <li className="navItem">
                                    Contact Map
                            </li>
                        </div>
                    </Link>
                    
                </ul>
            </div>

            <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
     );
}
 
export default HamburgerBTN;