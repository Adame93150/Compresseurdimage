import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
                
            <NavLink exact to="/"> Accueil </NavLink>
            <NavLink exact to ="Compressor"> Compresseur </NavLink>
            <NavLink exact to ="caca">caca</NavLink>
            
        </div>
    );
};

export default Navigation;