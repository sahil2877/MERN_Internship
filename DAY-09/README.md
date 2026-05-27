# Smart Product Explorer with Dynamic Coupon Routing

A React + Vite project that displays premium products and applies coupon discounts through dynamic URL routing.

## Features

- Shows high-price premium products
- Search products by name or category
- Opens product details on click
- Sends product name and price in the URL
- Applies coupon code from the URL route
- Shows valid coupon discount and final price
- Shows proper result for invalid or unavailable coupons
- Responsive product grid and product detail layout

## Tech Stack

- React
- React Router DOM
- Vite
- CSS

## Dynamic Routes

Product detail route:

```txt
/product/:productName/:price
```

Coupon route:

```txt
/product/:productName/:price/:couponCode
```

Example:

```txt
/product/Apple-MacBook-Pro-16-M3-Max/349999/LUXURY20
```

## Available Coupons

| Coupon Code | Discount | Minimum Price |
| --- | --- | --- |
| PREMIUM10 | 10% off | Rs. 1,00,000 |
| LUXURY20 | 20% off | Rs. 2,50,000 |
| MEGA50000 | Flat Rs. 50,000 off | Rs. 3,00,000 |
| TECH25 | 25% off | Rs. 1,50,000 |

## Project Structure

```txt
src
├── components
│   ├── Loader.jsx
│   ├── Navbar.jsx
│   └── ProductCard.jsx
├── data
│   └── products.js
├── pages
│   ├── Home.jsx
│   └── ProductDetails.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Installation

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

Open in browser:

```txt
http://localhost:5173
```

## Build

Create production build:

```bash
npm run build
```

## Lint

Run lint check:

```bash
npm run lint
```

## How It Works

1. Home page displays products from `src/data/products.js`.
2. Each product card redirects to a URL containing product name and price.
3. Product details page reads `productName`, `price`, and optional `couponCode` from route params.
4. If coupon is valid and available for that product, discount is calculated.
5. If coupon is invalid or unavailable, an error message is shown.

## Example Flow

1. Click a product:

```txt
/product/Apple-MacBook-Pro-16-M3-Max/349999
```

2. Apply valid coupon:

```txt
/product/Apple-MacBook-Pro-16-M3-Max/349999/LUXURY20
```

3. Apply invalid coupon:

```txt
/product/Apple-MacBook-Pro-16-M3-Max/349999/INVALID50
```

## Author

Created for MERN Internship Day 09 task.
