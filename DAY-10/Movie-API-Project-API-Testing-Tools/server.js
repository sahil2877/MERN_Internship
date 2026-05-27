const express = require("express")
const fs = require("fs")

const app = express()

app.use(express.json())

// JSON file read karna
let movies = JSON.parse(fs.readFileSync("movies.json"))

// GET API
app.get("/movies", (req, res) => {

   res.json(movies)

})

// POST API
app.post("/add-movie", (req, res) => {

   const newMovie = req.body

   movies.push(newMovie)

   // JSON file update karna
   fs.writeFileSync(
      "movies.json",
      JSON.stringify(movies, null, 3)
   )

   res.json({
      message: "Movie Added Successfully",
      movie: newMovie
   })

})

app.listen(5000, () => {
   console.log("Server Running On Port 5000")
})