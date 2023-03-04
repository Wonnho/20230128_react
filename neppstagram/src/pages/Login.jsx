import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../api/auth";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import useInputs from "../hooks/useInputs";

function Login() {
  const token = localStorage.getItem("token");

  const [inputs, handleInputs] = useInputs({
    name: "",
    password: "",
  });

  const navigate = useNavigate();

  //console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { token } = await login(inputs);
    if (token) {
      navigate("/");
    }
  };

  
  if(token) return <navigate to="/" />;

  // if (token) {
  //   navigate("/");
  // }

 

  return (
    <Container>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            type="text"
            placeholder="이메일을 입력하세요"
            name="email"
            onChange={handleInputs}
          />

          <Input
            type="password"
            placeholder="패스워드를 입력해주세요."
            name="password"
            onChange={handleInputs}
          />
        </InputWrapper>
        <BtnWrapper>
          <Button>로그인</Button>
          <Button bgColor="black" onClick={() => navigate("/auth/signup")}>
            회원가입
          </Button>
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
export default Login;
