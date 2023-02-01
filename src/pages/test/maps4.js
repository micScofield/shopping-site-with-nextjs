/* eslint-disable no-shadow */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  useLoadScript,
  InfoWindow,
} from '@react-google-maps/api'
import { useCallback, useEffect, useState } from 'react'

const center = {
  lat: 37.8011021,
  lng: -122.4507559,
}

// Keeping here for reference
// const shape = {
//   coords: [1, 1, 1, 20, 18, 20, 18, 1],
//   type: 'poly',
// }

const directionOptions = {
  origin: {
    lat: 37.8011021,
    lng: -122.4507559,
  },
  destination: { lat: 37.7935724, lng: -122.483638 },
  waypoints: [
    {
      location: { lat: 37.79757370000001, lng: -122.4588825 },
    },
    {
      location: { lat: 37.79188, lng: -122.45855 },
    },
  ],
  provideRouteAlternatives: false,
  travelMode: 'DRIVING',
  drivingOptions: {
    departureTime: new Date(/* now, or future date */),
    trafficModel: 'pessimistic',
  },
  // unitSystem: google.maps.UnitSystem.IMPERIAL,
}

const directionOptions2 = {
  origin: {
    lat: 37.79011,
    lng: -122.3939,
  },
  destination: {
    lat: 37.8011021,
    lng: -122.4507559,
  },
  waypoints: [
    {
      location: {
        lat: 37.793826,
        lng: -122.3978067,
      },
    },
    {
      location: {
        lat: 37.8020074,
        lng: -122.4217419,
      },
    },
  ],
  provideRouteAlternatives: false,
  travelMode: 'DRIVING',
  drivingOptions: {
    departureTime: new Date(/* now, or future date */),
    trafficModel: 'pessimistic',
  },
}

const MAP_MODES = {
  HYBRID: 'hybrid',
  TERRAIN: 'terrain',
  ROADMAP: 'roadmap',
  SATELLITE: 'satellite',
}

const DUMMY_VEHICLE_DATA = [
  {
    ID: 323,
    APCPercentage: 0,
    RouteId: 66,
    PatternId: 20009,
    Name: '1301',
    HasAPC: true,
    IconPrefix: '',
    DoorStatus: 0,
    Latitude: 37.79332936241385,
    Longitude: -122.39764167457491,
    Coordinate: {
      Latitude: 37.79332936241385,
      Longitude: -122.39764167457491,
    },
    Speed: 4,
    Heading: 'S',
    Updated: '3:53:03P',
    UpdatedAgo: '3s ago',
  },
  {
    ID: 510,
    APCPercentage: 0,
    RouteId: 66,
    PatternId: 20009,
    Name: '202',
    HasAPC: true,
    IconPrefix: '',
    DoorStatus: 1,
    Latitude: 37.79801293152075,
    Longitude: -122.44965926626766,
    Coordinate: {
      Latitude: 37.79801293152075,
      Longitude: -122.44965926626766,
    },
    Speed: 23,
    Heading: 'NW',
    Updated: '3:53:04P',
    UpdatedAgo: '2s ago',
  },
]

const MARKER_TYPES = {
  VEHICLE: 'vehicle',
  STOP: 'stop',
}

