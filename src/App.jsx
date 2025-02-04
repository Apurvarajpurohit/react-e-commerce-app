
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthProvider from "./context/AuthContext";
import CartProvider from "./context/CartContext";
import { Container } from "@mui/material";
import ProductDetail from "./components/ProductDetails";
import CartPage from "./components/CartPage";

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element ={<CartPage/>} />

            </Routes>
          </Container>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
