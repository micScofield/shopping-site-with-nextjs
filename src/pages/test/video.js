import React, { useState } from 'react'
import YoutubePlayer from 'src/common/components/youtube/Player'
import YouTube from 'react-youtube'
import Image from 'next/image'

const opts = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 1,
    controls: 1,
    origin: 'localhost:3000',
    modestbranding: 1,
  },
}

// YT Iframe API

const App = () => {
  const [showFrame, setShowFrame] = useState(false)

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '300px',
          width: '100%',
        }}
      >
        {/* <YouTube
          videoId="UCL5w4xbInQ"
          id="UCL5w4xbInQ"
          // className={string}
          // iframeClassName={string}
          // style={object}
          title="UCL5w4xbInQ"
          loading="eager" // lazy / eager
          opts={opts}
          onReady={(e) => {
            console.log('Ready', e)
          }}
          // onPlay={func}
          // onPause={func}
          // onEnd={func}
          // onError={func}
          onStateChange={(e) => {
            console.log('On State Change', e)
            console.log(e.data)
            if (e.data === -1) {
              return e.target.playVideo()
            }
            return null
          }}
          // onPlaybackRateChange={func}
          // onPlaybackQualityChange={func}
        /> */}
        <YoutubePlayer videoId="UCL5w4xbInQ" />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '300px',
          width: '100%',
        }}
      >
        <YoutubePlayer videoId="UCL5w4xbInW" />
      </div>
    </>
  )
}

// Generic Iframe

// const App = () => {
//   const [showFrame, setShowFrame] = useState(false)
//   return (
//     <div>
//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <iframe
//           width="560"
//           height="315"
//           src="https://www.youtube.com/embed/UCL5w4xbInQ?origin=localhost:3000&autoplay=1&controls=1&modestbranding=1"
//           title="YouTube video player"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           allowFullScreen
//         />
//       </div>
//     </div>
//   )
// }

export default App
