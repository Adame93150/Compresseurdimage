import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';
//importation de la librairie mdb5 React
import { MDBBtn } from 'mdb-react-ui-kit';



const NAV = () => {
  const [userConnected, setUserConnected] = useState(false);
  const [informDisconnection, setInformDisconnection] = useState(false);

  
  useEffect(() => {
    const token = localStorage.getItem("token") || false

    if (token) {
      setUserConnected(true)
    }
  }, [])

  const logout = () => {
    localStorage.removeItem("token")
    setUserConnected(false)
    setInformDisconnection(true)

    setTimeout(() => setInformDisconnection(false), 10000)
  }

  return (
    
    <MDBDropdown className="menu">
      <MDBDropdownToggle tag='a' className='btn btn-primary'>
      Menu
      </MDBDropdownToggle>
      {userConnected ? (
        <>
          <MDBBtn onClick={() => logout()}>Logout</MDBBtn>
        </>
      ) : (
        <>
          <MDBBtn href="SignIn">Sign In</MDBBtn>
          <MDBBtn href="SignUp">Sign Up</MDBBtn>
        </>
      )}
      <MDBDropdownMenu>
        <MDBDropdownItem>
          <MDBDropdownLink href="/">Accueil</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="c-compressor">Compresseur</MDBDropdownLink>
        </MDBDropdownItem>
        { userConnected && 
          <MDBDropdownItem>
            <MDBDropdownLink href="m-mesImages">Mes Images</MDBDropdownLink>
          </MDBDropdownItem>
        }
        <MDBDropdownItem>
          <MDBDropdownLink href="Contact">Contact</MDBDropdownLink>
        </MDBDropdownItem>
      </MDBDropdownMenu>
      {informDisconnection &&
        <div className="row">
            <div className="offset-3 col-6 mx-auto">
                <div className="alert alert-danger" role="alert">
                    Your session was disconnected! Please try loging in again
                </div>
            </div>
        </div>
      }
    </MDBDropdown>
  );
};

export default NAV;