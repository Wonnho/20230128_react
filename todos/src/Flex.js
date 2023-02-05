import styled from "styled-components";
function Flex() {
  return (
    <Container>
      <Item>Item</Item>
      <Item>Item</Item>
      <Item>Item</Item>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; //열에 대한 나열방법
  align-items: center; //default:stretch
  /* width: 500px; */
  flex-wrap: wrap; //공간이 부족할 대 아이텀의 줄바꿈 여부 지정
  height: 300px;
  border: 3px solid red;
`;

const Item = styled.div`
  /* width: 50px; */
  height: 100px;
  background: black;
  flex-basis: 100px; //아이템의 최소 너비이자 기준점
  color: #fff;

  border: 3px solid green;
  &:nth-child(1) {
    flex-grow: 1; //공간이 남았을 때 여백을 가져가는 비율
    flex-shrink: 0; //공간이 부족할 때 줄이는 비율
  }

  &:nth-child(2) {
    flex-grow: 2;
    flex: 1 1 0;
  }
`;
export default Flex;
