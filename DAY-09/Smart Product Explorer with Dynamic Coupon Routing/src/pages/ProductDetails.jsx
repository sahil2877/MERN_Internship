import { useNavigate, useParams, Link } from 'react-router-dom'

import {
  coupons,
  findProductFromRoute,
  formatPrice,
  getCouponResult,
} from '../data/products'

export default function ProductDetails() {
  const { productName, price, couponCode } = useParams()

  const navigate = useNavigate()

  const product = findProductFromRoute(productName, price)

  const productPath = product
    ? `/product/${encodeURIComponent(product.slug)}/${product.price}`
    : '/'

  const couponResult = getCouponResult(product, couponCode)

  function handleCouponSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const code = String(formData.get('couponCode') || '').trim().toUpperCase()

    if (!code) {
      navigate(productPath)
      return
    }

    navigate(`${productPath}/${encodeURIComponent(code)}`)
  }

  if (!product) {
    return (
      <div className='details-container'>
        <Link to='/'>
          <button className='back-btn'>
            Back
          </button>
        </Link>

        <div className='empty-state'>
          <h2>Product not found</h2>
          <p>Please select a product from the explorer.</p>
        </div>
      </div>
    )
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
          src={product.image}
          alt={product.name}
        />

        <div className='details-content'>
          <span className='category-chip'>{product.category}</span>

          <h1>{product.name}</h1>

          <p className='price'>
            {formatPrice(product.price)}
          </p>

          <p>
            {product.description}
          </p>

          <h4>
            Rating :
            {product.rating}
          </h4>

          <form
            className='coupon-form'
            onSubmit={handleCouponSubmit}
          >
            <input
              key={couponCode || 'coupon-input'}
              type='text'
              name='couponCode'
              placeholder='Enter coupon code'
              defaultValue={couponCode || ''}
            />

            <button type='submit'>
              Apply Coupon
            </button>
          </form>

          <div className='coupon-list'>
            {
              product.coupons.map((code) => (
                <button
                  key={code}
                  type='button'
                  onClick={() => navigate(`${productPath}/${code}`)}
                >
                  <strong>{code}</strong>
                  <span>{coupons[code].label}</span>
                </button>
              ))
            }
          </div>

          <div className={`coupon-result ${couponResult?.status || ''}`}>
            <h3>Coupon Result</h3>

            {
              !couponResult &&

              <p>No coupon applied yet.</p>
            }

            {
              couponResult?.status === 'valid' &&

              <div className='bill-box'>
                <p>{couponResult.message}</p>
                <div>
                  <span>Original Price</span>
                  <strong>{formatPrice(product.price)}</strong>
                </div>
                <div>
                  <span>Discount</span>
                  <strong>- {formatPrice(couponResult.discount)}</strong>
                </div>
                <div>
                  <span>Final Price</span>
                  <strong>{formatPrice(couponResult.finalPrice)}</strong>
                </div>
              </div>
            }

            {
              couponResult && couponResult.status !== 'valid' &&

              <p>{couponResult.message}</p>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
