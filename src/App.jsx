import { Outlet, Link, HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./scss/global.scss";
import { useState } from "react";
import Landing from "./views/landing/Landing";
import Projects from "./views/landing/Projects";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
