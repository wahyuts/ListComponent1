import React from 'react';
import { Link } from 'react-router-dom';
import '../css/components/FooterSignInUp.css'

const FooterSignInUp = () => {
    return ( 
        <div>
            <div className="flex-footer">
                <h2 style={{marginRight:5}}>Back to</h2>
                <Link to="/"className="Link-footer">
                    <h2>Okeship</h2>
                </Link>
               
            </div>
        </div>
     );
}
 
export default FooterSignInUp;