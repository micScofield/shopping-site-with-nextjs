import Image from 'next/image'
import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { Box } from '@mui/system'
import { Button } from '@mui/material'

const useStyles = makeStyles(() => ({}))

export default function ImageClip() {
  const classes = useStyles()

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '10rem 0',
        padding: '1rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/11.1',
          }}
        >
          <Image src="/assets/semi3.svg" layout="fill" />
        </div>
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/11.1',
            WebkitMaskImage:
              'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTUyIiBoZWlnaHQ9IjQyMCIgdmlld0JveD0iMCAwIDU1MiA0MjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8cGF0aCBkPSJNLTEuOTk0MDhlLTA1IDExNC4wNDhMLTcuMzQzNTFlLTA1IDQyMEw1NTIgNDIwTDU1MiAxMDMuMDY5QzU0NS44MjYgOTcuNjAwOCA1MzkuNTE1IDkyLjMwNjQgNTMzLjAzMiA4Ny4xODU1QzQ2My42MDcgMzIuNTQ4MSAzNzYuNTE4IDYuNTgzMjVlLTA1IDI4MS45NTEgNC45Mjk3OWUtMDVDMTcyLjc3MiAzLjAyMDg1ZS0wNSA3My41NDA2IDQzLjM1NCAtMS45OTQwOGUtMDUgMTE0LjA0OFoiIGZpbGw9IiNmZmZmZmYiIC8+CjxkZWZzPgo8L2RlZnM+Cjwvc3ZnPgo=)',
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/11.1',
          }}
        >
          <Image src="/assets/semi-circle-left-image.svg" layout="fill" />
        </div>
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16/11.1',
            WebkitMaskImage:
              'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzA4IiBoZWlnaHQ9IjQ5MCIgdmlld0JveD0iMCAwIDcwOCA0OTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8cGF0aCBkPSJNMCAwSDcwOEM3MDggMCA3MDggMTE1IDcwOCAyNDNDNzA4IDM3MSA3MDggNDkwIDcwOCA0OTBIMEMwIDQ5MCA0My41IDM3Mi41IDQzLjUgMjQ1QzQzLjUgMTE3LjUgMCAwIDAgMFoiIGZpbGw9IiNEOUQ5RDkiLz4KPHBhdGggZD0iTTAgMEg3MDhDNzA4IDAgNzA4IDExNSA3MDggMjQzQzcwOCAzNzEgNzA4IDQ5MCA3MDggNDkwSDBDMCA0OTAgNDMuNSAzNzIuNSA0My41IDI0NUM0My41IDExNy41IDAgMCAwIDBaIiBmaWxsPSJ1cmwoI3BhdHRlcm4wKSIvPgo8cGF0aCBkPSJNMCAwSDcwOEM3MDggMCA3MDggMTE1IDcwOCAyNDNDNzA4IDM3MSA3MDggNDkwIDcwOCA0OTBIMEMwIDQ5MCA0My41IDM3Mi41IDQzLjUgMjQ1QzQzLjUgMTE3LjUgMCAwIDAgMFoiIGZpbGw9InVybCgjcGF0dGVybjEpIi8+Cjwvc3ZnPgo=)',
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
    </div>
  )
}
