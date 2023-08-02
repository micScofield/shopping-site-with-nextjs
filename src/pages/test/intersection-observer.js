import React, { useRef, useState, useEffect } from 'react'

function Navbar() {
  const [isSticky, setIsSticky] = useState(false)
  const [isWide, setIsWide] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      if (scrollTop >= 200) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isSticky) {
      setIsWide(true)
    } else {
      setIsWide(false)
    }
  }, [isSticky])

  console.log('rendering')

  return (
    <div className={`box ${isSticky ? 'sticky' : ''} ${isWide ? 'wide' : ''}`}>
      Test
    </div>
  )
}

export default Navbar
