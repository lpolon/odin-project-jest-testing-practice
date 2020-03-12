export const capitalize = (string) => {
  const upperCaseFirstChar = string[0].toUpperCase();
  const charArr = string.split('');
  charArr[0] = upperCaseFirstChar;
  return charArr.join('')
}

export const reverseString = (string) => {
  return string.split('').reverse().join('');
}