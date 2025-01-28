import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  About,
  FourOFour,
  Home,
  Listing,
  ListItem,
  UserProfile,
} from "./poc/Routing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/listing/" element={<Navigate to="/about" />} />
        <Route path="/listing/:productId" element={<ListItem />} />
        <Route path="/user/:userId/:location" element={<UserProfile />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
