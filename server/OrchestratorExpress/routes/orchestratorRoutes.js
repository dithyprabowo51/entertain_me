const router = require('express').Router()
const OrchestratorController = require('../controllers/OrchestratorController.js')

router.get('/', OrchestratorController.findAll)

module.exports = router