import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Posts" element={<Posts />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="*" element={<>404</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
