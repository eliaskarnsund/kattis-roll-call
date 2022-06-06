import fs from 'fs'
import { RollCallStreamReader } from './roll-call-stream-reader'

async function runRollCall (file: string) {
  try {
    const rollCallStreamReader = new RollCallStreamReader()
    const stream = fs.createReadStream(file, { encoding: 'utf8' })
    const rollCall = await rollCallStreamReader.parse(stream)
    rollCall.printNameList()
  } catch (error) {
    console.error(error)
  }
}

runRollCall('sample-data/sample.in')