export default function Maps() {
  const [map, setMap] = useState(null)

  // for 2 route directions
  const [response, setResponse] = useState(null)
  const [response2, setResponse2] = useState(null)

  // for infowindow
  const [activeMarkerInfo, setActiveMarkerInfo] = useState(null)
  const [activeMarkerCoords, setActiveMarkerCoords] = useState(null)
  const [activeMarkerType, setActiveMarkerType] = useState(null)

  // state for traffic layer is maintained only to change text for the user
  const [showTrafficLayer, setShowTrafficLayer] = useState(false)
  const [trafficLayer, setTrafficLayer] = useState(null)

  // user can choose which routes to see on the map
  const [showRoutes, setShowRoutes] = useState({
    route1: true,
    route2: true,
  })

  // because we want to close menu accordion upon stop click
  const [expanded, setExpanded] = useState(false)

  // Real time vehicle data
  const [vehicleData, setVehicleData] = useState(null)

  // Load Script Call
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  })

  let svgMarker = null
  let svgMarker2 = null

  svgMarker = isLoaded && {
    path: 'M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z',
    fillColor: 'cream',
    fillOpacity: 0.8,
    strokeWeight: 0.2,
    scale: 1,
    anchor: new window.google.maps.Point(0, 20),
  }
  svgMarker2 = isLoaded && {
    path: 'M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z',
    fillColor: 'cream',
    fillOpacity: 0.8,
    strokeWeight: 0.2,
    scale: 1,
    anchor: new window.google.maps.Point(0, 20),
  }

  const onLoad = useCallback(async (map) => {
    console.log('Mounting map')
    setMap(map)

    const directionsService = new window.google.maps.DirectionsService()
    const trafficLayer = new window.google.maps.TrafficLayer()

    setTrafficLayer(trafficLayer)

    // Possible Refactor: Use Promise.all and make parallel requests
    const results = await directionsService.route(directionOptions)
    const results2 = await directionsService.route(directionOptions2)

    setResponse(results)
    setResponse2(results2)
  }, [])

  const onUnmount = useCallback(() => {
    console.log('Unmounting map')
    setMap(null)
  }, [])

  const markerClickHandler = (
    markerCoords,
    markerInfo,
    markerType = MARKER_TYPES.STOP
  ) => {
    let currentMarkerInfo
    if (markerInfo) {
      currentMarkerInfo = JSON.parse(JSON.stringify(markerInfo))
    } else setActiveMarkerInfo(null)

    console.log({ currentMarkerInfo })

    setActiveMarkerInfo(currentMarkerInfo)
    setActiveMarkerType(markerType)
    setActiveMarkerCoords(markerCoords)
  }

  // Menu feature
  const toggleShowTrafficHandler = () => {
    console.log({ trafficLayer })
    if (!trafficLayer) return

    if (showTrafficLayer) {
      trafficLayer.setMap(null)
      setShowTrafficLayer(false)
    } else {
      setShowTrafficLayer(true)
      trafficLayer.setMap(map)
    }
  }

  // Menu feature
  const setMapMode = (mode) => {
    map.setMapTypeId(mode)
  }

  // Menu feature
  const routesHandler = (value) => {
    setShowRoutes(value)
  }

  // Menu feature
  const findYourStopHandler = (stop) => {
    map.setCenter(stop.location)
    setExpanded(false)
    map.setZoom(16)

    setActiveMarkerCoords(stop.location)
  }

  // Polling request for vehicle data
  useEffect(async () => {
    // let res
    // const interval = setInterval(async () => {
    //   console.log('Fetching Data')
    //   res = await Promise.resolve(DUMMY_VEHICLE_DATA)
    //   if (res) setVehicleData(res)
    //   console.log({ res })
    // }, 60000)

    console.log('Fetching Data')
    const res = await Promise.resolve(DUMMY_VEHICLE_DATA)
    if (res) setVehicleData(res)
    console.log({ res })

    // return () => {
    //   clearInterval(interval)
    // }
  }, [])

  // Create markers for these vehicles and place them on maps. Add infowindows later
  const vehicleMarkers =
    isLoaded &&
    vehicleData &&
    vehicleData.map((vehicle, i) => (
      <Marker
        key={i}
        position={{
          lat: vehicle.Coordinate.Latitude,
          lng: vehicle.Coordinate.Longitude,
        }}
        icon={svgMarker2}
        onMouseOver={() =>
          markerClickHandler(
            {
              lat: vehicle.Coordinate.Latitude,
              lng: vehicle.Coordinate.Longitude,
            },
            vehicle,
            MARKER_TYPES.VEHICLE
          )
        }
        animation={window.google.maps.Animation.DROP}
      />
    ))

  return !isLoaded ? (
    <div>Loading...</div>
  ) : (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          zIndex: 1,
          top: '0.65rem',
          right: '1rem',
          cursor: 'pointer',
        }}
      >
        <Menu
          setExpanded={setExpanded}
          expanded={expanded}
          showTrafficLayer={showTrafficLayer}
          toggleShowTrafficHandler={toggleShowTrafficHandler}
          setMapMode={setMapMode}
          routesHandler={routesHandler}
          findYourStopHandler={findYourStopHandler}
        />
      </div>
      <GoogleMap
        mapContainerStyle={{
          width: '100vw',
          height: '75vh',
        }}
        options={{
          mapTypeControl: false,
          fullscreenControl: true,
          fullscreenControlOptions: {
            position: window.google.maps.ControlPosition.LEFT_TOP,
          },
        }}
        center={center}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {response !== null && showRoutes.route1 && (
          <CustomDirectionsRenderer
            activeMarkerCoords={activeMarkerCoords}
            markerClickHandler={markerClickHandler}
            svgMarker={svgMarker}
            markers={directionOptions}
            directionOptions={{
              directions: response,
              suppressMarkers: true,
              polylineOptions: {
                strokeColor: 'blue',
                strokeOpacity: 0.9,
              },
              preserveViewport: true,
            }}
          />
        )}
        {response2 !== null && showRoutes.route2 && (
          <CustomDirectionsRenderer
            activeMarkerCoords={activeMarkerCoords}
            markerClickHandler={markerClickHandler}
            svgMarker={svgMarker}
            markers={directionOptions2}
            directionOptions={{
              directions: response2,
              suppressMarkers: true,
              polylineOptions: {
                strokeColor: 'red',
                strokeOpacity: 0.9,
              },
              preserveViewport: true,
            }}
          />
        )}
        {activeMarkerCoords && (
          <InfoWindow
            position={activeMarkerCoords}
            onCloseClick={() => markerClickHandler(null)}
            options={{
              minWidth: 200,
              maxWidth: 300,
              ariaLabel: 'Info Window For Map Marker',
            }}
          >
            {activeMarkerType === MARKER_TYPES.VEHICLE ? (
              <div style={{ maxHeight: '120px', overflow: 'scroll' }}>
                <h2>Vehicle: {activeMarkerInfo?.Name}</h2>
                <h4>Heading: {activeMarkerInfo?.Heading}</h4>
                <p>Last Updated: {activeMarkerInfo?.UpdatedAgo}</p>
              </div>
            ) : (
              <div style={{ maxHeight: '120px', overflow: 'scroll' }}>
                <h2>Info Window Title</h2>
                <h4>Sub Title</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias maxime a, explicabo odit nemo est in, corrupti itaque
                  accusantium debitis saepe sed adipisci qui repellendus
                  repudiandae tempora, sit eos ab modi assumenda voluptate atque
                  ad perferendis deleniti? Minus, iusto voluptate!
                </p>
              </div>
            )}
          </InfoWindow>
        )}
        {vehicleMarkers}
      </GoogleMap>
    </div>
  )
}

