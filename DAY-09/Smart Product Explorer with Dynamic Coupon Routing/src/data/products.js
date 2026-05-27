export const coupons = {
  PREMIUM10: {
    label: 'Premium 10% off',
    type: 'percentage',
    value: 10,
    minPrice: 100000,
  },
  LUXURY20: {
    label: 'Luxury 20% off',
    type: 'percentage',
    value: 20,
    minPrice: 250000,
  },
  MEGA50000: {
    label: 'Flat 50000 off',
    type: 'flat',
    value: 50000,
    minPrice: 300000,
  },
  TECH25: {
    label: 'Tech 25% off',
    type: 'percentage',
    value: 25,
    minPrice: 150000,
  },
}

export const products = [
  {
    id: 1,
    name: 'Apple MacBook Pro 16 M3 Max',
    slug: 'Apple-MacBook-Pro-16-M3-Max',
    price: 349999,
    category: 'Laptop',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80',
    description:
      'High-performance laptop for developers, creators, and professional workflows.',
    coupons: ['LUXURY20', 'MEGA50000', 'PREMIUM10'],
  },
  {
    id: 2,
    name: 'Sony Bravia 85 Inch 8K OLED TV',
    slug: 'Sony-Bravia-85-Inch-8K-OLED-TV',
    price: 499999,
    category: 'Television',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80',
    description:
      'Cinema-grade 8K OLED display with deep contrast and premium sound tuning.',
    coupons: ['LUXURY20', 'MEGA50000'],
  },
  {
    id: 3,
    name: 'Nikon Z9 Professional Camera Kit',
    slug: 'Nikon-Z9-Professional-Camera-Kit',
    price: 589999,
    category: 'Camera',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80',
    description:
      'Flagship mirrorless camera bundle built for studio, wildlife, and commercial shoots.',
    coupons: ['TECH25', 'MEGA50000', 'PREMIUM10'],
  },
  {
    id: 4,
    name: 'Samsung Galaxy Z Fold Ultra',
    slug: 'Samsung-Galaxy-Z-Fold-Ultra',
    price: 189999,
    category: 'Smartphone',
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    description:
      'Foldable flagship phone with a productivity-ready display and pro camera system.',
    coupons: ['TECH25', 'PREMIUM10'],
  },
  {
    id: 5,
    name: 'DJI Inspire 3 Cinema Drone Combo',
    slug: 'DJI-Inspire-3-Cinema-Drone-Combo',
    price: 1349999,
    category: 'Drone',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=900&q=80',
    description:
      'Professional aerial cinema drone package for high-end film production.',
    coupons: ['LUXURY20', 'MEGA50000'],
  },
  {
    id: 6,
    name: 'Rolex Submariner Date Watch',
    slug: 'Rolex-Submariner-Date-Watch',
    price: 1299999,
    category: 'Watch',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80',
    description:
      'Luxury automatic watch with a timeless steel build and iconic dive-watch profile.',
    coupons: ['LUXURY20'],
  },
]

export function formatPrice(price) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(Number(price) || 0)
}

export function findProductFromRoute(productName, price) {
  const decodedName = decodeURIComponent(productName || '').toLowerCase()

  return products.find((product) => {
    return (
      product.slug.toLowerCase() === decodedName &&
      String(product.price) === String(price)
    )
  })
}

export function getCouponResult(product, couponCode) {
  const code = (couponCode || '').trim().toUpperCase()

  if (!code || !product) {
    return null
  }

  const coupon = coupons[code]

  if (!coupon) {
    return {
      status: 'invalid',
      code,
      message: `${code} is invalid. No discount applied.`,
    }
  }

  if (!product.coupons.includes(code)) {
    return {
      status: 'unavailable',
      code,
      message: `${code} is not available for ${product.name}.`,
    }
  }

  if (product.price < coupon.minPrice) {
    return {
      status: 'not_eligible',
      code,
      message: `${code} needs minimum order value ${formatPrice(coupon.minPrice)}.`,
    }
  }

  const discount =
    coupon.type === 'percentage'
      ? Math.round((product.price * coupon.value) / 100)
      : coupon.value
  const finalPrice = Math.max(product.price - discount, 0)

  return {
    status: 'valid',
    code,
    coupon,
    discount,
    finalPrice,
    message: `${code} applied successfully.`,
  }
}
