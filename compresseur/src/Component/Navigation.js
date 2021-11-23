import React from 'react';
//importation de la librairie react router dom
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        //creation d'une div navigation
        <div className="navigation">
<<<<<<< HEAD

=======
                //Creation des routes
>>>>>>> 30f32b39363db08ee286bdaa3e8cba797c4dac28
            <NavLink exact to="m-mesImages" activeClassName="nav-active"> Mes Images </NavLink>
            <NavLink exact to="c-compressor" activeClassName="nav-active"> Compresseur </NavLink>


        </div>
    );
};

export default Navigation;