import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import useForm from '../../../hooks/useForm';
import useFetch from '../../../hooks/useFetch';
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
  const [statusInfo, setStatusInfo] = useState({});
  const [animationData, setAnimationData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [response] = useFetch('/categories');
  const categoryTitles = response ? response.map(({ title }) => title) : [];
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  function findCategoryId() {
    const categoryFound = response.find((category) => category.title === values.category);

    return categoryFound ? categoryFound.id : 0;
  }

  function handleClearFields() {
    clearForm();
  }

  function handleSucess() {
    setStatusInfo({
      title: 'Parabéns!',
      message: `Vídeo ${values.title} adicionado com sucesso! Você será redicionado em poucos segundos para a página inicial`,
      color: '#00c86f',
    });

    setAnimationData(statusSucess);

    setTimeout(() => {
      handleClearFields();
      history.push('/');
    }, 5000);
  }

  function handleError() {
    setStatusInfo({
      title: 'Ops...',
      message: `Tivemos problemas ao cadastrar o vídeo ${values.title}. Por favor tente novamente!`,
      color: '#e53935',
    });

    setAnimationData(statusError);

    setTimeout(() => setShowModal(false), 5000);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const categoryId = findCategoryId();

    if (categoryId) {
      values.categoryId = categoryId;
      const res = await repository.create('/videos', values);
      setShowModal(true);
      if (res.ok) {
        handleSucess();
      } else {
        handleError();
      }
    } else {
      setErrorMessage('Categoria não encontrada! Cadastre uma antes.');
    }
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
            errorMessage={errorMessage}
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

      {showModal && (
        <NotificationModal status={statusInfo}>
          <AnimatedElement animationData={animationData} width={250} height={250} />
        </NotificationModal>
      )}
    </PageDefault>
  );
}

export default Video;
