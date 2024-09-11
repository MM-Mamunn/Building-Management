import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./pages/home/home";
import Flatcard from "./pages/home/Flatcard";
import Flatbook from "./pages/home/Flatbook";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path={`flat/one/:id`} element={<Flatcard/>} />
          <Route path={`flat/book/:id`} element={<Flatbook/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
