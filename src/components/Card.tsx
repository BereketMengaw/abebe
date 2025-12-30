import React from 'react'

export function Card({ card }: { card?: any }) {
  if (!card) return null
  
  return (
    <div>
      <h2>{card.title}</h2>
      <p>{card.description}</p>
    </div>
  )
}
