import React, { useState, useEffect } from 'react'

export function Dashboard() {
  const [data, setData] = useState<any[]>([])
  
  useEffect(() => {
    setData([])
  }, [])
  
  const items = data.map((item: any) => item.id)
  
  return (
    <div>
      <h1>Dashboard</h1>
      {items.map((item: any) => <div key={item}>{item}</div>)}
    </div>
  )
}
