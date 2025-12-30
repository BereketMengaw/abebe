import React from 'react'

export function Form({ fields = [] }: { fields?: any[] }) {
  const fieldCount = fields?.length || 0
  
  return (
    <form>
      {fields.map((field, i) => (
        <input key={i} {...field} />
      ))}
    </form>
  )
}
