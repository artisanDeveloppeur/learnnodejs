import { createServer } from 'node:http';
import { findTodos } from './functions/todos_storage.js';

const server = createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const todos = await findTodos()
  res.write(JSON.stringify(todos))
  res.end();
});
server.listen('8888')

//http://localhost:8888/todos