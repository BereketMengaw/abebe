import React from 'react'

export function Dashboard() {
  const data = undefined
  const items = data.map((item: any) => item.id) // ERROR: Cannot read property 'map' of undefined
  
  return (
    <div>
      <h1>Dashboard</h1>
      {items.map((item: any) => <div key={item}>{item}</div>)}
    </div>
  )
}

