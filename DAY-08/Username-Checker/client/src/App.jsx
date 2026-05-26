import { useState } from "react"
import axios from "axios"
import "./App.css"

function App()
{
    const [username,setUsername] =
    useState("")

    const [data,setData] =
    useState(null)

    const [loading,setLoading] =
    useState(false)

async function checkUser()
{
    setLoading(true)

    console.log(
        "Client : Sending request to server..."
    )

    try
    {
        const response =
        await axios.post(
        "http://localhost:5000/api/username",
        {
            username:username
        })

        console.log(
            "Client : Response received"
        )

        console.log(
            response.data
        )

        setData(
            response.data
        )
    }

    catch(error)
    {
        console.log(
            "Client : Error"
        )

        console.log(error)
    }

    setLoading(false)
}

    return(

        <div className="container">

            <h1>
                Username Availability Checker
            </h1>

            <p>
                React Client ↔ Express Server
            </p>

            <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e)=>
            setUsername(e.target.value)}
            />

            <button
            onClick={checkUser}
            >
                Check Username
            </button>

            {
                loading &&
                <h3>Checking...</h3>
            }

            {
                data &&

                <div className="card">

                    <h2>
                    {data.message}
                    </h2>

                    <p>
                    Username :
                    {username}
                    </p>

                    <p>
                    Available :
                    {data.available
                    ? " Yes"
                    : " No"}
                    </p>

                </div>
            }

        </div>

    )
}

export default App  