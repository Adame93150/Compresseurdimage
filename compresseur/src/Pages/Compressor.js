import React from 'react';
import Navigation from '../Component/Navigation';
import Compresseur from '../Component/Compresseur';
import NAV from '../Component/NAV';
import logo from '../img/logo.png'


const Compressor = () => {
    return (
        <div > 
            //appel du component NAV 
        <NAV/>
        //Appel d'une image depuis "../img/logo.png"
            <img className="imagelogo" src={logo} alt="logo" />
            //appel d'un component nommé Compresseur
        <Compresseur/>
        
        
        </div>
 

    );
};

export default Compressor;