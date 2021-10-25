import React from 'react';
import logo from '../img/logo.png'
import Navigation from '../Component/Navigation';
import NAV from '../Component/NAV';



const Accueil = () => {
    return (
        
        <div className="Acceuil">
           
            <NAV></NAV>
        <img className="imagelogo" src={logo} alt="logo" />
        <h2 className="titre">imageIn</h2>
        <p className="paragraphe"> Compressez vos images jpg ou png ou alors compressez vos vidéos 
         simplement avec la meilleure qualité.
        </p>
         <Navigation></Navigation>
        </div>
    );
};

export default Accueil; 