import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Wrapper, Label, Input, ErrorLabel,
} from './styles';

function FormField({
  label, type, name, value, onChange, as, suggestions, errorMessage,
}) {
  const hasSuggestions = Boolean(suggestions.length);

  return (
    <Container>
      <Wrapper>
        <Label htmlFor={name}>
          <Input
            as={as}
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            list={hasSuggestions ? `suggestionFor_${name}` : undefined}
          />
          <Label.Text>
            {label}
          </Label.Text>
          {
            hasSuggestions && (
              <datalist id={`suggestionFor_${name}`}>
                {
                suggestions.map((suggestion) => (
                  <option value={suggestion} key={`suggestionFor_${name}_option${suggestion}`}>
                    {suggestion}
                  </option>
                ))
              }
              </datalist>
            )
          }
        </Label>
      </Wrapper>
      <ErrorLabel>{errorMessage}</ErrorLabel>
    </Container>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  as: 'input',
  suggestions: [],
  errorMessage: '',
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  as: PropTypes.string,
  suggestions: PropTypes.arrayOf(PropTypes.string),
  errorMessage: PropTypes.string,
};

export default FormField;
