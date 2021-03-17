const { MongoClient } = require("mongodb");

let database

const connect = async () => {
  try {
    const uri = 'mongodb://localhost:27017'
    const client = new MongoClient(uri, { useUnifiedTopology: true })
    await client.connect()
    const db = client.db('entertainme')
    database = db
    return database
  } catch (err) {
    console.log(err)
  }
}

const getDb = () => {
  return database
}

module.exports = { connect, getDb }