import styled from "styled-components";
import Button from "../components/common/Button";
function SignUp() {
  return (
    <Container>
      <h2>SignUp</h2>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <BtnWrapper>
        <Button>회원가입</Button>
        <Button bgColor="red">취소</Button>
      </BtnWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  padding: 50px 0;
  background-color: #fff;
`;

const BtnWrapper = styled.div`
  button + button {
    margin-top: 4px;
  }
`;
export default SignUp;
