import { Outlet } from "react-router-dom";

function Auth() {
  return (
    <div>
      <Outlet />
      {/* 거의 children과 비슷한 개념 */}
    </div>
  );
}

export default Auth;
