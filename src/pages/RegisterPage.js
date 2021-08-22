import React from 'react';
import RegisterComp from '../components/RegisterComp';
import FooterSignInUp from '../components/FooterSignInUp';
import '../css/components/LoginPage.css';


const RegisterPage = () => {
    return ( 
        <div className="bck">

            <div className="only-width-height-loginComp">
                <h1 className="titleLogin">OKESHIP</h1>
                <RegisterComp/>
            </div>
            <div className="only-width-height-footer">
                <FooterSignInUp/>
            </div>
        </div>
     );
}
 
export default RegisterPage;