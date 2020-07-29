import React, { useState } from 'react';

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

  function handleClearFields() {
    setValues(initialValues);
  }

  return (
    <PageDefault>
      <Container>
        <Title>Nova Categoria</Title>

        <form autocomplete="off">
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

          <SaveButton onClick={handleSubmit}>Salvar</SaveButton>
          <CancelButton onClick={handleClearFields}>Limpar</CancelButton>
        </form>

        {categories.length ? (
          <table>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Editar</th>
              <th>Remover</th>
            </tr>
            {categories.map((category, index) => {
              return (
                <tr key={`${category}${index}`}>
                  <td>{category.name}</td>
                  <td>{category.description}</td>
                  <td>Editar</td>
                  <td>Remover</td>
                </tr>
              );
            })}
          </table>
        ) : (
          <></>
        )}
      </Container>
    </PageDefault>
  );
}

export default Category;
