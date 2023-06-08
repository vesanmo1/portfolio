import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./scss/global.scss";

import ScrollToTop from "./components/scroll-to-top/Scroll-to-top";

import Landing from "./views/landing/Landing";
import ProjectCookie from "./views/Project-cookie";
import ProjectKamele from "./views/Project-kamele";
import ProjectAboutMe from "./views/Project-about-me";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Router>
        <ScrollToTop />
        <Route path="/" element={<Landing />} />
        <Route path="/Project-cookie" element={<ProjectCookie />} />
        <Route path="/Project-kamele" element={<ProjectKamele />} />
        <Route path="/Project-about-me" element={<ProjectAboutMe />} />
      </Router>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
