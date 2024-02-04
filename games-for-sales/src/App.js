import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MyNavbar from "./pages/Navbar/MyNavbar.jsx";
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
          path=""
          element={<Navigate to="/showcase" />}
          errorElement={<NotFound />}
        />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
