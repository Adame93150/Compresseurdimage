import React from 'react';
import NAV from '../Component/NAV';
import logo from '../img/logo.png'

const Contact = () => {
    return (
        <div>
            
            <NAV></NAV>
            <img className="imagelogo" src={logo} alt="logo" />
        </div>
    );
};

export default Contact;