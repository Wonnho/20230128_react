import styled from "styled-components";
function TodoHeader() {
  return (
    <div>
      <Container>
        <DateText> 2023년 2월 5일</DateText>
        <CountText>해야할 일:1/3</CountText>
      </Container>
    </div>
  );
}

const Container = styled.div`
  border-bottom: 2px solid;
  border-color: ${({ theme }) => theme.colors.border};
  padding: 10px;

  /* p {
    font-size: 1.4rem;
  } */
`;

const DateText = styled.p`
  font-size: 1.4rem;
`;

const CountText = styled.span`
  font-size: 0.8rem;
  color: #888;
`;
export default TodoHeader;
