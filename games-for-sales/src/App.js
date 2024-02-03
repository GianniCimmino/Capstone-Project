import React from "react";
import "./App.css";
import MyNavbar from "./pages/Navbar/MyNavbar.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Showcase from "./pages/showcase/Showcase.jsx";
import NotFound from "./pages/notfound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route
          element={<Navigate to="/showcase" />}
          errorElement={<NotFound />}
        />
        <Route path="/" element={<Showcase />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
