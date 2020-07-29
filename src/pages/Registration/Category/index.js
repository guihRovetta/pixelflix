import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { SaveButton, CancelButton } from './styles';

import { Container, Title } from './styles';

function Category() {
  const initialValues = {
    name: '',
    description: '',
    color: '#FFFFFF',
    code: '',
  };
  const [values, setValues] = useState(initialValues);
  const [categories, setCategories] = useState([]);

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
    setCategories([...categories, values]);
    setValues(initialValues);
  }

  return (
    <PageDefault>
      <Container>
        <Title>Nova Categoria</Title>

        <form onSubmit={handleSubmit} autocomplete="off">
          <FormField
            label="Nome"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <FormField
            label="Descrição"
            type="text"
            name="description"
            value={values.description}
            onChange={handleChange}
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

          <SaveButton>Salvar</SaveButton>
          <CancelButton>Limpar</CancelButton>
        </form>
        <div>{categories.length}</div>
        <ul>
          {categories.map((category, index) => {
            return <li key={`${category}${index}`}>{category.name}</li>;
          })}
        </ul>
        <Link to="/registration/video">Cadastrar vídeo</Link>
      </Container>
    </PageDefault>
  );
}

export default Category;
