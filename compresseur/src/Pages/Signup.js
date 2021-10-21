import React from 'react';
import CSignup from '../Component/CSignup';
import NAV from '../Component/NAV';
import logo from '../img/logo.png'
const Signup = () => {
    
    return (
        <div>
          <NAV/>
            <img className="imagelogo" src={logo} alt="logo" />
            <h2 className="titleForm">
            Vous n'etes pas encore inscrits? Enregistrez Vous
            </h2>
          <CSignup/>  
        </div>
    );
};

export default Signup;
