import { exec, spawn } from 'node:child_process'
const [node, _, file] = process.argv
const pr = spawn('dir', [], { shell: true })
pr.stdout.on('data', (data) => {
  console.log(data.toString('utf8'))
})
pr.stderr.on('data', (data) => {
  console.error(data.toString('utf8'))
})
pr.once('close', (code) => {
  console.log(`Process exited :${code}`)
})

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