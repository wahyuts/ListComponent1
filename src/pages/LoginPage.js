import React from 'react';
import FooterSignInUp from '../components/FooterSignInUp';
import LoginComp from '../components/LoginComp';
import '../css/components/LoginPage.css';


const LoginPage = () => {
    return ( 
        <div className="bck">

            <div className="only-width-height-loginComp">
                <h1 className="titleLogin">OKESHIP</h1>
                <LoginComp/>
            </div>
            <div className="only-width-height-footer">
                <FooterSignInUp/>
            </div>
        </div>
     );
}
 
export default LoginPage;