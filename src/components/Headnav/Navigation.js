import React from 'react'
import { Link } from 'react-router-dom';
import '../../css/components/headnav.css'

const Navigation = () => {
    return ( 
        <div>
            <div>
                <div className='nav-link'>
                    <Link to='/' className='Link'>Home</Link>
                    <Link to='/Graph' className='Link'>Graph</Link>
                    <Link to='/Map' className='Link'>Contact Map</Link>
                </div>
            </div>
            
        </div>
     );
}
 
export default Navigation;