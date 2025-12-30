export async function fetchPosts() {
  // BUG: response is undefined
  const response = undefined
  if (response.status === 200) { // ERROR: Cannot read property 'status' of undefined
    return response.json()
  }
  throw new Error('Failed to fetch posts')
}

