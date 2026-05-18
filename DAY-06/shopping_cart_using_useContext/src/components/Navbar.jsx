import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <div style={{ padding: "20px", background: "black", color: "white" }}>
      <h2>Cart Items: {cart.length}</h2>
    </div>
  );
}

export default Navbar;