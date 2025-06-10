import Fastify from 'fastify';

const server = Fastify();

server.get('/', async (_request, reply) => {
  return { message: 'Hello World' };
});

const start = async () => {
  try {
    await server.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Server listening on http://localhost:3000');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
