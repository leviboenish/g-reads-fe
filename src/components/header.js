import React from 'react';

import logo from '../assets/g-logo.png'

const Header = () => {
    return (
      <header>
        <img id='logo' src={logo} alt="logos" />
        <h1 id='logo-text'>Galvanize Reads</h1>
      </header>
      );
    }

export default Header;
