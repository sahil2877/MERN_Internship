# 🛒 Shopping Cart App Using React Context API

A simple Shopping Cart application built using React Context API and the `useContext` Hook. This project demonstrates how to manage global state and avoid prop drilling in React applications.

---

## 🚀 Features

* Display products
* Add products to cart
* Global cart state management
* Live cart item counter
* Display cart items
* Reusable React components
* Context API implementation
* useContext Hook implementation

---

## 🛠️ Technologies Used

* React JS
* Context API
* useContext Hook
* JavaScript
* CSS

---

## 📂 Project Structure

```text
src
│
├── components
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── Cart.jsx
│
├── context
│   └── CartContext.jsx
│
├── App.jsx
└── main.jsx
```

---

## 📖 How It Works

1. Cart state is stored inside Context.
2. The entire application is wrapped with `CartProvider`.
3. Components access cart data using `useContext`.
4. Products can be added to the cart.
5. Navbar updates automatically with cart count.
6. Cart component displays all added items.

---

## 💻 Example Code

```jsx
const { cart, addToCart } = useContext(CartContext);
```

---

## 🎯 Learning Outcomes

* Understanding React Context API
* Understanding useContext Hook
* Global state management
* Avoiding prop drilling
* Sharing state across components
* Building reusable React components

---

## 🔗 Installation

```bash
npm install
npm run dev
```

---

## 📸 Screenshots

Add screenshots inside the screenshots folder and update paths accordingly.

---

## 👨‍💻 Author

Sahil Belim
