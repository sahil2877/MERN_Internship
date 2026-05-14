import { NavLink, useNavigate } from "react-router-dom"

function Navbar({ isLogin, setIsLogin }) {

  const navigate = useNavigate()

  function logoutUser() {

    setIsLogin(false)

    navigate("/")
  }

  return (

    <nav className="navbar">

      <h2>StudyHub</h2>

      <div className="links">

        <NavLink to="/">Home</NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink to="/courses">Courses</NavLink>

        {
          isLogin ?

            <>
              <NavLink to="/dashboard">Dashboard</NavLink>

              <button onClick={logoutUser}>
                Logout
              </button>
            </>

            :

            <NavLink to="/login">Login</NavLink>
        }

      </div>

    </nav>
  )
}

export default Navbar