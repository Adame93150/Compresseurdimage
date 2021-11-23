import React from 'react';
import NAV from '../Component/NAV';
import logo from '../img/logo.png'


const Contact = () => {
    return (
        <div>
<<<<<<< HEAD

=======
            //Appel du component NAV
>>>>>>> 30f32b39363db08ee286bdaa3e8cba797c4dac28
            <NAV></NAV>
            //Importation d'une image depuis "../img/logo.png"
            <img className="imagelogo" src={logo} alt="logo" />
<<<<<<< HEAD

            <h1 className="titre">Contact</h1>
            <p className="p2"> Ezka Mehdi
            </p>
            <p className="p2"> Mail : ezka.mehdi@gmail.com
            </p>
            <p className="p2"> Linkedin : https://www.linkedin.com/in/mehdi-ezka-a09a65167/
            </p>
            <p className="p2"> Git Hub : https://github.com/EzkaMehdi
            </p>
=======
            //Creation d'un titre 
            <h1 className="titre">Contact</h1>
            //Creation de plusieurs paragraphe
        <p className="p2"> Ezka Mehdi
        </p>
        <p className="p2"> Mail : ezka.mehdi@gmail.com
        </p>
        <p className="p2"> Linkedin : https://www.linkedin.com/in/mehdi-ezka-a09a65167/
        </p>
        <p className="p2"> Git Hub : https://github.com/EzkaMehdi
        </p>
>>>>>>> 30f32b39363db08ee286bdaa3e8cba797c4dac28
        </div>
    );
};

export default Contact;