import { createServer } from 'node:http';
import { findTodos } from './functions/todos_storage.js';

const server = createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json')

  const url = new URL(req.url, `http://${req.headers.host}`)
  if (url.pathname === '/todos') {
    const todos = await findTodos()
    res.write(JSON.stringify(todos))
  } else {
    res.writeHead(404)
  }
  console.log(url)
  /**
    URL {
    href: 'http://localhost:8888/todos',
    origin: 'http://localhost:8888',
    protocol: 'http:',
    username: '',
    password: '',
    host: 'localhost:8888',
    hostname: 'localhost',
    port: '8888',
    pathname: '/todos',
    search: '',
    searchParams: URLSearchParams {},
    hash: ''
  }
   */
  res.end();
});
server.listen('8888')

//http://localhost:8888/todos