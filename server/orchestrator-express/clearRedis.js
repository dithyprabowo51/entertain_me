const Redis = require('ioredis')
const redis = new Redis();

redis.flushall()