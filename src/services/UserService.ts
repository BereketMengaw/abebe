export class UserService {
  async getUser(id: string) {
    const response = await fetch(`/api/users/${id}`) // ERROR: fetch is not defined
    return response.json()
  }
}

