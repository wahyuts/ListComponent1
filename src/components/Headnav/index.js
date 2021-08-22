import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { useHistory } from "react-router-dom";

import '../../css/components/headnav.css'
import Navigation from './Navigation';
import Logo from '../../assets/img/logo.png'
import { HiOutlineUser } from "react-icons/hi";
import SearchBar from './SearchBar';
import HamburgerBTN from './HamburgerBTN';

const Headnav = () => {
    const History = useHistory();

    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        return isDesktop ? children : null
      }
      const Tablet = ({ children }) => {
        const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
        return isTablet ? children : null
      }
      const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
      }
      const Default = ({ children }) => {
        const isNotMobile = useMediaQuery({ minWidth: 768 })
        return isNotMobile ? children : null
      }

    return ( 
        <div className="cont-headNav">
            <div className="only-margin">
                <div className='header-' >
                    <div className= 'header-logo'>
                        <img src={Logo} style={{width: 40, height:40}} alt="hahaha"/>
                    </div>
                    <div className='header-icon'>
                        <h2>My Dashboard</h2>
                    </div>
                    <Desktop>
                        <div className='signin-icon'>
                            <HiOutlineUser size={20}  onClick={()=>History.push("/sign_in")} /> 
                            <p style={{paddingLeft:10}}>Sign In</p>
                        </div>
                    </Desktop>
                    <Tablet>
                        <div className='signin-icon'>
                            <HiOutlineUser size={20}  onClick={()=>History.push("/sign_in")} /> 
                            <p style={{paddingLeft:10}}>Sign In</p>
                        </div>
                    </Tablet>
                    <Mobile>
                        <div>
                            <HamburgerBTN/>
                        </div>
                    </Mobile>
                    
                </div>

                <Desktop>
                    <Navigation/>
                </Desktop>

                <SearchBar/>
            </div>

        </div>
     );
}
 
export default Headnav;