
import { createServer } from 'node:http';
import { json, text } from 'node:stream/consumers';

const server = createServer(async (req, res) => {
  //console.log(req.url)
  const url = new URL(req.url, `http://${req.headers.host}`);
  //let body = ''
  //console.log(await text(req))
  // Use await inside an async function
  res.write(`Bonjour ${(await json(req)).name}`);
  res.end();
});
server.listen('8888')
