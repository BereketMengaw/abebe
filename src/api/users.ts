export async function fetchUsers() {
  const response = fetch('/api/users')
  return response.json() // ERROR: response.json is not a function
}

