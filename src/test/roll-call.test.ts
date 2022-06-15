import { jest, test, expect } from '@jest/globals'
import { RollCall } from '../roll-call'
const rollCall = new RollCall()

rollCall.addName({
  firstName: 'Test',
  lastName: 'Bson'
})
rollCall.addName({
  firstName: 'Test',
  lastName: 'Ason'
})
rollCall.addName({
  firstName: 'Unique',
  lastName: 'Cson'
})
rollCall.addName({
  firstName: 'Uniquer',
  lastName: 'Dson'
})

test('Test sorting', () => {
  const sortedList = rollCall.getSortedNameList()
  expect(sortedList[0].lastName).toBe('Ason')
  expect(sortedList[1].lastName).toBe('Bson')
})

test('Test unique first names', () => {
  const printNameSpy = jest.spyOn(rollCall as any, 'printRow').mockImplementation(() => { })
  rollCall.printNameList()
  expect(printNameSpy).toHaveBeenCalledWith('Unique')
  expect(printNameSpy).toHaveBeenLastCalledWith('Uniquer')
  printNameSpy.mockReset()
})

test('Test duplicate first names', () => {
  const printNameSpy = jest.spyOn(rollCall as any, 'printRow').mockImplementation(() => { })
  rollCall.printNameList()
  expect(printNameSpy).toHaveBeenCalledWith('Test Ason')
  expect(printNameSpy).not.toHaveBeenCalledWith('Test')
  printNameSpy.mockReset()
})
