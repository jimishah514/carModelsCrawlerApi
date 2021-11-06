const express = require('express')
const router = express.Router()
const controller = require('../controllers')
router.get('/carModels',controller.carModels)
module.exports = router;
