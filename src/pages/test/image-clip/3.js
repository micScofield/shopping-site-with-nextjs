import Image from 'next/image'
import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { Box } from '@mui/system'
import { Button } from '@mui/material'

const useStyles = makeStyles(() => ({}))

function ImageClip() {
  const classes = useStyles()

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#e0d9c5',
        gap: '2rem',
        margin: '10rem 0',
      }}
    >
      <div
        style={{
          position: 'relative',
          overflow: 'scroll',
          width: '30%',
        }}
      >
        <h2>Module Title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
          asperiores magnam, fuga ducimus repellat quae, nihil distinctio,
          aperiam fugit incidunt explicabo quod voluptatum? Quidem commodi illo
          voluptatem earum libero voluptate maiores saepe pariatur suscipit.
          Aspernatur harum cumque inventore veritatis saepe dicta aperiam
          delectus corporis eveniet voluptatibus, iure, maiores eos nobis
          laudantium deleniti qui, deserunt alias? Eius, corrupti illo quam
          tempora delectus voluptatibus dolor adipisci repudiandae quidem
          provident amet iusto pariatur esse quis odit voluptatum et commodi
          aspernatur assumenda reiciendis quia labore facere est? Fuga
          necessitatibus voluptatibus dicta!
        </p>
        <Button variant="contained">CTA</Button>
      </div>
      <div
        style={{
          position: 'relative',
          aspectRatio: '4/3',
          width: '50%',
          WebkitMaskImage:
            'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzA4IiBoZWlnaHQ9IjQ5MCIgdmlld0JveD0iMCAwIDcwOCA0OTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgo8cGF0aCBkPSJNMCAwSDcwOEM3MDggMCA3MDggMTE1IDcwOCAyNDNDNzA4IDM3MSA3MDggNDkwIDcwOCA0OTBIMEMwIDQ5MCA0My41IDM3Mi41IDQzLjUgMjQ1QzQzLjUgMTE3LjUgMCAwIDAgMFoiIGZpbGw9IiNEOUQ5RDkiLz4KPHBhdGggZD0iTTAgMEg3MDhDNzA4IDAgNzA4IDExNSA3MDggMjQzQzcwOCAzNzEgNzA4IDQ5MCA3MDggNDkwSDBDMCA0OTAgNDMuNSAzNzIuNSA0My41IDI0NUM0My41IDExNy41IDAgMCAwIDBaIiBmaWxsPSJ1cmwoI3BhdHRlcm4wKSIvPgo8ZGVmcz4KPHBhdHRlcm4gaWQ9InBhdHRlcm4wIiBwYXR0ZXJuQ29udGVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgd2lkdGg9IjEiIGhlaWdodD0iMSI+Cjx1c2UgeGxpbms6aHJlZj0iI2ltYWdlMF82Mzk0XzIxNDIzMiIgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMTU2MjUgMCAwIDAuMDIyNTc2NSAwIC0wLjIyMjQ0OSkiLz4KPC9wYXR0ZXJuPgo8aW1hZ2UgaWQ9ImltYWdlMF82Mzk0XzIxNDIzMiIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQVhOU1IwSUFyczRjNlFBQUFPTkpSRUZVZUY3dDIwRU9oRUFJUkZHNC82RjdEdkVuWWVGenJ5UUl2NnBCZDJiZWhPdTlkUHZzYm9nK2srTkxnQXJRQXFtSmN3OWlBQWhTZ1pLQjNJSmtrQXlTUVRKNENpRStnQThvQmVnMG1IM0FpMDg0UDg5SGhxd0VxSUEyMDlJQ3NRZGpBZWFaSWdhQVlLeEJETUNBWXk4Zlh3QUlnaUFJY29KcEpFWUdJNFZqQjNZcmJDOWdMMkF2a0NCNDNjTTVQZ1pnQUFaZ1FGbk5aQWhkR3lrUUJFRVFCRUVRREJtZ0FtMmdsTS96K1FVWWlzWVVHb2xkTzdrWTMySUVBekNnNlJnSVJnakZBc3crQWdSQk1OWWdCbUNBVDJUQ1lmb1BQei9IQ3FRQ1gxZUJIekhudjdDN1doQlNBQUFBQUVsRlRrU3VRbUNDIi8+CjwvZGVmcz4KPC9zdmc+Cg==)',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: '100% 100%',
          overflow: 'hidden',
        }}
      >
        <Image
          src="https://i.ibb.co/px2tCc3/jackets.png"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </div>
  )
}

export default ImageClip
