import React from 'react';
import Button from '../Button';

import Logo from '../../assets/img/logo.png';

import './styles.css';

function Menu() {
  return (
    <nav className="menu">
      <a href="/">
        <img className="logo" src={Logo} alt="PixelFlix Logo" />
      </a>

      <Button className="button-link" href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
