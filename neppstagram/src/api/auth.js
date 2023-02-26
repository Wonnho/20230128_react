import axios from "axios";
export const authAxios = axios.create({
  baseURL: "http://101.101.218.43/users",
});

//로컬스토리지에 토큰이 저장되어 있다면 헤더에 저장
const token = localStorage.getItem("token");

if (token) {
  authAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const signUp = async (form) => {
  try {
    const { data } = await authAxios.post("", form);

    return data;
  } catch (e) {
    console.log(e);
    alert("입력양식을 확인해 주세요");
  }
};

export const login = async (form) => {
  try {
    //로그인 성공시 헤더에 토큰값 저장
    const { data } = await authAxios.post("/signin", form);
    authAxios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
    localStorage.setItem("token", data.token);

    return data;
  } catch (e) {
    console.log(e);
    alert("이메일 또는 비밀번호를 확인해 주세요");
  }
};

export const getCurrentUser = async () => {
  try {
    const { data } = await authAxios.get("/current");
    // ,{
    //             headers:{
    //                 Authorization:
    //               "Bearer" + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    //             },
    //         });

    console.log(data);
  } catch (e) {}
};
