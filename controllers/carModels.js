const data = require('../data.service')
exports.carModels = async (req,res) => {
    res.send(data.carModels)
}