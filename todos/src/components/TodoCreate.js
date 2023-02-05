import styled from "styled-components";

function TodoCreate() {
  return (
    <Container>
      <input type="text" />
      <button>등록</button>
    </Container>
  );
}

const Container = styled.input`
  padding: 10px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 5px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.border};
`;
export default TodoCreate;
