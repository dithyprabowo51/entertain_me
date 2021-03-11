const router = require('express').Router()
const MovieController = require('../controllers/MovieController.js')
const checkId = require('../middlewares/checkId.js')

router.get('/', MovieController.getMovies)
router.get('/:id', checkId, MovieController.getMovie)
router.post('/', MovieController.addMovie)
router.put('/:id', checkId, MovieController.updateMovie)
router.delete('/:id', checkId, MovieController.deleteMovie)

module.exports = router