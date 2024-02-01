import "./App.css";
import MyNavbar from "./Components/Navbar/MyNavbar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamesForSales from "./pages/GamesForSales.jsx";
import ShopCategory from "./pages/ShopCategory.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import LoginSignup from "./pages/LoginSignup.jsx";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<GamesForSales />} />
        <Route path="/console" element={<ShopCategory category="console" />} />
        <Route path="/games" element={<ShopCategory category="games" />} />
        <Route
          path="/accessories"
          element={<ShopCategory category="accessories" />}
        />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
