import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 56px;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 50px;
  padding: 14px 10px;
  background-color: #53585d;
  border-radius: 4px;

  border-bottom: ${(props) =>
    props.active ? '4px solid var(--primary)' : 'none'};
  transition: border 0.1s ease-in-out;
`;

export const Label = styled.label`
  position: absolute;
  color: ${(props) =>
    props.active || props.type === 'color'
      ? 'var(--grayDark)'
      : 'var(--grayMedium)'};
  font-size: 18px;
  transform-origin: top left;
  transform: translate(0, 16px) scale(1);
  transition: all 0.1s ease-in-out;

  transform: ${(props) =>
    props.active || props.type === 'color'
      ? 'translate(0, -10px) scale(.67)'
      : 'none'};
`;

export const Input = styled.input`
  outline: 0;
  border: none;
  background-color: transparent;
  color: var(--grayLight);
  font-size: 18px;
  padding: 16px 0 10px;
  flex: 1;
  z-index: 2;
  caret-color: #c2c2c2;

  &[type='color'] {
    border-radius: 4px;
    height: 28px;
    padding: 0;
  }
`;

export const ErrorLabel = styled.span`
  color: var(--errorMedium);
  font-size: 16px;
`;
