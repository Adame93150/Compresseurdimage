import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
                
            <NavLink exact to="c-convertisseur" activeClassName="nav-active"> Convertisseur </NavLink>
            <NavLink exact to ="c-compressor" activeClassName="nav-active"> Compresseur </NavLink>
            
            
        </div>
    );
};

export default Navigation;