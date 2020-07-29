import React, { useState } from 'react';

import { Container, Wrapper, Label, Input } from './styles';

function FormField({ label, type, name, value, onChange }) {
  const [inputFocus, setInputFocus] = useState(false);

  function handleInputFocus() {
    if (!value) {
      setInputFocus((prevState) => !prevState);
    }
  }

  return (
    <Container>
      <Wrapper active={inputFocus}>
        <Label active={inputFocus} type={type}>
          {label}
        </Label>
        <Input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          onBlur={handleInputFocus}
          onFocus={handleInputFocus}
        />
      </Wrapper>
      {/* <ErrorLabel>{label} é obrigatório</ErrorLabel> */}
    </Container>
  );
}

export default FormField;
