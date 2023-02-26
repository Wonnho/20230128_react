import styled, { css } from "styled-components";

export const Button = styled.button`
  ${(width, bgColor, color) => css`
    width: ${width || 200} px;
    border: 1px solid #f2f2f2;
    outline: none;
    padding: 5px;
    background-color: ${bgColor || "#f23dfa"};
    color: ${color || "#fff"};
    cursor: pointer;

    & + & {
      margin-top: 4px;
    }
  `}
`;
export default Button;
