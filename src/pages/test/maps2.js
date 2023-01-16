import { Loader } from '@googlemaps/js-api-loader'
import DriveEtaIcon from '@mui/icons-material/DriveEta'
import TrainIcon from '@mui/icons-material/Train'
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk'
import PedalBikeIcon from '@mui/icons-material/PedalBike'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'src/common/Link'

const lat = 27.798297
const lng = -102.467171

const Maps = () => {
  // Google maps configuration
  const googlemap = useRef(null)

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
      version: 'weekly',
    })
    let map
    loader.load().then(() => {
      const { google } = window
      map = new google.maps.Map(googlemap.current, {
        center: { lat, lng },
        zoom: 8,
        fullscreenControl: false, // remove the top-right button
        mapTypeControl: false, // remove the top-left buttons
        streetViewControl: false, // remove the pegman
        zoomControl: false, // remove the bottom-right buttons
      })

      const marker = new google.maps.Marker({
        position: { lat, lng },
        map,
        title: 'Marker Title',
      })
    })
  })

  const handleCarIconClick = (directionFlag) => {
    // router.push({
    //   pathname: 'https://maps.google.com/',
    //   query: {
    //     saddr: 'current+location',
    //     daddr: '37.80451,-122.45169',
    //     difrlg: 'd',
    //   },
    // })
    window.open(
      `https://maps.google.com/?saddr=current+location&daddr=24.8853599,74.6490578&dirflg=${directionFlag}`,
      '_blank'
    )
    // https://maps.google.com/?saddr=current+location&daddr=37.80451,-122.45169&dirflg=d
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '30rem',
        width: '50rem',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div id="map" style={{ height: '100%', width: '100%' }} ref={googlemap} />
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-around',
        }}
      >
        <DriveEtaIcon onClick={() => handleCarIconClick('d')} />
        <TrainIcon onClick={() => handleCarIconClick('r')} />
        <DirectionsWalkIcon onClick={() => handleCarIconClick('w')} />
        <PedalBikeIcon onClick={() => handleCarIconClick('b')} />
      </div>
    </div>
  )
}

export default Maps
