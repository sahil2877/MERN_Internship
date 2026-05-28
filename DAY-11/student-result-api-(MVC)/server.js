const express = require("express")

const app = express()

const resultRoutes = require("./routes/resultRoutes")

app.use("/", resultRoutes)

app.listen(5000, () => {
    console.log("Server running on port 5000")
})