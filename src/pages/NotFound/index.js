import React from 'react';

import animationData from '../../assets/video/not_found.json';
import NotFoundAnimation from '../../components/AnimatedElement';

import PageDefault from '../../components/PageDefault';
import { Title } from './styles';

function NotFound() {
  return (
    <PageDefault>
      <NotFoundAnimation animationData={animationData} />
      <Title>Ops... parece que você se perdeu.</Title>
    </PageDefault>
  );
}

export default NotFound;
