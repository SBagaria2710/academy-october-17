import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Counter from "./components/Counter";
import ImageCarousel from "./components/ImageCarousel";
import CustomHook from "./components/CustomHook";
// import FocusInput from "./components/FocusInput";
import Timer from "./components/PersistingValue";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/image-carousel" element={<ImageCarousel />} />
        <Route path="/custom-hook" element={<CustomHook />} />
        <Route path="/ref-example" element={<Timer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
