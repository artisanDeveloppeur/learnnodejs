
import { createServer } from 'node:http';
import { json, text } from 'node:stream/consumers';

const server = createServer(async (req, res) => {
  //console.log(req.url)
  const url = new URL(req.url, `http://${req.headers.host}`);
  let body = ''
  console.log(await text(req))
  // Use await inside an async function
  //res.write(`Bonjour ${(await json(req)).name}`);
  res.end();
});
server.listen('8888')



/*
  let body = ''
  req.on('data', (chunk) => {
    body += chunk
  })
  req.on('close', () => {
    console.log(body)
    res.end()

  })
*/



//res.write(`Bonjour ${url.searchParams.get('name')}`)
//res.end()

//console.log(url)
//console.log(req.headers.accept)
/*
const file = createReadStream('index.html')
res.writeHead(404, {
  'Content-Type': 'text/html'
})
file.pipe(res, { end: false })
file.on('end', () => {
  res.end()
*/

//server.listen('8888')

// http://localhost:8888/

// http://localhost:8888/?name=john