import { NameCount, Name } from './typings'

export class RollCall {
  private nameCount: NameCount
  private nameList: Name[]

  constructor () {
    this.nameCount = {}
    this.nameList = []
  }

  public addName (name: Name) {
    const currentNameCount = this.nameCount[name.firstName] ? this.nameCount[name.firstName] : 0
    this.nameCount[name.firstName] = currentNameCount + 1
    this.nameList.push(name)
  }

  public getSortedNameList (): Name[] {
    return this.nameList.sort((aName, bName) => aName.lastName.localeCompare(bName.lastName))
  }

  public printNameList (): void {
    const sortedList = this.getSortedNameList()
    for (const name of sortedList) {
      this.printName(name)
    }
  }

  private printName (name: Name): void {
    if (this.nameCount[name.firstName] !== undefined && this.nameCount[name.firstName] > 1) {
      console.log(`${name.firstName} ${name.lastName}`)
    } else {
      console.log(name.firstName)
    }
  }
}
