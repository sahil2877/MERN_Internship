const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

// dummy usernames
const users = ["sahil","rahul","admin","john"]

app.post("/api/username",(req,res)=>{

    console.log("-------------------")

    console.log(
        "Request received from Client"
    )

    const username =
    req.body.username

    console.log(
        "Username received :",
        username
    )

    const exists =
    users.includes(
        username.toLowerCase()
    )

    if(exists)
    {
        console.log(
            "Checking database..."
        )

        console.log(
            "Username exists"
        )

        res.json({
            available:false,
            message:"Username already exists"
        })
    }

    else
    {
        console.log(
            "Checking database..."
        )

        console.log(
            "Username available"
        )

        res.json({
            available:true,
            message:"Username available"
        })
    }

    console.log(
        "Response sent to Client"
    )

    console.log("-------------------")

})

app.listen(5000,()=>{

    console.log(
        "Server Running On Port 5000"
    )

})