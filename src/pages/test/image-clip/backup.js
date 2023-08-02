import Image from 'next/image'
import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { Box } from '@mui/system'

const useStyles = makeStyles(() => ({
  imageContainer: {
    position: 'relative',
    width: '30rem',
    height: '20rem',
  },
  box: {
    width: '423px',
    height: '90px',
    backgroundColor: '#b0102d',
    color: 'white',
    clipPath: 'polygon(100% 0%, 100% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)',
  },
  parent: {
    clipPath: 'url("#goo")',
    right: '-50px',
    zIndex: 1,
    margin: '10vw 0',
  },
}))

function ImageClip() {
  const classes = useStyles()

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        border: 1,
      }}
    >
      {/* <div
        style={{
          position: 'relative',
          height: '30rem',
          width: '20rem',
          WebkitClipPath:
            // 'polygon(50% 0%, 80% 10%, 100% 35%, 100% 100%, 0 100%, 0% 35%, 20% 10%)',
            'polygon(50% 0%, 80% 10%, 100% 35%, 100% 100%, 0 100%, 0% 35%, 20% 10%)',
        }}
      >
        <Image
          src="https://i.ibb.co/px2tCc3/jackets.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div> */}
      {/* M 0 0 H 6 V 5 H 0 V 0 M 3 0 A 1 1 0 0 0 2 1 A 1 1 0 0 0 1 2 V 5 H 5 V 2 A 1 1 0 0 0 4 1 A 1 1 0 0 0 3 0 */}
      {/* <div
        style={{
          position: 'relative',
        }}
      >
        <Image
          src="/assets/test1.svg"
          height="450"
          width="360"
          objectFit="cover"
          objectPosition="center"
        />
      </div> */}
      <div
        style={{
          position: 'relative',
          height: '25rem',
          width: '20rem',
        }}
      >
        <Image src="/assets/test2.svg" layout="fill" />
      </div>
      <div
        style={{
          position: 'relative',
          height: '25rem',
          width: '20rem',
          WebkitMaskImage:
            'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjggMjA3Ij4KICA8cGF0aCBkPSJNMTQ5LjU4IDQyLjc1MjFDMTM5Ljg4OSAzOS4wODg1IDEzNS4yNDcgMzUuMTA4NyAxMzMuMzk0IDI3LjExODJDMTMzLjEyOCAyNS45NzI5IDEzMi4xMDkgMjUuMTU1MyAxMzAuOTMyIDI1LjE1NTNIMTIzLjM4QzEyMi4zOTIgMjUuMTU1MyAxMjEuNDc3IDI0LjU4ODQgMTIxLjA4MyAyMy42ODIyQzExNi42MjIgMTMuNDM5NiAxMDMuMjY5IDAgODMuMTc4IDBDNjUuNzAzNCAwIDUwLjU3OTEgMTIuOTYxNCA0Ni41NjkzIDIzLjUzOTVDNDYuMTk4OCAyNC41MTUxIDQ1LjI2NDkgMjUuMTUxNCA0NC4yMTkxIDI1LjE1MTRIMzcuMDYwMkMzNS44OTQ3IDI1LjE1MTQgMzQuODc1OSAyNS45NTM2IDM0LjYwNTcgMjcuMDkxMkMzMi44MTUgMzQuNjQ1OSAyOC4wNzIgMzkuMSAxOC40MTYyIDQyLjc1MjFDNy45NjU0NSA0Ni43MDQ5IDAgNTMuNzE5NyAwIDcwLjQ2NDFWMjA0Ljk0NUMwIDIwNi4wNzggMC45MTg0OTcgMjA2Ljk5NiAyLjA1MzExIDIwNi45OTZIMTY1Ljk0N0MxNjcuMDgxIDIwNi45OTYgMTY4IDIwNi4wNzggMTY4IDIwNC45NDVWNzAuNDY0MUMxNjggNTMuNzE1OCAxNjAuMDM1IDQ2LjcwNDkgMTQ5LjU4NCA0Mi43NTIxSDE0OS41OFoiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSIjRkZGRkZGIi8+Cjwvc3ZnPg==)',
          WebkitMaskRepeat: 'no-repeat',
          overflow: 'hidden',
          WebkitMaskSize: '100% 100%', // to make it centered inside flex container
        }}
      >
        <Image
          src="https://i.ibb.co/px2tCc3/jackets.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </Box>
  )
}

export default ImageClip
