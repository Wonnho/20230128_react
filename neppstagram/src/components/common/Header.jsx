import styled from "styled-components";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineEdit,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Container = styled.header`
  border-bottom: 1px solid #bbb;
  border-bottom: 1px solid #f2f2f2;
  background-color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 900px;
  margin: 0 auto;
  justify-content: space-between;
`;
const Logo = styled.nav``;

const Gnb = styled.ul`
  ul {
    display: flex;
    gap: 20px;
  }
`;

//const input = styled.h1``;

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo> Neppstrgram</Logo>
        <input type="text" />
        <Gnb>
          <ul>
            <li>
              <Link to="/">
                <AiOutlineHome size={24} />
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <AiOutlineUser size={24} />
              </Link>
            </li>
            <li>
              <Link to="/edit">
                <AiOutlineEdit size={24} />
              </Link>
            </li>
            <li>
              <Link to="/search">
                <AiOutlineSearch size={24} />
              </Link>
            </li>
          </ul>
        </Gnb>
      </Wrapper>
    </Container>
  );
};

export default Header;
