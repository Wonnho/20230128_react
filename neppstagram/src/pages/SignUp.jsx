import styled from "styled-components";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import useInputs from "../hooks/useInputs";
function SignUp() {

  const initialState = {
    users: [
      {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com',
        active: true
      },
      {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        active: false
      },
      {
        id: 3,
        username: 'liz',
        email: 'liz@example.com',
        active: false
      }
    ]
  };

  const {update,setUpdate}=useInputs(initialState);
  return (
    <Container>
      <h2>SignUp</h2>
      <InputWrapper>
        <Input type="text" placeholder="이름을 입력하세요" 
        onChange={setUpdate}
        />
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="passowrd" />
      </InputWrapper>
      <BtnWrapper>
        <Button>회원가입</Button>
        <Button bgColor="red">취소</Button>
      </BtnWrapper>
    </Container>
  );
}

const InputWrapper = styled.div`
  margin: 30px 0 20px;
  input + input {
    margin-top: 4px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  padding: 50px 0;
  background-color: #fff;
  text-align: center;
`;

const BtnWrapper = styled.div`
  button + button {
    margin-top: 4px;
  }
`;
export default SignUp;
