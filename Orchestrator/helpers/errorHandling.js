const errorHandling = (err, req, res, next) => {
  res.status(500).json(err)
}

module.exports = errorHandling