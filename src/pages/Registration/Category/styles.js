import styled from 'styled-components';
import Button from '../../../components/Button';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 60px;
  color: var(--grayLight);
  margin-bottom: 91px;
`;

export const SaveButton = styled(Button)`
  background-color: var(--primary);
  margin-right: 40px;
`;

export const CancelButton = styled(Button)`
  background-color: var(--blackLighter);
  color: var(--blackDark);
`;
