import React, { useState, useEffect } from 'react';

import useForm from '../../../hooks/useForm';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import {
  Container, Title, ActionsWrapper, SaveButton, CancelButton,
} from '../styles';

function Video() {
  const initialValues = {
    title: '',
    link: '',
    thumbnail: '',
    categoryId: 0,
    description: '',
    code: '',
  };
  const { values, handleChange, clearForm } = useForm(initialValues);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:3333/categories';
      fetch(URL)
        .then(async (response) => {
          if (response.ok) {
            const responseCategories = await response.json();
            setCategories([...responseCategories]);
            return;
          }
          throw new Error('Não foi possível carregar as categorias do servidor');
        });
    }
  }, []);

  async function saveVideo() {
    const URL = 'http://localhost:3333/videos';
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    return response.json();
  }

  function handleClearFields() {
    clearForm();
  }

  function handleSubmit(event) {
    event.preventDefault();
    saveVideo().then((data) => {
      console.log(data);
    });
    handleClearFields();
  }

  return (
    <PageDefault>
      <Container>
        <Title>Novo Vídeo</Title>

        <form autoComplete="off">
          <FormField
            label="Título"
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
          />
          <FormField
            label="Link do vídeo"
            type="url"
            name="link"
            value={values.link}
            onChange={handleChange}
          />
          <FormField
            label="Link da imagem do vídeo"
            type="url"
            name="thumbnail"
            value={values.thumbnail}
            onChange={handleChange}
          />
          {/* <FormField
            label="Categoria"
            type="text"
            name="categoryId"
            value={values.categoryId}
            onChange={handleChange}
          /> */}
          <select name="categoryId">
            {categories.map((category) => (
              <option key={category.id} value={category.id} onChange={handleChange}>{category.title}</option>))}
          </select>
          <FormField
            label="Descrição"
            type="textarea"
            name="description"
            value={values.description}
            onChange={handleChange}
            as="textarea"
          />
          <FormField
            label="Código de Segurança"
            type="number"
            name="code"
            value={values.code}
            onChange={handleChange}
          />

          <ActionsWrapper>
            <SaveButton onClick={handleSubmit}>Salvar</SaveButton>
            <CancelButton onClick={handleClearFields}>Limpar</CancelButton>
          </ActionsWrapper>
        </form>
      </Container>
    </PageDefault>
  );
}

export default Video;
