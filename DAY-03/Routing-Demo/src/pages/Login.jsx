import { useNavigate } from "react-router-dom"

function Login({ setIsLogin }) {

  const navigate = useNavigate()

  function handleLogin() {

    setIsLogin(true)

    navigate("/dashboard")
  }

  return (

    <div className="page">

      <div className="login-box">

        <h1>Login</h1>

        <input type="text" placeholder="Enter name" />

        <input type="password" placeholder="Enter password" />

        <button onClick={handleLogin}>
          Login
        </button>

      </div>

    </div>
  )
}

export default Login