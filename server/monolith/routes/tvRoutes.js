const router = require('express').Router()
const TvController = require('../controllers/TvController.js')

router.get('/', TvController.getTv)
router.get('/:id', TvController.getTvById)
router.post('/', TvController.addTv)
router.put('/:id', TvController.updateTv)
router.delete('/:id', TvController.deleteTv)

module.exports = router