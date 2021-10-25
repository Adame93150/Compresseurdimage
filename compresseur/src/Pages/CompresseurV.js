import React from 'react';
import { Icon } from 'semantic-ui-react';

import logo from '../img/logo.png'
import NAV from '../Component/NAV';

const CompresseurV = () => {
    return (
        <div>
            <NAV></NAV>
            <img className="imagelogo" src={logo} alt="logo" />
            <Icon></Icon>
      
        </div>
        
    );
};

export default CompresseurV;