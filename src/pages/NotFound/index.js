import React from 'react';

import Lottie from 'react-lottie';
import animationData from '../../assets/video/not_found.json';

import PageDefault from '../../components/PageDefault';
import { Title } from './styles';

function NotFound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <PageDefault>
      <Lottie options={defaultOptions} height={400} width={400} />
      <Title>Ops... parece que você se perdeu.</Title>
    </PageDefault>
  );
}

export default NotFound;
