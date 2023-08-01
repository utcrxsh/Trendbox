import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import Footer from "./components/footer";
import { Shop1, Shop2 } from "./pages/shop/shop";
import { Home } from "./pages/home/home";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (  
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/men" element={<Shop1 />} />
            <Route path="/women" element={<Shop2 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer/>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
