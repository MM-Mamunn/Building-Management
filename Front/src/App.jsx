import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./pages/home/home";
import Flatcard from "./pages/home/Flatcard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path={`flat/one/:id`} element={<Flatcard/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
