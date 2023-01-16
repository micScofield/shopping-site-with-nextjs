import { Loader } from '@googlemaps/js-api-loader'
import { Typography } from '@mui/material'
import { useEffect, useRef } from 'react'
import DriveEtaIcon from '@mui/icons-material/DriveEta'
import TrainIcon from '@mui/icons-material/Train'
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk'
import PedalBikeIcon from '@mui/icons-material/PedalBike'
import { useRouter } from 'next/router'

const lat = 37.798297
const lng = -122.467171

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
        zoom: 14,
      })

      /* Markers
        Two examples - 1. Basic, 2. Complex
      */

      const image =
        'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'

      const svgMarker = {
        path: 'M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z',
        fillColor: 'cream',
        fillOpacity: 0.8,
        strokeWeight: 0,
        rotation: 0,
        scale: 2,
        anchor: new google.maps.Point(0, 20),
      }

      // complex icons -> use beaches object as source of truth for multiple markers on the map. See setMarkers function for ref
      const beaches = [
        ['Bondi Beach', 37.797297, -122.467171, 4],
        ['Coogee Beach', 37.798297, -122.457171, 5],
        ['Cronulla Beach', 37.798897, -122.477171, 3],
        ['Manly Beach', 37.795297, -122.467171, 2],
        ['Maroubra Beach', 37.799297, -122.457171, 1],
      ]

      function setMarkers(mapObject) {
        // Adds markers to the map.
        // Marker sizes are expressed as a Size of X,Y where the origin of the image
        // (0,0) is located in the top left of the image.
        // Origins, anchor positions and coordinates of the marker increase in the X
        // direction to the right and in the Y direction down.
        const img = {
          url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          // This marker is 20 pixels wide by 32 pixels high.
          size: new google.maps.Size(20, 32),
          // The origin for this image is (0, 0).
          origin: new google.maps.Point(0, 0),
          // The anchor for this image is the base of the flagpole at (0, 32).
          anchor: new google.maps.Point(0, 32),
        }
        // Shapes define the clickable region of the icon. The type defines an HTML
        // <area> element 'poly' which traces out a polygon as a series of X,Y points.
        // The final coordinate closes the poly by connecting to the first coordinate.
        const shape = {
          coords: [1, 1, 1, 20, 18, 20, 18, 1],
          type: 'poly',
        }

        /**
         * Create an info window to share between markers.
         * The first marker receives the initial focus when tab is pressed. Use arrow keys to move between markers.
         * Press tab again to cycle through the map controls.
         */
        const infoWindow = new google.maps.InfoWindow()

        for (let i = 0; i < beaches.length; i++) {
          const beach = beaches[i]

          const markerRef = new google.maps.Marker({
            position: { lat: beach[1], lng: beach[2] },
            map: mapObject,
            // icon: img, // prefer if you want to scale the size of the marker
            shape: shape,
            title: beach[0],
            zIndex: beach[3],
            label: `${i + 1}`,
            optimized: false, // Set to false if you need accessibility, true when dealing with a lot of markers but tab focus won't be there
            // draggable: true, // make markers draggable, loses new value on refresh though
            animation: google.maps.Animation.DROP,
          })

          // Add a click listener for each marker, and set up the info window.
          markerRef.addListener('click', () => {
            infoWindow.close()
            infoWindow.setContent(markerRef.getTitle())
            infoWindow.open(markerRef.getMap(), markerRef)
          })
        }
      }

      // Marker setup for basic setup
      const marker = new google.maps.Marker({
        position: { lat, lng },
        // map,
        title: 'Marker Title', // tooltip on hover
        label: 'P', // sits inside marker icon
        // icon: image, // If you want to change default marker icon to an image
        // icon: svgMarker, // If you want to change default marker icon to a svg vector
      })

      // markers can be set explicitly too without passing the map object to Marker constructor. ex: marker.setMap(map)

      // Basic
      // marker.setMap(map)

      // Complex
      setMarkers(map)
    })
  })

  const handleCarIconClick = (directionFlag) => {
    window.open(
      `https://maps.google.com/?saddr=current+location&daddr=24.8853599,74.6490578&dirflg=${directionFlag}`,
      '_blank'
    )
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '35rem',
        width: '50rem',
      }}
    >
      <div id="map" style={{ height: '100%', width: '100%' }} ref={googlemap} />
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-around',
          paddingTop: '1rem',
        }}
      >
        <DriveEtaIcon onClick={() => handleCarIconClick('d')} />
        <TrainIcon onClick={() => handleCarIconClick('r')} />
        <DirectionsWalkIcon onClick={() => handleCarIconClick('w')} />
        <PedalBikeIcon onClick={() => handleCarIconClick('b')} />
      </div>
      <div style={{ marginTop: '2rem' }}>
        <Typography variant="h3">Title</Typography>
        <Typography variant="h6">Sub Title</Typography>
        <Typography variant="body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          inventore voluptatum nesciunt aperiam consequuntur unde, dolores
          possimus ad ipsa quibusdam sint? Asperiores nemo animi pariatur
          laboriosam explicabo ea fuga earum veniam similique, excepturi qui
          consectetur impedit ipsa, soluta consequatur nobis!
        </Typography>
      </div>
    </div>
  )
}

export default Maps
