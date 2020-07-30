import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Container, Wrapper, Label, Input,
} from './styles';

function FormField({
  label, type, name, value, onChange, as,
}) {
  const [inputFocus, setInputFocus] = useState(false);
  const [inputActive, setInputActive] = useState(false);

  useEffect(() => {
    if (!value) {
      setInputFocus(false);
    }
  }, [value]);

  function handleInputFocus() {
    if (!value) {
      setInputFocus((prevState) => !prevState);
      setInputActive(true);
    }
  }

  function handleInputBlur() {
    setInputActive(false);
    if (!value) {
      setInputFocus(false);
    }
  }

  return (
    <Container>
      <Wrapper border={inputActive} isTextArea={type === 'textarea'}>
        <Label active={inputFocus} type={type}>
          {label}
        </Label>
        <Input
          as={as}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
        />
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
