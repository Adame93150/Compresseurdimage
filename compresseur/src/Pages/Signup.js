import React from 'react';
import CSignup from '../Component/CSignup';
import NAV from '../Component/NAV';
import logo from '../img/logo.png'
const Signup = () => {
    
    return (
        <div>
           //Appel du component NAV
          <NAV/>
          //Importation de l'image depuis "../img/logo.png"
            <img className="imagelogo" src={logo} alt="logo" />
            //Creation d'un titre
            <h2 className="titleForm">
            Vous n'etes pas encore inscrits? Enregistrez Vous
            </h2>
            //Appel du component CSignup
          <CSignup/>  
        </div>
    );
};

export default Signup;
