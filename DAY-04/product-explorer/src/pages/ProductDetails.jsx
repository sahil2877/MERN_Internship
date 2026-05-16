import React from 'react'

import { useEffect, useState } from 'react'

import { useParams, Link } from 'react-router-dom'

export default function ProductDetails() {

  const { id } = useParams()

  const [product, setProduct] = useState(null)

  const [loading, setLoading] = useState(true)

  const url = `https://dummyjson.com/products/${id}`

  useEffect(() => {

    fetch(url)

      .then(response => response.json())

      .then(data => {

        setProduct(data)

        setLoading(false)

      })

      .catch(error => {

        console.log(error)

        setLoading(false)

      })

  }, [id])



  if(loading){

    return <h2 className='loading-text'>Loading...</h2>

  }



  return (

    <div className='details-container'>

      <Link to='/'>
        <button className='back-btn'>
          Back
        </button>
      </Link>


      <div className='details-card'>

        <img
          src={product.thumbnail}
          alt={product.title}
        />


        <div className='details-content'>

          <h1>{product.title}</h1>

          <p className='price'>
            ₹ {product.price}
          </p>

          <p>
            {product.description}
          </p>

          <h4>
            Category :
            {product.category}
          </h4>

          <h4>
            Rating :
            {product.rating}
          </h4>

        </div>

      </div>

    </div>

  )
}