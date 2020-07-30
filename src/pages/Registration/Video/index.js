import React, { useState, useEffect } from 'react';

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
    category: '',
    description: '',
    code: '',
  };
  const [values, setValues] = useState(initialValues);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'http://localhost:3333/videos';
      fetch(URL)
        .then(async (response) => {
          if (response.ok) {
            const responseVideos = await response.json();
            setVideos([...responseVideos]);
            return;
          }
          throw new Error('Não foi possível carregar os vídeos do servidor');
        });
    }
  }, []);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    setValue(event.target.getAttribute('name'), event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setVideos([...videos, values]);
    setValues(initialValues);
  }

  function handleClearFields() {
    setValues(initialValues);
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
            type="text"
            name="link"
            value={values.link}
            onChange={handleChange}
          />
          <FormField
            label="Link da imagem do vídeo"
            type="text"
            name="thumbnail"
            value={values.thumbnail}
            onChange={handleChange}
          />
          <FormField
            label="Categoria"
            type="text"
            name="category"
            value={values.category}
            onChange={handleChange}
          />
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
