import React from 'react'
import { useHistory } from "react-router-dom";

import '../../css/components/headnav.css'
import Navigation from './Navigation';
import Logo from '../../assets/img/logo.png'
import { HiOutlineUser } from "react-icons/hi";
import SearchBar from './SearchBar';

const Headnav = () => {
    const History = useHistory();
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
                    <div className='signin-icon'>
                        <HiOutlineUser size={20}  onClick={()=>History.push("/my-account-page")} /> 
                        <p style={{paddingLeft:10}}>Sign In</p>
                    </div>
                </div>
                <Navigation/>
                <SearchBar/>
            </div>

        </div>
     );
}
 
export default Headnav;