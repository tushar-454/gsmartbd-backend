const redisModule = require('redis');
const { redis } = require('../config');

const client = redisModule.createClient({
  host: redis[redis.environment].host,
  port: redis[redis.environment].port,
  password: redis[redis.environment].password,
});

const connectRedis = async () => {
  try {
    await client.connect();
    console.log('Redis client connected');
  } catch (error) {
    console.log('Redis Client Error:', error.message);
  }
  client.on('error', (err) => console.log('Redis Client Error', err));
};

module.exports = { connectRedis, client };
