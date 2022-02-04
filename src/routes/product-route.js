const express = require('express')
const router = express.Router()
const controller = require('../controllers/product-controller')

router.post('/', controller.create)
router.put('/:id', controller.update)
router.delete('/', controller.remove)

module.exports = router