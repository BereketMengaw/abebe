import { useState } from 'react'

export function useAuth() {
  return {
    user: user, // ERROR: user is not defined
    isAuthenticated: !!user
  }
}

