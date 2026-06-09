
import React, { lazy, Suspense } from "react";

const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/product/:id" element={<ProductDetails />} />

      <Route
        path="/cart"
        element={
          <Suspense fallback={<h2>Loading...</h2>}>
            <Cart />
          </Suspense>
        }
      />

     <Route
 path='/checkout'
 element={
   <Suspense fallback={<h2>Loading...</h2>}>
      <Checkout />
   </Suspense>
 }
/>
    </Routes>
  );
}
