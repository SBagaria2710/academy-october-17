import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import About from "./components/about";
// import Contact from "./components/contact";
// import Home from "./components/home";

const App = () => {
  const [Home, setHome] = useState(null);
  const [About, setAbout] = useState(null);
  const [Contact, setContact] = useState(null);

  const loadHomePage = () => {
    import("./components/Home").then((module) => setHome(() => module.default));
  };

  const loadAboutPage = () => {
    import("./components/About").then((module) =>
      setAbout(() => module.default)
    );
  };

  const loadContactPage = () => {
    import("./components/Contact").then((module) =>
      setContact(() => module.default)
    );
  };

  useEffect(() => {
    // Preload HomePage Component
    loadHomePage();
  }, []);

  return (
    <BrowserRouter>
      <div>
        {/* <Navbar /> */}
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={loadHomePage}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={loadAboutPage}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={loadContactPage}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={Home ? <Home /> : "Loading..."} />
          <Route path="/about" element={About ? <About /> : "Loading..."} />
          <Route
            path="/contact"
            element={Contact ? <Contact /> : "Loading..."}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
