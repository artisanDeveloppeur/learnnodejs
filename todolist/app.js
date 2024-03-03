import { createReadStream } from 'node:fs'
import { stat } from "node:fs/promises"
const stream = createReadStream('demo.txt')
const { size } = await stat('demo.txt')
let read = 0
stream.on('data', (chunk) => {
  read += chunk.length
  console.log(Math.round(100 * read / size))
  console.log(chunk.length)

})
stream.on('close', () => {
  console.log('close')

})

//import { readFile, writeFile } from "node:fs/promises"

//const content = await readFile('demo.txt')
//await writeFile('demo-copy.txt', content)