import React from 'react';
import logo from '../img/logo.png'
import Navigation from '../Component/Navigation';
import NAV from '../Component/NAV';



const Accueil = () => {

    return (
<<<<<<< HEAD

        <div className="Acceuil">

            <NAV></NAV>
            <img className="imagelogo" src={logo} alt="logo de ImageIn" />
            <h1 className="titre">imageIn</h1>
            <p className="paragraphe"> Compressez vos images jpg ou png simplement avec la meilleure qualité.
            </p>
            <Navigation></Navigation>
=======
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
>>>>>>> 30f32b39363db08ee286bdaa3e8cba797c4dac28
        </div>
    );
};

export default Accueil;