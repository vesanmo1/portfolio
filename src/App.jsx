import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./scss/global.scss";

import Landing from "./views/landing/Landing";
import ProjectCookie from "./views/project-cookie/Project-cookie";
import ProjectKamele from "./views/project-kamele/Project-kamele";
import ProjectAboutMe from "./views/project-about-me/Project-about-me";

function ScrollToTopOnNavigation() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnNavigation />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Project-cookie" element={<ProjectCookie />} />
        <Route path="/Project-kamele" element={<ProjectKamele />} />
        <Route path="/Project-about-me" element={<ProjectAboutMe />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
