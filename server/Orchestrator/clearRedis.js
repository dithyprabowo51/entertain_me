const Redis = require("ioredis")
const redis = new Redis()

redis.flushall()
  .then(data => console.log(data))
  .catch(err => {
    console.log(err)
  })