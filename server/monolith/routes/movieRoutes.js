const router = require('express').Router()
const MovieController = require('../controllers/MovieController.js')

router.get('/', MovieController.getMovies)
router.get('/:id', MovieController.getMovie)
router.post('/', MovieController.addMovie)
router.put('/:id', MovieController.updateMovie)
router.delete('/:id', MovieController.deleteMovie)


module.exports = router