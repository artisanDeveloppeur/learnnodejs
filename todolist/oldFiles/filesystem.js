/**
 * F - app.js
 * D - demo
 */
const wait = (duration) => new Promise(resolve => setTimeout(resolve, duration))
console.time('code')
const files = await readdir('./', { withFileTypes: true })
await Promise.allSettled(
  files.map(async (file) => {
    const parts = [
      file.isDirectory() ? 'D' : 'F',
      file.name
    ]
    if (!file.isDirectory()) {
      const { size } = await stat(file.name)
      //const size = await wait(1000)
      parts.push(`${size}octet`)
    }

    console.log(parts.join(' - '))
  })
)
//for (const file of files) {


//}
console.timeEnd('code')

/**
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const dir = dirname(fileURLToPath(import.meta.url))
const filename = join(dir, 'fichier.txt')
console.log(await readFile(filename, { encoding: 'utf8' }))
 */