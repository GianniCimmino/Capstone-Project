import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MyNavbar from "./pages/Navbar/MyNavbar.jsx";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Showcase from "./pages/showcase/Showcase.jsx";
import NotFound from "./pages/notfound/NotFound";
import ProductDetail from "./pages/ProductDetails/ProductDetail.jsx";
import MyFooter from "./pages/Footer/MyFooter.jsx";
import AllConsole from "./pages/AllConsole/AllConsole.jsx";
import AllGame from "./pages/AllGames/AllGame.jsx";
import { TokenProvider } from "./configurations/tokenContext.js";

function App() {
  return (
    <BrowserRouter>
      <TokenProvider>
        {/* <MyNavbar /> */}
        <Routes>
          <Route
            path=""
            element={<Navigate to="/showcase" />}
            errorElement={<NotFound />}
          />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/console" element={<AllConsole />} />
          <Route path="/games" element={<AllGame />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <MyFooter />
      </TokenProvider>
    </BrowserRouter>
  );
}

export default App;
