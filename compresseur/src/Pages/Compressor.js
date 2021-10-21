import React from 'react';
import Navigation from '../Component/Navigation';
import Compresseur from '../Component/Compresseur';
import NAV from '../Component/NAV';
import logo from '../img/logo.png'


const Compressor = () => {
    return (
        <div > 
        <NAV/>
            <img className="imagelogo" src={logo} alt="logo" />
        <Compresseur/>
        
        
        </div>
 

    );
};

export default Compressor;