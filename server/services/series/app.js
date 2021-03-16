const express = require('express')
const app = express()
const { connect } = require('./config/mongodb.js')
const routes = require('./routes')
const errorHandling = require('./helpers/errorHandling.js')
const PORT = process.env.PORT || 4002

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/tv', routes)

app.use(errorHandling)

connect()
  .then(() => {
    console.log('Connected to mongodb successfully')
    app.listen(PORT, () => console.log('Server is running on port', PORT))
  })
  .catch(err => {
    console.log(err)
  })