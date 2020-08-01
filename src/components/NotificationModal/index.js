import React from 'react';
import PropTypes from 'prop-types';

import { Container, Tittle, Message } from './styles';

function NotificationModal({ title, message, color, children }) {
  return (
    <Container>
      {children}
      <Tittle color={color}>{title}</Tittle>
      <Message color={color}>{message}</Message>
    </Container>
  );
}

NotificationModal.defaultProps = {
  message: '',
  color: '#fc85ae',
};

NotificationModal.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default NotificationModal;
