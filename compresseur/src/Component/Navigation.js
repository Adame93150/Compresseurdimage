import React from 'react';
//importation de la librairie react router dom
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        //creation d'une div navigation avec une contrainte permetant de verifier le nom du chemin avec exact to 
        <div className="navigation">
            <NavLink exact to="m-mesImages" activeClassName="nav-active"> Mes Images </NavLink>
            <NavLink exact to="c-compressor" activeClassName="nav-active"> Compresseur </NavLink>


        </div>
    );
};

export default Navigation;