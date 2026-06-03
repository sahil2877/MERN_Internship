const express = require("express");
const router = express.Router();

const movies = require("../data/movies");

router.get("/movies", (req, res) => {
    res.json(movies);
});

router.get("/movies/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const movie = movies.find(function(item) {
        return item.id === id;
    });

    if (!movie) {
        return res.status(404).json({
            message: "Movie not found"
        });
    }

    res.json(movie);
});

module.exports = router;