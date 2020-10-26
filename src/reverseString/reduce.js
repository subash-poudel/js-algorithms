export function reverseString(text) {
  return [...text].reduce((acc, char) => char + acc, '')
}