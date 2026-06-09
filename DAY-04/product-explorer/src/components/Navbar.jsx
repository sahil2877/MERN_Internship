import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function Navbar({ search, setSearch }) {
    const { cart } = useContext(CartContext);

  return (
    <div className='navbar'>

      <h2>Product Explorer</h2>

    <input
  type='text'
  placeholder='Search products...'

  value={search}

  onChange={(e) => setSearch(e.target.value)}
/>
<Link to="/cart" className="cart-link">

  <FaShoppingCart />

  <span className="cart-badge">
    {
      cart.reduce(
        (total,item)=>
        total + item.quantity,
        0
      )
    }
  </span>

</Link>

    </div>
  )
}