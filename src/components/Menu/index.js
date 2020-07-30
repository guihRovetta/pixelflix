import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ButtonLink } from '../Button';
import Logo from '../../assets/img/logo.png';

import { MenuNavigation, MenuLogo } from './styles';

function Menu() {
  const location = useLocation();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    if (location.pathname === '/') {
      setIsHome(true);
    }
  }, [location]);

  return (
    <MenuNavigation>
      <Link to="/">
        <MenuLogo src={Logo} alt="PixelFlix Logo" />
      </Link>

      {isHome && (
        <ButtonLink as={Link} to="/registration/video">
          Novo Vídeo
        </ButtonLink>
      )}

    </MenuNavigation>
  );
}

export default Menu;
