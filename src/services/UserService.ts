export class UserService {
  async getUser(id: string) {
    // BUG: fetch is not defined (Node.js environment)
    const response = await fetch(`/api/users/${id}`) // ERROR: fetch is not defined
    return response.json()
  }
}

