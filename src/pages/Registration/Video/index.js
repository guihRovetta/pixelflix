import React from 'react';
import { useHistory } from 'react-router-dom';

import useForm from '../../../hooks/useForm';
import useFetch from '../../../hooks/useFetch';
import repository from '../../../repositories';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import {
  Container, Title, ActionsWrapper, SaveButton, CancelButton,
} from '../styles';

function Video() {
  const initialValues = {
    title: '',
    url: '',
    thumbnail: '',
    category: '',
    description: '',
    code: '',
  };
  const { values, handleChange, clearForm } = useForm(initialValues);
  const [response] = useFetch('/categories');
  const categoryTitles = response ? response.map(({ title }) => title) : [];

  const history = useHistory();

  function findCategoryId() {
    const categoryFound = response.find((category) => category.title === values.category);

    return categoryFound.id;
  }

  function handleClearFields() {
    clearForm();
  }

  function handleSubmit(event) {
    event.preventDefault();
    values.categoryId = findCategoryId();
    repository.create('/videos', values);
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
            name="url"
            value={values.url}
            onChange={handleChange}
          />
          <FormField
            label="Link da imagem do vídeo"
            type="url"
            name="thumbnail"
            value={values.thumbnail}
            onChange={handleChange}
          />
          <FormField
            label="Categoria"
            name="category"
            value={values.category}
            onChange={handleChange}
            suggestions={categoryTitles}
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
