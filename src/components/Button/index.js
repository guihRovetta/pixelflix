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

  @media (max-width: 800px) {
    height: 40px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 0;
    background-color: var(--primary);
  }
`;

export default Button;
