import React from 'react';
import Compresseur from '../Component/Compresseur';
import NAV from '../Component/NAV';
import logo from '../img/logo.png'


const Compressor = () => {
    return (
<<<<<<< HEAD
        <div >
            <NAV />
            <img className="imagelogo" src={logo} alt="logo" />
            <Compresseur />


=======
        <div > 
            //appel du component NAV 
        <NAV/>
        //Appel d'une image depuis "../img/logo.png"
            <img className="imagelogo" src={logo} alt="logo" />
            //appel d'un component nommé Compresseur
        <Compresseur/>
        
        
>>>>>>> 30f32b39363db08ee286bdaa3e8cba797c4dac28
        </div>


    );
};

export default Compressor;