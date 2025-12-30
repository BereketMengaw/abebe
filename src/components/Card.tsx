import React from 'react'

export function Card({ card }: { card?: any }) {
  return (
    <div>
      <h2>{card.title}</h2> {/* ERROR: Cannot read property 'title' of undefined */}
      <p>{card.description}</p>
    </div>
  )
}

