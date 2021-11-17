import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';

const Logout = () => {
    return (
        <div>
            <MDBDropdown className="menu">
     <MDBDropdownToggle tag='a' className='btn btn-primary'>
     Menu
     </MDBDropdownToggle>
     <MDBBtn href="SignIn">Log out</MDBBtn>
     <MDBDropdownMenu>
     <MDBDropdownItem>
         <MDBDropdownLink href="/">Accueil</MDBDropdownLink>
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
        </div>
    );
};

export default Logout;