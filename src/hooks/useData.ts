import { useState, useEffect } from 'react'

export function useData(url: string) {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    fetch(url).then(res => res.json()).then(setData)
  }, [url])
  
  return data.data // ERROR: Cannot read property 'data' of undefined
}

