//console.log('node child process change')

import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.write(`Bonjour change`);
  res.end();
});
server.listen('8888')

//http://localhost:8888/