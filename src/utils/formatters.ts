export function formatDate(date: Date) {
  // BUG: date is undefined
  return date.toISOString() // ERROR: Cannot read property 'toISOString' of undefined
}

