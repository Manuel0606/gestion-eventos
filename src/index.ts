import fastify from 'fastify'
import { pool } from './infrastructure/db/db'
import 'dotenv/config'

const server = fastify({logger: true})

server.get('/ping', async (request, reply) => {
  try {
    const result = await pool.query('SELECT NOW()')
    console.log('respuesta: '+JSON.stringify(result));
    
  } catch (error) {
    console.log(error)
  }
  
  return 'pong\n'
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})