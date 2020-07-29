import React, { useState, useEffect } from 'react';

import { Container, Wrapper, Label, Input } from './styles';

function FormField({ label, type, name, value, onChange }) {
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
      <Wrapper border={inputActive}>
        <Label active={inputFocus} type={type}>
          {label}
        </Label>
        <Input
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

export default FormField;
