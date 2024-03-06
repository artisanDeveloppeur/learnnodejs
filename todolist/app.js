//console.log('node child process change')

import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.write(`salut `);
  console.log('Bonsoir')
  res.end();
});
server.listen('8888')

//http://localhost:8888/