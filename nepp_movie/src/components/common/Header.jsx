import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
padding: 10px 20px;
border-bottom: 1px solid #bbb;
`;

const Wrapper = styled.div`
  display: flex;
  //  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  flex: 1;
  margin: 0 auto;
`;
const Gnb = styled.nav`
  flex: 1;
  ul {
    display: flex;
    flex: 1;
    gap: 20px;
    margin-left: 30px;
  }
`;

const Logo = styled.h1``;

const navList = [
  { id: 1, text: "movie", url: "/movie" },

  { id: 2, text: "TV", url: "/tv" },

  { id: 3, text: "people", url: "/people" },
];

function Header() {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <Container>
      <Wrapper>
        <Logo><Link to="/">NeppMovie</Link></Logo>
        <Gnb>
          <ul>
            {navList.map((nav) => (
              <li  key={nav.id} style={{ fontWeight: pathname === nav.url && 700 }}>
                <Link to={nav.url}>{nav.text}</Link>
              </li>
            ))}
          </ul>
        </Gnb>
        <input type="text" value="아이언" id="mv" />
      </Wrapper>
    </Container>
  );
}

export default Header;
