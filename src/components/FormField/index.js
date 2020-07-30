import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Wrapper, Label, Input,
} from './styles';

function FormField({
  label, type, name, value, onChange, as,
}) {
  return (
    <Container>
      <Wrapper>
        <Label>
          <Input
            as={as}
            type={type}
            value={value}
            name={name}
            onChange={onChange}
          />
          <Label.Text>
            {label}
          </Label.Text>
        </Label>
      </Wrapper>
      {/* <ErrorLabel>{label} é obrigatório</ErrorLabel> */}
    </Container>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  as: 'input',
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  as: PropTypes.string,
};

export default FormField;
