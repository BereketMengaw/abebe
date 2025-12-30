import { useState, useEffect } from 'react'

export function useData(url: string) {
  const [data, setData] = useState<any>(null)
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(error => {
        console.error('Error fetching data:', error)
        setData(null)
      })
  }, [url])
  
  return data
}
