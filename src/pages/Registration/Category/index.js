import React, { useState } from 'react';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import {
  Container, Title, ActionsWrapper, SaveButton, CancelButton,
} from '../styles';

function Category() {
  const initialValues = {
    name: '',
    description: '',
    color: '#FFFFFF',
    code: '',
  };
  const [values, setValues] = useState(initialValues);

  async function saveCategory() {
    const URL = 'http://localhost:3333/categories';
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    return response.json();
  }

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
    saveCategory().then((data) => {
      console.log(data);
    });
    setValues(initialValues);
  }

  function handleClearFields() {
    setValues(initialValues);
  }

  return (
    <PageDefault>
      <Container>
        <Title>Nova Categoria</Title>

        <form autoComplete="off">
          <FormField
            label="Nome"
            type="text"
            name="name"
            value={values.name}
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
