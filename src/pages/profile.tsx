import React from 'react'

export function Profile() {
  const user = null
  return (
    <div>
      <h1>{user.name}</h1> {/* ERROR: Cannot read property 'name' of null */}
      <p>{user.email}</p>
    </div>
  )
}

