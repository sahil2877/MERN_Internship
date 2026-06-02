const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const bookRoutes = require("./routes/bookRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Book Library API Running");
});

app.use("/books", bookRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
});