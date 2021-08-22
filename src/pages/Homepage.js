import React from 'react';
import Headnav from '../components/Headnav'
import TableProduct from '../components/TableProduct'
import '../css/components/Homepage.css'

const Homepage = () => {
    return ( 
        <div>
            <Headnav/>
            <h1 className="titleHome">Table Product Maybelline</h1>
            <TableProduct/>
        </div>
     );
}
 
export default Homepage;