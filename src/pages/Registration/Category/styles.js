import styled from 'styled-components';
import Button from '../../../components/Button';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    width: 100%;
    margin-bottom: 31px;
  }

  table {
    margin-bottom: 31px;
    width: 100%;
    border: 4px solid var(--primary);
  }

  th {
    font-size: 35px;
    font-style: normal;
    font-weight: normal;
    color: var(--grayLight);
    text-align: left;
    border-right: 4px solid var(--primary);
    border-bottom: 4px solid var(--primary);
  }

  td {
    font-size: 27px;
    font-style: normal;
    font-weight: normal;
    color: var(--grayLight);
  }
`;

export const Title = styled.h1`
  font-size: 60px;
  color: var(--grayLight);
  margin-bottom: 91px;
  font-style: normal;
  font-weight: normal;
`;

export const SaveButton = styled(Button)`
  background-color: var(--primary);
  margin-right: 40px;
`;

export const CancelButton = styled(Button)`
  background-color: var(--blackLighter);
  color: var(--blackDark);
`;
