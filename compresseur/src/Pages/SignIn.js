import React from 'react';
import CSignin from '../Component/CSignin';
import NAV from '../Component/NAV';
import logo from '../img/logo.png'

const SignIn = () => {
    return (

        <div>
            //Appel du component NAV
            <NAV></NAV>
<<<<<<< HEAD
            <img className="imagelogo" src={logo} alt="logo" />
=======
            //Importation de l'image depuis "../img/logo.png"
<img className="imagelogo" src={logo} alt="logo" />
            //Creation d'un titre
>>>>>>> 30f32b39363db08ee286bdaa3e8cba797c4dac28
            <h2 className="titleForm">
                Deja inscrit? Connectez-vous
            </h2>
            //Appel du component CSignin
            <CSignin></CSignin>


        </div>
    );
};

export default SignIn;