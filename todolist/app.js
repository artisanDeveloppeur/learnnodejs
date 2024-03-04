
import { createReadStream } from 'node:fs'
import { createServer } from 'node:http'
const server = createServer((req, res) => {
  //console.log(req.url)
  const url = new URL(req.url, `http://${req.headers.host}`)
  res.write(`Bonjour ${url.searchParams.get('name')}`)
  res.end()
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
})

server.listen('8888')

// http://localhost:8888/

// http://localhost:8888/?name=john