import { useEffect } from "react";
import styled from "styled-components";
import { getCurrentUser } from "../api/auth";
import { useSelector } from "react-redux";

function Profile() {
  const {user,isLoading}=useSelector((state)=>state.user);

  console.log(user);
  // useEffect(()=>{
  //   getCurrentUser().then((res)=>console.log(res));
  // })
  
  if(isLoading) return<div>불러오는 중.....</div>
  return (
    <Container>
      <ImgBox></ImgBox>
      <UserName>{user.name}</UserName>
      Profile
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex:1;
`;

const ImgBox = styled.div`
  width: 200px;
  height: 200px;
  border: 2px solid #eee;
`;

const UserName = styled.h3``;

export default Profile;
