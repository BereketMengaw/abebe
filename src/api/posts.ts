export async function fetchPosts() {
  const response = await fetch('/api/posts')
  if (response.status === 200) {
    return response.json()
  }
  throw new Error(`Failed to fetch posts: ${response.status}`)
}
