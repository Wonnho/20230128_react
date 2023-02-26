import styled, { css } from "styled-components";

export const Input = styled.input`
  ${({ width }) => css`
    width: ${width || 200}px;
    border: 1px solid #f2f2f2;
    outline: none;
    padding: 5px;
  `}
`;

export default Input;
