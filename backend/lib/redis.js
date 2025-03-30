import Redis from "ioredis"
import dotenv from "dotenv"

dotenv.config()

//const client = new Redis();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL);

// So REDIS is a key-value store. It is a giant json which has alot of sorts of data structures like linked lists, arrays etc.


//await client.set('foo', 'bar');
//await redis.set('foo','bar');
