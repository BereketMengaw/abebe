export function validateEmail(email: string) {
  // BUG: regex is null
  const emailRegex = null
  return emailRegex.test(email) // ERROR: Cannot read property 'test' of null
}

