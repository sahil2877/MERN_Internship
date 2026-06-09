import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from "react-router-dom";

export default function Checkout() {

    const { cart } = useContext(CartContext)

    const totalAmount = cart.reduce((total, item) => {

        return total + (item.price * item.quantity)

    }, 0)

    const productDiscount = cart.reduce((discount, item) => {

        if (item.quantity >= 3) {

            const subtotal = item.price * item.quantity

            return discount + (subtotal * 0.10)
        }

        return discount

    }, 0)

    const cartDiscount =
        totalAmount > 5000
            ? (totalAmount - productDiscount) * 0.05
            : 0

    let cheapestItemDiscount = 0

    if (cart.length > 0) {

        const cheapestItem = cart.reduce((min, item) => {

            return item.price < min.price ? item : min

        })

        cheapestItemDiscount = cheapestItem.price * 0.50
    }

    const finalAmount =
        totalAmount
        - productDiscount
        - cartDiscount
        - cheapestItemDiscount

    return (

        <div className="checkout-page">

            <h1>Checkout Summary</h1>
            <Link to="/cart">
    <button className="back-btn">
        Back To Cart
    </button>
</Link>

            <div className="checkout-card">

                <h3>Total Amount</h3>
                <p>₹ {totalAmount.toFixed(2)}</p>

                <h3>Product Discount (10%)</h3>
                <p>- ₹ {productDiscount.toFixed(2)}</p>

                <h3>Cart Discount (5%)</h3>
                <p>- ₹ {cartDiscount.toFixed(2)}</p>

                <h3>Cheapest Item 50% Off</h3>
                <p>- ₹ {cheapestItemDiscount.toFixed(2)}</p>

                <hr />

                <h2>
                    Final Amount :
                    ₹ {finalAmount.toFixed(2)}
                </h2>

            </div>

        </div>

    )
}