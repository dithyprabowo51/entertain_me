const express = require('express')
const app = express()
const orchestratorRoutes = require('./routes/orchestratorRoutes.js')
const errorHandling = require('./helpers/errorHandling.js')
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/entertainme', orchestratorRoutes)

app.use(errorHandling)

app.listen(PORT, () => console.log('Server is running on port', PORT))