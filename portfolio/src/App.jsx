import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import SplashScreen from "./components/SplashScreen";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import "./App.css";
import MatrixRain from "./components/MatrixRain";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    console.log("App re-rendered. Loading:", loading);
  }, [loading]);

  return loading ? (
    <SplashScreen onFinish={() => setLoading(false)} />
  ) : (
    <Router>
      <div className="app-wrapper">
        <MatrixRain /> {/* Background effect */}
        <Navbar toggleSkills={() => setShowSkills(!showSkills)} />
        {showSkills && <Skills />}
        <div className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
