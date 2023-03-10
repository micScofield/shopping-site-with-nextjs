const { createContext, useState, useEffect, useMemo } = require('react')

export const InternetConnectionStatusContext = createContext({
  isOnline: true,
})

export const InternetConnectionStatusProvider = ({ children }) => {
  const [isOnline, setOnline] = useState(true)

  useEffect(() => {
    setOnline(navigator.onLine)

    window.addEventListener('online', () => {
      setOnline(true)
    })

    window.addEventListener('offline', () => {
      setOnline(false)
    })

    return () => {
      window.removeEventListener('online', () => {
        setOnline(true)
      })

      window.removeEventListener('offline', () => {
        setOnline(false)
      })
    }
  }, [])

  const value = useMemo(() => ({ isOnline }))

  console.log(value)

  return (
    <InternetConnectionStatusContext.Provider value={value}>
      {children}
    </InternetConnectionStatusContext.Provider>
  )
}
