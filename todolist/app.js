import { readdir, stat } from "node:fs/promises"
/**
 * F - app.js
 * D - demo
 */
const wait = (duration) => new Promise(resolve => setTimeout(resolve, duration))
console.time('code')
const files = await readdir('./', { withFileTypes: true })
for (const file of files) {
  const parts = [
    file.isDirectory() ? 'D' : 'F',
    file.name
  ]
  if (!file.isDirectory()) {
    //const { size } = await stat(file.name)
    const size = await wait(1000)
    parts.push(`${size}octet`)
  }
  // destructuration
  //const { size } = await stat(file.name)
  //console.log(`${file.isDirectory() ? 'D' : 'F'} - ${file.name} - ${size}octet`)
  console.log(parts.join(' - '))
}
//console.log(files)
console.timeEnd('code')


//import { watch } from "fs/promises"

/*
const watcher = await watch('./')
for await (const event of watcher) {
  console.log(event)
}
*/