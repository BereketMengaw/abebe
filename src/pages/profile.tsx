import React, { useState, useEffect } from 'react'

export function Profile() {
  const [user, setUser] = useState<any>(null)
  
  useEffect(() => {
    setUser(null)
  }, [])
  
  if (!user) {
    return <div>Loading...</div>
  }
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  )
}
