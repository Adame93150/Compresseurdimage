import React from 'react';
import logo from '../img/logo.png'
import Navigation from '../Component/Navigation';
import NAV from '../Component/NAV';



const Accueil = () => {
    
    return (
        //Creation de la div Accueil
        <div className="Acceuil">
           //Appel du component NAV depuis "../Component/NAV"
            <NAV></NAV>
           //Appel une image depuis "../img/logo.png" 
        <img className="imagelogo" src={logo} alt="logo de ImageIn" />
        //Cree un titre
        <h1 className="titre">imageIn</h1>
        //Cree un paragraphe
        <p className="paragraphe"> Compressez vos images jpg ou png simplement avec la meilleure qualité.
        </p>
        //Appel du component Navagation
         <Navigation></Navigation>
        </div>
    );
};

export default Accueil; 