import "./App.css";

import Header from "./components/common/Header.jsx";
import Movie from "./components/pages/Movie";
import People from "./components/pages/People";
import TV from "./components/pages/TV";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
function App() {
  return (
    <div className="App">
      <Header />
      <MainSection>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="movie" element={<Movie />} />

        <Route path="tv" element={<TV/>} />
        <Route path="people" element={<People />} />
      </Routes>
      </MainSection>
    </div>
  );
}

const MainSection=styled.div`
max-width:900px;
margin: 0 auto`;

export default App;
