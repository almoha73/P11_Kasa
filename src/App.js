import React from "react";
import {Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Error from "./pages/Error";
import useApi from "./Api/useApi";
import ExploreDetails from "./pages/logement/ExploreDetails";

// Ce fichier contient les routes du projet

const App = () => {
  const datas = useApi("../logements.json");
  const datasAbout = useApi("../about.json");
  return (
      <Routes>
        <Route path="/" element={<Home  data={ datas } />} />
        <Route path="/about" element={<About dataAbout={ datasAbout }/>} />
        <Route path="/logement/:title" element={<ExploreDetails data={ datas }/>} />
        <Route path="*" element={<Error />} />
      </Routes> 
  );
};

export default App;
