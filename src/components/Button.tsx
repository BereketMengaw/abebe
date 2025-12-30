import React from 'react'

export function Button({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  // BUG: items is undefined
  const items = undefined
  const mapped = items.map((item: any) => item.id) // ERROR: Cannot read property 'map' of undefined
  
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}
