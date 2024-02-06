let jsonData = require("../data.json")

const getAllRegions = async (req, res) => {
    try {
        if (!jsonData) {
            res.status(200).json({msg: "No region available"})
        } else {
            res.status(200).json(jsonData);
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    getAllRegions
}
