import { createReadStream, createWriteStream } from 'node:fs'
import { stat } from "node:fs/promises"

const stream = createReadStream('demo.txt')
const writeStream = createWriteStream('demo-copy.txt')
stream.pipe(writeStream)
/*
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
*/
