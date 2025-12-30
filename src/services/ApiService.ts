export class ApiService {
  async request(url: string) {
    const response = await fetch(url) // ERROR: Failed to fetch
    return response.json()
  }
}

