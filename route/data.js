const express = require("express");
const { getAllRegions } = require("../controllers/data")

const app = express.Router()

app.route("/region").get(getAllRegions)

module.exports = app;