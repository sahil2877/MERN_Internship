const express = require("express");

const app = express();

const movieRoutes = require("./routes/movieRoutes");

app.use("/api", movieRoutes);

app.get("/", (req, res) => {
    res.send("Movie API Server Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server Running On Port " + PORT);
});