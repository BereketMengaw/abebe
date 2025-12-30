export async function fetchUsers() {
  const response = await fetch('/api/users')
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return response.json()
}
