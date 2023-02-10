/* eslint-disable no-shadow */
import DriveEtaIcon from '@mui/icons-material/DriveEta'
import TrainIcon from '@mui/icons-material/Train'
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk'
import PedalBikeIcon from '@mui/icons-material/PedalBike'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import { useCallback, useState } from 'react'

const lat = 37.798293
const lng = -122.477901

const Maps = () => {
  const [map, setMap] = useState(null)

  // Load Script Call
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  })

  const onLoad = useCallback(async (map) => {
    setMap(map)
  }, [])

  const onUnmount = useCallback(() => {
    setMap(null)
  }, [])

  const handleDirectionClick = (directionFlag) => {
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
  }

  return !isLoaded ? (
    <div>Loading...</div>
  ) : (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <GoogleMap
        mapContainerStyle={{
          width: '100vw',
          height: '50vh',
          // height: '30rem',
          // width: '50rem',
        }}
        options={{
          mapTypeControl: false,
          fullscreenControl: true,
          fullscreenControlOptions: {
            position: window.google.maps.ControlPosition.LEFT_TOP,
          },
        }}
        center={{ lat, lng }}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker
          position={{ lat, lng }}
          optimised={false}
          title="Title"
          animation={window.google.maps.Animation.DROP}
        />
      </GoogleMap>
      <div
        style={{
          display: 'flex',
          width: '100vw',
          justifyContent: 'space-around',
          marginTop: '0.5rem',
        }}
      >
        <DriveEtaIcon onClick={() => handleDirectionClick('d')} />
        <TrainIcon onClick={() => handleDirectionClick('r')} />
        <DirectionsWalkIcon onClick={() => handleDirectionClick('w')} />
        <PedalBikeIcon onClick={() => handleDirectionClick('b')} />
      </div>
    </div>
  )
}

export default Maps
