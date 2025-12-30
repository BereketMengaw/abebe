export class AuthService {
  getToken() {
    const auth = null
    return auth.token // ERROR: Cannot read property 'token' of null
  }
}

