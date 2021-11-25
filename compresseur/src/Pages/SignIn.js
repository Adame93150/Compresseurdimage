import React from 'react';
import CSignin from '../Component/CSignin';
import NAV from '../Component/NAV';
import logo from '../img/logo.png'

const SignIn = () => {
    return (

        <div>

            <NAV></NAV>

            <img className="imagelogo" src={logo} alt="logo" />

            <h2 className="titleForm">
                Deja inscrit? Connectez-vous
            </h2>

            <CSignin></CSignin>


        </div>
    );
};

export default SignIn;