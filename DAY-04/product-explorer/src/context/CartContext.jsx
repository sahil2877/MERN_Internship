import { createContext, useState } from "react";
import { useEffect } from "react";
export const CartContext = createContext();

export default function CartProvider({ children }) {

    const [cart,setCart] = useState(()=>{
    const savedCart =
      localStorage.getItem("cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];
})

    
    const addToCart = (product) => {

    const existingItem = cart.find(
        (item) => item.id === product.id
    );

    useEffect(()=>{

   localStorage.setItem(
      "cart",
      JSON.stringify(cart)
   )

},[cart])

    if (existingItem) {

        const updatedCart = cart.map((item) => {

            if (item.id === product.id) {

                if (item.quantity >= 10) {
                    alert("Maximum quantity is 10");
                    return item;
                }

                return {
                    ...item,
                    quantity: item.quantity + 1
                };
            }

            return item;
        });

        setCart(updatedCart);

    } else {

        setCart([
            ...cart,
            {
                ...product,
                quantity: 1
            }
        ]);

    }

};

const increaseQuantity = (id) => {

    const updatedCart = cart.map((item) => {

        if (item.id === id) {

            if (item.quantity >= 10) {
                alert("Maximum quantity is 10");
                return item;
            }

            return {
                ...item,
                quantity: item.quantity + 1
            };
        }

        return item;
    });

    setCart(updatedCart);
};
const decreaseQuantity = (id) => {

    const updatedCart = cart.map((item) => {

        if (item.id === id) {

            if (item.quantity <= 1) {
                return item;
            }

            return {
                ...item,
                quantity: item.quantity - 1
            };
        }

        return item;
    });

    setCart(updatedCart);
};
const removeItem = (id) => {

    const updatedCart = cart.filter(
        (item) => item.id !== id
    );

    setCart(updatedCart);
};

    return (
        <CartContext.Provider
          value={{
 cart,
 setCart,
 addToCart,
 increaseQuantity,
 decreaseQuantity,
 removeItem
}}
        >
            {children}
        </CartContext.Provider>
    );
}