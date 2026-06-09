import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeItem } =
    useContext(CartContext);

    const grandTotal = cart.reduce((total,item)=>{
    return total + (item.price * item.quantity)
},0)

  return (
    <div className="cart-page">
      <h1>Cart</h1>

      {cart.map((item) => (
        <div className="cart-card" key={item.id}>
          <img src={item.thumbnail} alt={item.title} />

          <div>
            <h3>{item.title}</h3>

            <p>Price: ₹{item.price}</p>

            <div className="qty-box">
              <button onClick={() => decreaseQuantity(item.id)}>-</button>

              <span>{item.quantity}</span>

              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>

            <p>Total: ₹{item.price * item.quantity}</p>
            {
 item.quantity >= 5 &&
 (
   <span className="bulk-badge">
     Bulk Order
   </span>
 )
}
            <button className="remove-btn" onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
     {
 cart.length === 0 &&
 (
   <div className="empty-cart">
     <h2>Your Cart is Empty</h2>
   </div>
 )
}
<h2>
  Grand Total : ₹ {grandTotal.toFixed(2)}
</h2>

     {
  cart.length > 0 &&

  <Link to="/checkout">
    <button className="checkout-btn">
      Proceed To Checkout
    </button>
  </Link>
}
    </div>
  );
}
