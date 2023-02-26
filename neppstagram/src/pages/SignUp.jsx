import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signUp } from "../api/auth";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import useInputs from "../hooks/useInputs";

function SignUp() {
  const [inputs, handleInputs] = useInputs({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success } = await signUp(inputs);
    if (success) {
      alert("succeeded signUp");
      navigate("/auth/login");
    }
  };

  return (
    <Container>
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            type="text"
            placeholder="이름을 입력하세요"
            name="name"
            onChange={handleInputs}
          />
          <Input
            type="email"
            placeholder="email"
            name="email"
            onChange={handleInputs}
          />
          <Input
            type="password"
            placeholder="패스워드를 입력해주세요."
            name="password"
            onChange={handleInputs}
            //autoComplete={"false"}
          />
        </InputWrapper>
        <BtnWrapper>
          <Button>회원가입</Button>
          <Button bgColor="red" type="button" onClick={()=>navigate("/auth/login")}>취소</Button>
        </BtnWrapper>
      </form>
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
