import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import useForm from '../../../hooks/useForm';
import repository from '../../../repositories';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import NotificationModal from '../../../components/NotificationModal';
import AnimatedElement from '../../../components/AnimatedElement';

import statusSucess from '../../../assets/video/sucess.json';
import statusError from '../../../assets/video/error.json';

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
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [color, setColor] = useState(null);
  const [animationData, setAnimationData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const history = useHistory();

  function handleClearFields() {
    clearForm();
  }

  function handleSucess() {
    setTitle('Parabéns!');
    setMessage(`Categoria ${values.title} criada com sucesso! Você será redicionado em poucos segundos para a página de criação de vídeo`);
    setColor('#00c86f');
    setAnimationData(statusSucess);

    setTimeout(() => {
      handleClearFields();
      history.push('/registration/video');
    }, 5000);
  }

  function handleError() {
    setTitle('Ops...');
    setMessage(`Tivemos problemas ao cadastrar a categoria ${values.title}. Por favor tente novamente!`);
    setColor('#e53935');
    setAnimationData(statusError);

    setTimeout(() => setShowModal(false), 5000);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await repository.create('/categories', values);
    setShowModal(true);
    if (response.ok) {
      handleSucess();
    } else {
      handleError();
    }
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

      {showModal && (
        <NotificationModal title={title} message={message} color={color}>
          <AnimatedElement animationData={animationData} width={250} height={250} />
        </NotificationModal>
      )}

    </PageDefault>
  );
}

export default Category;
