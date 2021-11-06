const carModels = require('./carModels')
module.exports = (app) => {
    app.use('/api',carModels)
}