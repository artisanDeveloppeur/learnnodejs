import { open } from "fs/promises"
const file = await open('demo.txt', 'a')
file.write('ecrit à la fin')
file.close