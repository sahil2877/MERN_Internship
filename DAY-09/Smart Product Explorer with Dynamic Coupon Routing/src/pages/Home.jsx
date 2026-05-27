import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

import { useState } from 'react'

export default function Home() {
  const [search, setSearch] = useState('')

  const filteredProducts = products.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <div>
      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <h1 className='title'>
        Smart Product Explorer
      </h1>

      <p className='subtitle'>
        Premium products with dynamic coupon routing
      </p>

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
    </div>
  )
}
