import { useState } from 'react'

export function useAuth() {
  // BUG: user is not defined
  return {
    user: user, // ERROR: user is not defined
    isAuthenticated: !!user
  }
}

