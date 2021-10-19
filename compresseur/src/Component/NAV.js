import React from 'react';
import { NavLink } from 'react-router-dom';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';
const NAV = () => {
    return (
      <MDBDropdown className="menu">
      <MDBDropdownToggle tag='a' className='btn btn-primary'>
        Menu
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem>
          <MDBDropdownLink href="c-convertisseur">Convertisseur</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="c-compressor">Compresseur</MDBDropdownLink>
        </MDBDropdownItem>
        
      </MDBDropdownMenu>
    </MDBDropdown>
    );
};

export default NAV;