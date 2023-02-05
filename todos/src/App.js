import "./App.css"; //webpack이라는 도구가 css,이미지 파일 등 정적파일을 로딩할 수 있게 도와준다.

//import styles from "./style.module.css";
//id,class의 중복을 방지해 준다. css in css

import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

import { createGlobalStyle } from "styled-components";

import styled from "styled-components";

import Flex from "./Flex";
const GlobalStyled = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

a {
  text-decoration:none;
  color:inherit;
}

li{
  list-style: none;
}
`;
function App() {
  return (
    <div>
      <Container>
        <GlobalStyled />
        {/* <TodoHeader />
        <TodoList />
        <TodoCreate /> */}
        <Flex />
      </Container>
    </div>
  );
}

const Container = styled.div`
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.border};
`;

export default App;