function CustomDirectionsRenderer({
  markers,
  svgMarker,
  markerClickHandler,
  activeMarkerCoords,
  directionOptions,
}) {
  return (
    <>
      <DirectionsRenderer options={directionOptions} />
      {markers.waypoints.map((position, i) => (
        <Marker
          key={i}
          position={position.location}
          icon={svgMarker}
          optimised={false}
          title="Title"
          animation={window.google.maps.Animation.DROP}
          // onClick={() => markerClickHandler(position.location)}
          onMouseOver={() =>
            markerClickHandler(position.location, MARKER_TYPES.STOP)
          }
        >
          {/* {activeMarkerCoords === position.location && (
            <InfoWindow
              position={position.location}
              onCloseClick={() => markerClickHandler(null)}
            >
              <h4>Test Title</h4>
            </InfoWindow>
          )} */}
        </Marker>
      ))}
    </>
  )
}

function Menu({
  showTrafficLayer,
  toggleShowTrafficHandler,
  setMapMode,
  routesHandler,
  findYourStopHandler,
  expanded,
  setExpanded,
}) {
  const [checkboxChecked, setCheckboxChecked] = useState({
    route1: true,
    route2: true,
  })

  // Find your stop
  const [showSelectRouteMenu, setShowSelectRouteMenu] = useState(true)
  const [selectedRouteOption, setSelectedRouteOption] = useState(null)

  const checkboxHandler = (e) => {
    const newValue = { ...checkboxChecked }
    newValue[e.target.name] = e.target.checked
    setCheckboxChecked(newValue)
    routesHandler(newValue)
  }

  const stops = {
    Route2: [
      {
        name: 'Route 2 - Stop 1',
        location: {
          lat: 37.793826,
          lng: -122.3978067,
        },
      },
      {
        name: 'Route 2 - Stop 2',
        location: {
          lat: 37.8020074,
          lng: -122.4217419,
        },
      },
    ],
    Route1: [
      {
        name: 'Route 1 - Stop 1',
        location: { lat: 37.79757370000001, lng: -122.4588825 },
      },
      {
        name: 'Route 1 - Stop 2',
        location: { lat: 37.79188, lng: -122.45855 },
      },
    ],
  }

  const routes = [
    {
      name: 'Route1',
    },
    {
      name: 'Route2',
    },
  ]

  return (
    <div>
      <Accordion
        expanded={expanded}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={() => setExpanded(!expanded)}
        >
          <Typography>Menu</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button onClick={toggleShowTrafficHandler}>
            {!showTrafficLayer ? 'Show Traffic' : 'Hide Traffic'}
          </Button>
          <Accordion elevation={1}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Routes</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  name="route1"
                  label="Route 1"
                  onChange={(e) => checkboxHandler(e)}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  name="route2"
                  label="Route 2"
                  onChange={(e) => checkboxHandler(e)}
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={1}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Map Modes</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Button onClick={() => setMapMode(MAP_MODES.ROADMAP)}>
                Street Mode
              </Button>
              <br />
              <Button onClick={() => setMapMode(MAP_MODES.SATELLITE)}>
                Satellite Mode
              </Button>
              <br />
              <Button onClick={() => setMapMode(MAP_MODES.TERRAIN)}>
                Terrain Mode
              </Button>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={1}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Find Your Stop</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Button
                  variant="contained"
                  onClick={() => {
                    setShowSelectRouteMenu(true)
                    setSelectedRouteOption(null)
                  }}
                  sx={{ marginBottom: '0.5rem' }}
                >
                  Start Over
                </Button>
                {showSelectRouteMenu ? (
                  <Typography variant="title" align="center">
                    Select Route :
                  </Typography>
                ) : (
                  <Typography variant="title" align="center">
                    Select Stop :
                  </Typography>
                )}
              </div>
              {!selectedRouteOption ? (
                <>
                  {routes.map((route, i) => (
                    <Button
                      key={i}
                      onClick={() => {
                        setShowSelectRouteMenu(false)
                        setSelectedRouteOption(route.name)
                      }}
                    >
                      {route.name}
                    </Button>
                  ))}
                </>
              ) : (
                stops[selectedRouteOption]?.map((stop, i) => (
                  <Button key={i} onClick={() => findYourStopHandler(stop)}>
                    {stop.name}
                  </Button>
                ))
              )}
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

/*
Note on markers - Currently markers are displayed for waypoints only. To modify this behavior, look at the array method and make sure to include origin and destination too.
*/
