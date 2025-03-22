import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import SplashScreen from "./components/SplashScreen";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("App re-rendered. Loading:", loading);
  }, [loading]);

  return loading ? (
    <SplashScreen onFinish={() => setLoading(false)} />
  ) : (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
