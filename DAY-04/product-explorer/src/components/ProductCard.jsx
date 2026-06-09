import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function ProductCard({ item }) {
  const { addToCart } = useContext(CartContext);

 return (

  <Link to={`/product/${item.id}`}>

    <div className='card'>

      <img
        src={item.thumbnail}
        alt={item.title}
      />

      <h3 className="product-title">
  {item.title}
</h3>

      <p>
        ₹ {item.price}
      </p>
      <p>
  Stock : {item.stock}
</p>
      {
 item.stock > 0 ?

 (
   <button
     className='cart-btn'
     onClick={(e)=>{
       e.preventDefault()
       addToCart(item)
     }}
   >
     Add To Cart
   </button>
 )

 :

 (
   <button
     className='out-stock'
     disabled
   >
     Out Of Stock
   </button>
 )
}
    </div>

  </Link>

)
}