import React from 'react';
import { useHistory } from 'react-router-dom';

import useForm from '../../../hooks/useForm';
import repository from '../../../repositories';

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

  const history = useHistory();

  function handleClearFields() {
    clearForm();
  }

  function handleSubmit(event) {
    event.preventDefault();
    repository.create('/categories', values);
    handleClearFields();
    history.push('/');
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
