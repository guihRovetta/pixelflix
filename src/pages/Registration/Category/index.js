import React from 'react';
import { useHistory } from 'react-router-dom';

import useForm from '../../../hooks/useForm';
import repository from '../../../repositories';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import {
  Container, Title, ActionsWrapper, SaveButton, CancelButton,
} from '../styles';

function Category() {
  const initialValues = {
    title: '',
    description: '',
    color: '#FFFFFF',
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
    history.push('/registration/video');
  }

  return (
    <PageDefault>
      <Container>
        <Title>Nova Categoria</Title>

        <form autoComplete="off">
          <FormField
            label="Nome"
            type="text"
            name="title"
            value={values.title}
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
            label="Cor"
            type="color"
            name="color"
            value={values.color}
            onChange={handleChange}
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

export default Category;
