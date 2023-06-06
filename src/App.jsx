import { Outlet, Link, HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./scss/global.scss";
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
      <Footer />
    </HashRouter>
  );
}

export default App;
