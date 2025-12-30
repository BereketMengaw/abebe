export function formatDate(date: Date) {
  return date.toISOString() // ERROR: Cannot read property 'toISOString' of undefined
}

