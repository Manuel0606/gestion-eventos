import fastify from "fastify"
import { pool } from "./infraestructure/db/db"
import "dotenv/config"

const PORT = parseInt(process.env.PORT || '8080', 10);

export const server = fastify({ logger: true });

server.get('/ping', async (request, reply) => {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('respuesta: ' + JSON.stringify(result))
  } catch (error) {
    console.log(error)
  }

  return 'pong\n'
})

server.listen({ port: PORT }, (err, address) => {
  if (err != null) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
});
