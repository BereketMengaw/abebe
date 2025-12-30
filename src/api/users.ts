export async function fetchUsers() {
  // BUG: response.json is not a function
  const response = fetch('/api/users')
  return response.json() // ERROR: response.json is not a function
}

