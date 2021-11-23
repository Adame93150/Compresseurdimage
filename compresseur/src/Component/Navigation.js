import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">

            <NavLink exact to="m-mesImages" activeClassName="nav-active"> Mes Images </NavLink>
            <NavLink exact to="c-compressor" activeClassName="nav-active"> Compresseur </NavLink>


        </div>
    );
};

export default Navigation;