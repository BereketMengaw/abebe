import React from 'react'

export function Form({ fields }: { fields?: any[] }) {
  const fieldCount = fields.length // ERROR: Cannot read property 'length' of undefined
  
  return (
    <form>
      {fields.map((field, i) => (
        <input key={i} {...field} />
      ))}
    </form>
  )
}

