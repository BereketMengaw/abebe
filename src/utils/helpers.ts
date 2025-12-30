export function processData(data: any[]) {
  return data.map(item => item.id) // ERROR: Cannot read property 'map' of undefined
}

