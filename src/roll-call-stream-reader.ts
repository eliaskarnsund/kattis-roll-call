import readline from 'readline'
import { Name } from './typings'
import { RollCall } from './roll-call'

export class RollCallStreamReader {
  public async parse (fileStream: NodeJS.ReadableStream): Promise<RollCall> {
    const rollCall = new RollCall()
    const readLine = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    })

    for await (const line of readLine) {
      const name = this.parseLine(line)
      rollCall.addName(name)
    }
    return rollCall
  }

  private parseLine (line: string): Name {
    const fullName = line.split(' ')
    return {
      firstName: fullName[0],
      lastName: fullName[1]
    }
  }
}
