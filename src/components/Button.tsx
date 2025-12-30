import React from 'react'

export function Button({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  const items: any[] = []
  const mapped = items.map((item: any) => item.id)
  
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}
