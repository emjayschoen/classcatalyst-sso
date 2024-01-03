import styled from 'styled-components';
import theme from '../theme';

/**
 * Basic styled input (for forms and stuff)
 * */
const Input = styled.input`
  appearance: none;
  background-color: ${theme.color.whiteOffset};
  border: 1px solid lightgray;
  border-radius: 2px;
  box-sizing: border-box;
  margin-bottom: 12px;
  padding: 6px;
  width: 100%;

  &:hover {
    border-color: gray;
  }

  &:focus {
    border-color: gold;
    outline: none;
  }
`;

/** @component */
export default Input;
