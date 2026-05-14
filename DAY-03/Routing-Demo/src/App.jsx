import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import About from "./pages/About"
import Courses from "./pages/Courses"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"


function App() {

  const [isLogin, setIsLogin] = useState(false)

  return (

    <div>

      <Navbar
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/courses" element={<Courses />} />

        <Route
          path="/login"
          element={
            isLogin
              ?
              <Navigate to="/dashboard" />
              :
              <Login setIsLogin={setIsLogin} />
          }
        />

        <Route
          path="/dashboard"
          element={
            isLogin
              ?
              <Dashboard />
              :
              <Navigate to="/login" />
          }
        />

      </Routes>

    </div>
  )
}

export default App