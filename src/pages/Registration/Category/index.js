import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

function Category() {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <Link to="/registration/video">Cadastrar vídeo</Link>
    </PageDefault>
  );
}

export default Category;
