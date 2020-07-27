import React from 'react';
import Logo from '../../assets/img/logo.png';

import './styles.css';

function Menu() {
  return (
    <nav className="menu">
      <a href="/">
        <img className="logo" src={Logo} alt="PixelFlix Logo" />
      </a>

      <a className="button-link" href="/">
        Novo vídeo
      </a>
    </nav>
  );
}

export default Menu;
