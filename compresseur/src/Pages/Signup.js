import React from 'react';
import CSignup from '../Component/CSignup';
import NAV from '../Component/NAV';
const Signup = () => {
    return (
        <div>
          <NAV></NAV>
            <h2 className="titleForm">
            Didn't register yet? Please Sign Up ?
            </h2>
          <CSignup></CSignup>  
        </div>
    );
};

export default Signup;