import React from 'react';
import { Link } from 'react-router-dom';

import { ButtonLink } from '../Button';
import Logo from '../../assets/img/logo.png';

import { MenuNavigation, MenuLogo } from './styles';

function Menu() {
  return (
    <MenuNavigation>
      <Link to="/">
        <MenuLogo src={Logo} alt="PixelFlix Logo" />
      </Link>

      <ButtonLink as={Link} to="/registration/video">
        Novo Vídeo
      </ButtonLink>
    </MenuNavigation>
  );
}

export default Menu;
