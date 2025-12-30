export function processData(data: any[]) {
  if (!data || !Array.isArray(data)) {
    return []
  }
  return data.map(item => item.id)
}
