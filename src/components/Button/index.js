import styled from 'styled-components';

const Button = styled.a`
  width: 180px;
  height: 54px;
  text-align: center;
  color: var(--white);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export const ButtonLink = styled(Button)`
  color: var(--white);
  border: 1px solid var(--white);
`;

export default Button;
