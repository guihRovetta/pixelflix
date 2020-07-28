import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import Button from '../Button';
import Logo from '../../assets/img/logo.png';

function Menu() {
  return (
    <nav className="menu">
      <Link to="/">
        <img className="logo" src={Logo} alt="PixelFlix Logo" />
      </Link>

      <Button as={Link} className="button-link" to="/registration/video">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
