import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <ProductCard />
      <Cart />
    </CartProvider>
  );
}

export default App;