import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

function MainSection() {
  return (
    <Container>
      <Header />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  background-color: #f2f2f2;
  min-height: 100vh;
`;
const OutletWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background-color: #fff;
  //  height: 100vh;
  flex: 1;
  width: 100%;
`;

export default MainSection;
