const errorHandling = (err, req, res, next) => {
  switch (err) {
    case 400:
      res.status(400).json('Please filled field with correct value')
      break;
    case 404:
      res.status(404).json('Data not found')
      break;
    default:
      res.status(500).json(err)
      break;
  }
}

module.exports = errorHandling