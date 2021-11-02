import React from 'react';
// import { NavLink } from 'react-router-dom';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';

const NAV = () => {
    return (
      
     
    
       <MDBDropdown className="menu">
      <MDBDropdownToggle tag='a' className='btn btn-primary'>
      Menu
      </MDBDropdownToggle>
      <MDBBtn href="SignIn">Sign In</MDBBtn>
      <MDBBtn href="SignUp">Sign Up</MDBBtn>
      <MDBDropdownMenu>
      <MDBDropdownItem>
          <MDBDropdownLink href="/">Accueil</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="c-convertisseur">Convertisseur</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="c-compressor">Compresseur</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="m-mesImages">Mes Images</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="Contact">Contact</MDBDropdownLink>
        </MDBDropdownItem>
        
      </MDBDropdownMenu>
    </MDBDropdown>
      
      
    );
};

export default NAV;