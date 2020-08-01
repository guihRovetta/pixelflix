import React from 'react';
import PropTypes from 'prop-types';

import { Container, Tittle, Message } from './styles';

function NotificationModal({
  status, children,
}) {
  return (
    <Container>
      {children}
      <Tittle color={status.color}>{status.title}</Tittle>
      <Message color={status.color}>{status.message}</Message>
    </Container>
  );
}

NotificationModal.defaultProps = {
  status: {
    message: '',
    color: '#fc85ae',
  },
};

NotificationModal.propTypes = {
  status: PropTypes.shape({
    title: PropTypes.string.isRequired,
    message: PropTypes.string,
    color: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};

export default NotificationModal;
