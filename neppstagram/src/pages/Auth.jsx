import { Outlet } from "react-router-dom";
import styled from "styled-components";

function Auth() {
  return (
    <Container>
      <Outlet />
      {/* 거의 children과 비슷한 개념 */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;
export default Auth;
