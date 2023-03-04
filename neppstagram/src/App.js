//import Header from "./components/common/Header";
import { Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Edit from "./pages/Edit";
import Profile from "./pages/Profile";
import MainSection from "./components/common/MainSection";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Post from "./pages/Post";
function App() {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/" element={<MainSection />}>
          <Route path="" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="edit" element={<Edit />} />
          <Route path="profile" element={<Profile />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
