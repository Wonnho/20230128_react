import { darken, lighten } from "polished";
import styled, { css, keyframes } from "styled-components";
//import { Keyframes } from "styled-components";
function Button({ text, bgColor, big }) {
  return (
    <StyledButton bgColor={bgColor} big={big}>
      {text}
    </StyledButton>
  );
}
const slideUp = keyframes`
from {
    transform:translateY(20px);
}
`;
const StyledButton = styled.div`
  width: 100px;
  padding: 5px 0;
  border-radius: 15px;
  //background-color: "red";
  //background-color: ${(props) => props.bgColor};

  //bgColor Prop 이 전달되면 적용하고, 전달 안되면 메인컬러 적용
  background-color: ${({ bgColor, theme }) => bgColor || theme.colors.main};
  //color: ${(props) => console.log(props)};
  color: #fff;
  text-align: center;

  cursor: pointer;
  user-select: none;

  animation: ${slideUp} 1s;

  ${({ big }) =>
    big &&
    css`
      width: 120px;
      font-size: 1.2rem;
      padding: 10px;
    `}

  &:hover {
    background-color: ${({ bgColor, theme }) => {
      return bgColor ? lighten(0.05, bgColor) : lighten(0.1, theme.colors.main);
    }};
  }

  &:active {
    background-color: ${({ bgColor, theme }) => {
      return bgColor ? darken(0.05, bgColor) : darken(0.1, theme.colors.main);
    }};
  }
`;

const BigButton = styled(StyledButton)`
  width: 200px;
  padding: 20px;
`;
export default Button;
