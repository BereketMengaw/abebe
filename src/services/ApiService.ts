export class ApiService {
  async request(url: string) {
    // BUG: No error handling
    const response = await fetch(url) // ERROR: Failed to fetch (network error)
    return response.json()
  }
}

