export class ApiService {
  async request(url: string) {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return response.json()
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
  }
}
