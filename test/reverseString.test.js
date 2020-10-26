import { reverseString as reverseStringForLoop } from '../src/reverseString/for-loop'

test('test for loop implementation', () => {
  const str = 'algorithms';
  const expected = 'smhtirogla'
  const actual = reverseStringForLoop(str)
  expect(actual).toBe(expected);
})