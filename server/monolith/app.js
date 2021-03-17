const express = require('express')
const app = express()
const routes = require('./routes')
const { connect } = require('./config/mongodb.js')
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routing
app.use(routes)

connect()
  .then(() => {
    console.log('Connection to mongodb successfully')
    app.listen(PORT, () => {
      console.log('Server is running on port', PORT)
    })
  })
  .catch(err => {
    console.log(err)
  })
