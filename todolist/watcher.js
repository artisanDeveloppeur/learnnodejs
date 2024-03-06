import { exec, spawn } from 'node:child_process'
import { watch } from 'node:fs/promises'
const [node, _, file] = process.argv

function spawnNode() {
  console.log("reloading server")
  const pr = spawn(node, [file])
  pr.stdout.on('data', (data) => {
    console.log(data.toString('utf8'))
  })
  pr.stderr.on('data', (data) => {
    console.error(data.toString('utf8'))
  })
  pr.once('close', (code) => {
    if (code > 0) {
      throw new Error(`Process exited :${code}`)
    }
    //console.log(`Process exited :${code}`)
  })

  return pr
}

let childNodeProcess = spawnNode()
const watcher = watch('./', { recursive: true })
for await (const event of watcher) {
  if (event.filename.endsWith('js')) {
    childNodeProcess.kill()
    childNodeProcess = spawnNode()
    //console.log(event)

  }
}

/*
ou stdout
err stderr
*/
/*
exec('dir', (error, out, err) => {

  console.log({
    error,
    out,
    err
  })
})
*/

//console.log(process.argv)

// node watcher.js app.js