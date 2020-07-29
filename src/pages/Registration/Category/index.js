import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

import { Container, Title } from './styles';

function Category() {
  const initialValues = { name: '', description: '', color: '#FFFFFF' };
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

        <form onSubmit={handleSubmit}>
          <FormField
            label="Nome da Categoria"
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

          <button>Salvar</button>
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
