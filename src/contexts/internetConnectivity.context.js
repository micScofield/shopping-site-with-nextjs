const { createContext, useState, useEffect, useMemo } = require('react')

export const InternetConnectionStatusContext = createContext({
  isOnline: true,
})

export const InternetConnectionStatusProvider = ({ children }) => {
  const [isOnline, setOnline] = useState(true)

  if (typeof navigator === 'undefined') {
    return null
  }

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
  }, [navigator.onLine])

  const value = useMemo(() => ({ isOnline }))

  return (
    <InternetConnectionStatusContext.Provider value={value}>
      {children}
    </InternetConnectionStatusContext.Provider>
  )
}
