const router = require('express').Router()
const movieRoutes = require('./movieRoutes.js')
const tvRoutes = require('./tvRoutes.js')

router.use('/movies', movieRoutes)
router.use('/tv', tvRoutes)

module.exports = router