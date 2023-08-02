import Image from 'next/image'
import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { Box } from '@mui/system'
import YoutubePlayer from 'src/common/components/youtube/Player'

const useStyles = makeStyles(() => ({}))

function ImageClip() {
  const classes = useStyles()

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '10rem 0',
        padding: '2rem',
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
          <YoutubePlayer videoId="UCL5w4xbInQ" />
        </div>
      </Box>
    </div>
  )
}

export default ImageClip
