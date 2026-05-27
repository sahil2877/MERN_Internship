import { Link } from 'react-router-dom'
import { formatPrice } from '../data/products'

export default function ProductCard({ item }) {
  return (
    <Link
      to={`/product/${encodeURIComponent(item.slug)}/${item.price}`}
      className='product-link'
    >
      <div className='card'>
        <img
          src={item.image}
          alt={item.name}
        />

        <span className='category-chip'>{item.category}</span>

        <h3>{item.name}</h3>

        <p>
          {formatPrice(item.price)}
        </p>
      </div>
    </Link>
  )
}
