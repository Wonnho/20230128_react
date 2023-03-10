import { useEffect } from "react";
import styled from "styled-components";
import { getCurrentUser, patchProfile } from "../api/auth";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/user";

function Profile() {
  const { user, isLoading } = useSelector((state) => state.user);

  console.log(user);
  const dispatch = useDispatch();

  if (isLoading) return <div>불러오는 중.....</div>;

  const handleProfile = async (e) => {
    const data = await patchProfile(e.target.files[0]);
    dispatch(fetchUser(data));
  };
  return (
    <Container>
      <ImgBox htmlFor="profile">
        <img src={user.profile_url} alt="" />
      </ImgBox>
      <input
        type="file"
        accept="image/*"
        id="profile"
        style={{ display: "none" }}
        onChange={handleProfile}
      />
      <UserName>{user.name}</UserName>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1;
`;

const ImgBox = styled.label`
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;

  width: 200px;
  height: 200px;
  border: 2px solid #eee;
  border-radius: 50%;
  cursor: pointer;
`;

const UserName = styled.h3``;

export default Profile;
