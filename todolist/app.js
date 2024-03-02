//import fs from 'node:fs'
//import { readFile } from 'node:fs/promises'
import { stat, writeFile } from "fs/promises"
const info = await stat('demo.txt')
console.log(info)
//const content = await readFile('demo.txt', { encoding: 'utf8' })
//console.log(content)

//const content = fs.readFileSync('demo.txt', { encoding: 'utf8' })
//console.log(content)
/*
const content = fs.readFile('demo.txt', { encoding: 'utf8' }, function (err, content) {
  console.log(content)

})
*/
//console.log('Learn nodejs')