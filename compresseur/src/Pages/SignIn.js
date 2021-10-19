import React from 'react';
import CSignin from '../Component/CSignin';
import NAV from '../Component/NAV';

const SignIn = () => {
    return (

        <div>

            <NAV></NAV>
            <h2 className="titleForm">
            Already subscribed? Please Log in
            </h2>
            <CSignin></CSignin>
            
            
        </div>
    );
};

export default SignIn;