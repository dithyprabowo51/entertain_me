const router = require('express').Router()
const TvController = require('../controllers/TvController.js')
const checkId = require('../middlewares/checkId.js')

router.get('/', TvController.getTv)
router.get('/:id', checkId, TvController.getTvById)
router.post('/', TvController.addTv)
router.put('/:id', checkId, TvController.updateTv)
router.delete('/:id', checkId, TvController.deleteTv)

module.exports = router