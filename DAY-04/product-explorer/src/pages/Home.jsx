import React from 'react'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import Loader from '../components/Loader'
import ProductDetails from '../pages/ProductDetails'

import { useEffect, useState } from 'react'

export default function Home() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  const url = 'https://dummyjson.com/products'

  useEffect(() => {
    

  fetch(url)

    .then(response => response.json())

    .then(data => {

        console.log(data.products)

      setProducts(data.products)

      setLoading(false)

    })

    .catch(error => {
      console.log(error)

      setLoading(false)
    })

}, [])

const filteredProducts = products.filter((item) => {

  return item.title
    .toLowerCase()
    .includes(search.toLowerCase())

})

 return (
  <div>

    <Navbar
  search={search}
  setSearch={setSearch}
/>


    <h1 className='title'>
      Product Explorer
    </h1>

   {
  loading ?

  <Loader />

  :

 <div className='products'>

  {
    filteredProducts.length > 0 ?

    filteredProducts.map((item) => (

      <ProductCard
        key={item.id}
        item={item}
      />

    ))

    :

    <h2>No Products Found</h2>
  }

</div>
}

  </div>
)
}