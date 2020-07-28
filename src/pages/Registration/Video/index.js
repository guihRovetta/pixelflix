import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
// import CategoryRegistration from '../Category';

function Video() {
  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>

      <Link to="/registration/category">Cadastrar categoria</Link>
    </PageDefault>
  );
}

export default Video;
