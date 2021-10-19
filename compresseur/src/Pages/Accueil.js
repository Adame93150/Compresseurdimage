import React from 'react';
import logo from '../img/logo.png'
import Navigation from '../Component/Navigation';
import NAV from '../Component/NAV';



const Accueil = () => {
    return (
        
        <div className="Acceuil">
           
            <NAV></NAV>
        <img className="imagelogo" src={logo} alt="logo" />
        <p className="paragraphe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vivamus pharetra ante nec erat porttitor fermentum. 
            Nulla ut enim pharetra, pulvinar lectus fringilla, elementum nunc. 
            Morbi et metus felis. Nullam rutrum dapibus odio, nec dignissim est elementum mattis. 
            Nulla congue neque vel felis tristique aliquam. Nulla et pellentesque elit. 
            Curabitur maximus vestibulum magna, vel semper justo semper non. Quisque sit amet nisl felis. 
            Cras in sapien ipsum. Suspendisse tristique, velit vel eleifend posuere, massa augue vehicula lacus, 
            a auctor est justo in magna. Ut porta ornare libero ut placerat. Fusce hendrerit in nunc a dapibus. </p>
         <Navigation></Navigation>
        </div>
    );
};

export default Accueil; 