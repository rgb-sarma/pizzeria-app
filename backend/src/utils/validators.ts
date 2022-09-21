export function validateInteger(
  number: any,
  greaterThanZero: boolean = true
): boolean {
  return (
    number === 0 ||
    (number &&
      typeof number !== 'object' &&
      Number.isInteger(Number(number)) &&
      (number >= 0 || (!greaterThanZero && number < 0)))
  )
}

export function validateString(string: any, length: number = 255): boolean {
  return (
    string &&
    typeof string === 'string' &&
    string.trim().length > 0 &&
    string.trim().length <= length
  )
}

export function validateArray(array: any): boolean {
  return Array.isArray(array) && array.length > 0
}

export function validatePassword(password: any): boolean {
  return (
    password &&
    password.trim().length > 0 &&
    password.length > 4 &&
    password.length < 32
  )
}
