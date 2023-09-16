import styled from '@emotion/styled';
import { ErrorMessage } from 'formik';

export const EntryField = styled.label`
  width: fit-content;
  margin-bottom: 10px;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: space-around;
  text-align: left;
`;

export const AddButton = styled.button`
  margin: 0 auto;
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: red;
`;
