import React, { useState, useEffect } from 'react';

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

        {categories.length ? (
          <table>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Editar</th>
              <th>Remover</th>
            </tr>
            {categories.map((category) => (
              <tr key={`${category.id}`}>
                <td>{category.title}</td>
                <td>{category.description}</td>
                <td>Editar</td>
                <td>Remover</td>
              </tr>
            ))}
          </table>
        ) : (
          <></>
        )}
      </Container>
    </PageDefault>
  );
}

export default Category;
