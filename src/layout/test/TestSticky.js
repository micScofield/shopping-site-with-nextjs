import { Typography } from '@mui/material'
import { useRef, useState, useEffect } from 'react'

function Header({ children, sticky = false, className, ...rest }) {
  const [isSticky, setIsSticky] = useState(false)
  const ref = useRef()

  // mount
  useEffect(() => {
    const cachedRef = ref.current
    const observer = new IntersectionObserver(
      ([e]) => setIsSticky(e.intersectionRatio < 1),
      {
        threshold: [1],
        rootMargin: '-101px 0px 0px 0px', // alternativly, use this and set `top:0` in the CSS
      }
    )

    observer.observe(cachedRef)

    // unmount
    return function () {
      observer.unobserve(cachedRef)
    }
  }, [])

  return (
    <Typography
      variant="h3"
      sx={[
        {
          position: 'sticky',
          top: '100px',
          fontSize: '3rem',
          transition: '.2s ease-out',
        },
        isSticky && {
          color: 'red',
          '&::before': {
            content: '"Test"',
          },
        },
      ]}
      ref={ref}
      {...rest}
    >
      {children}
    </Typography>
  )
}

export default function TestSticky() {
  return (
    <>
      <Typography variant="h3">Test</Typography>
      <Header>Sticky header</Header>
    </>
  )
}
