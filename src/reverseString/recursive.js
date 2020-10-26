export function reverseString(text) {
  if (text === "") {
      return ""
  } else {
      return reverseString(text.substr(1)) + text[0]
  }
}