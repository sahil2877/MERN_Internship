import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ item }) {

 return (

  <Link to={`/product/${item.id}`}>

    <div className='card'>

      <img
        src={item.thumbnail}
        alt={item.title}
      />

      <h3>{item.title}</h3>

      <p>
        ₹ {item.price}
      </p>

    </div>

  </Link>

)
}