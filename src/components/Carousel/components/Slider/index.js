import React from 'react';
import SlickSlider from 'react-slick';

import { Container } from './styles';

function CustomArrow({ className, style, onClick, arrowColor }) {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: arrowColor }}
      onClick={onClick}
    />
  );
}

function Slider({ children, arrowColor }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    centerMode: false,
    variableWidth: true,
    adaptiveHeight: true,
    draggable: true,
    nextArrow: <CustomArrow arrowColor={arrowColor} />,
    prevArrow: <CustomArrow arrowColor={arrowColor} />,
  };

  return (
    <Container>
      <SlickSlider {...settings}>{children}</SlickSlider>
    </Container>
  );
}

export default Slider;
