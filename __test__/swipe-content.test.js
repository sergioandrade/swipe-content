import { sum, minus } from '../src/index'

test('Should exist sum method',  () => {
  expect(sum).toBeTruthy()
})

test('Should exist minus method',  () => {
  expect(minus).toBeTruthy()
})

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('subtract 2 - 1 to equal 1', () => {
  expect(minus(2, 1)).toBe(1)
})
