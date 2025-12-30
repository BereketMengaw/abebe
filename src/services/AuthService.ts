export class AuthService {
  getToken() {
    // BUG: auth is null
    const auth = null
    return auth.token // ERROR: Cannot read property 'token' of null
  }
}

