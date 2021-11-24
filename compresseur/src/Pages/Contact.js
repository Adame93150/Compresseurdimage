import React from 'react';
import NAV from '../Component/NAV';
import logo from '../img/logo.png'


const Contact = () => {
    return (
        <div>
            
            <NAV></NAV>
        
            <img className="imagelogo" src={logo} alt="logo ImageIn" />

            <h1 className="titre">Contact</h1>
            <p className="p2"> Ezka Mehdi
            </p>
            <p className="p2"> Mail : ezka.mehdi@gmail.com
            </p>
            <p className="p2"> Linkedin : https://www.linkedin.com/in/mehdi-ezka-a09a65167/
            </p>
            <p className="p2"> Git Hub : https://github.com/EzkaMehdi
            </p>
        </div>
    );
};

export default Contact;