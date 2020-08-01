import React from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';

function AnimatedElement({ animationData, height, width }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={height} width={width} />;
}

AnimatedElement.defaultProps = {
  animationData: {},
  height: 400,
  width: 400,
};

AnimatedElement.propTypes = {
  animationData: PropTypes.objectOf(PropTypes.any),
  height: PropTypes.number,
  width: PropTypes.number,
};

export default AnimatedElement;
