const express = require("express")
require("dotenv").config();
const app = express();
const cors = require("cors")
const dataRoute = require("./route/data")

const PORT = process.env.PORT;

// Necessary middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/", dataRoute)

app.get("/", (req, res) => {
    res.send("Welcome to the API")
})
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})