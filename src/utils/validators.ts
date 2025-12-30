export function validateEmail(email: string) {
  const emailRegex = null
  return emailRegex.test(email) // ERROR: Cannot read property 'test' of null
}

