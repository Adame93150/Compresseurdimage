import React from 'react';

import NAV from '../Component/NAV';
import logo from '../img/logo.png'
import Card from '../Component/Card.js'

const mesImages = () => {
    return (
        <div>
        //Appel du component NAV    
        <NAV></NAV>
        //Importation de l'image logo depuis "../img/logo.png "
        <img className="imagelogo" src={logo} alt="logo" />
        
    </div>
    );
};

export default mesImages;