export function processData(data: any[]) {
  // BUG: data is undefined
  return data.map(item => item.id) // ERROR: Cannot read property 'map' of undefined
}

