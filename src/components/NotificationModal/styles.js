import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 1000;
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 1;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Tittle = styled.h1`
  color: ${(props) => props.color || 'var(--primary)'};
  font-size: 48px;
  padding-top: 8px;
`;

export const Message = styled.p`
  color: ${(props) => props.color || 'var(--primary)'};
  font-size: 16px;
  opacity: .7;
  padding-top: 16px;
`;
