import React from 'react';
import Card from '../Component/Card'
import NAV from '../Component/NAV';
import logo from '../img/logo.png'

const mesImages = () => {
    return (
        <div>

            <NAV></NAV>
            <img className="imagelogo" src={logo} alt="logo" />
            <h1 className = "titre"> Mes Images recentes</h1>
            <Card></Card>
        </div>
    );
};

export default mesImages;