import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard() {
  const { addToCart } = useContext(CartContext);

  const product = {
    id: 1,
    name: "Laptop",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.name}</h2>

      <button onClick={() => addToCart(product)}>
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;