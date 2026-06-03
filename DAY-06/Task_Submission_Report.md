# 📑 Day 6 Task Submission Report

**MERN Stack Internship | Prelytix Private Limited**

| Field             | Details                                               |
| :---------------- | :---------------------------------------------------- |
| **Student Name**  | Sahil Belim                                           |
| **Internship ID** | ND                                                    |
| **Date**          | 2026-05-18                                            |
| **Course Day**    | Day 6                                                 |
| **GitHub Repo**   |https://github.com/sahil2877/MERN_Internship |

---

# 🎯 Daily Objective

> Learn and implement React Context API and the `useContext` hook by building a Shopping Cart application to manage global state without prop drilling.

---

# 🛠️ Implementation & Changes (Self-Documentation)

## 1. New Features / Logic Implemented

* **What:** Built a Shopping Cart Application using React Context API and `useContext` Hook.

* **How:**

  * Created a global cart context using `createContext()`.
  * Created a `CartProvider` component.
  * Wrapped the entire application inside `CartProvider`.
  * Used `useState` to manage cart items globally.
  * Used `useContext` inside multiple components.
  * Implemented Add to Cart functionality.
  * Displayed cart item count in Navbar.
  * Displayed all added products inside Cart component.
  * Shared cart state across components without props.

* **Why:**

  * To understand React global state management.
  * To learn how Context API solves prop drilling problems.
  * To practice sharing data between unrelated components.

---

## 2. UI/UX Enhancements

* Added clean shopping cart layout.
* Added Navbar with live cart count.
* Added product card section.
* Added Add to Cart button.
* Added dynamic cart updates.
* Added reusable component structure.

---

## 3. Database / Backend Updates

* No backend or database integration was required for Day 6 tasks.

---

# 💻 Code Snippet: My Primary Contribution

```jsx
const { cart, addToCart } = useContext(CartContext);
```

This hook was used to access globally shared cart data and cart functions inside different components without passing props manually.

---

# 📸 Screenshots / Proof of Work

## Home Page

![Home Page](./screenshots/homePage.png)

---

## Product Section

![Products](./screenshots/products.png)

---

## Add To Cart Functionality

![Add To Cart](./screenshots/addToCart.png)

---

## Cart Items Display

![Cart](./screenshots/cart.png)

---

## Navbar Cart Counter

![Navbar Counter](./screenshots/navbarCounter.png)

---

# 🛑 Challenges Faced & Solutions

## Problem

* Cart data needed to be accessed by multiple components.

## Solution

* Created a global Cart Context and wrapped the application inside `CartProvider`.

---

## Problem

* Cart count and cart items were not updating everywhere automatically.

## Solution

* Used shared Context state so all components re-render whenever cart state changes.

---

# 💡 Key Learnings

* Learned React Context API.
* Learned `createContext()` usage.
* Learned `useContext` hook.
* Learned Provider pattern.
* Learned global state management.
* Learned how to avoid prop drilling.
* Learned state sharing between components.
* Learned shopping cart state management.

---

# 🔗 Live Preview

* Deployment not done yet.

---

**Signature:**
Sahil Belim
