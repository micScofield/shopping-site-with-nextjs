import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'

const YoutubePlayer = ({ videoId }) => {
  const playerRef = useRef(null)
  const [loading, setLoading] = useState(true)
  const [loadingPercentage, setLoadingPercentage] = useState(0)
  const [showPauseText, setShowPauseText] = useState(false)

  useEffect(() => {
    let interval
    if (loadingPercentage < 1) {
      interval = setInterval(() => {
        setLoadingPercentage(loadingPercentage + 0.1)
      }, 100)
    }

    return () => {
      clearInterval(interval)
    }
  }, [loadingPercentage])

  useEffect(() => {
    console.log({ playerRef: playerRef })
    // Load the YouTube Iframe API script
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    let player
    const onPlayerReady = (event) => {
      console.log('Player ready')
      setLoading(false)
      playerRef.current = event.target
      event.target.playVideo()
    }
    const onPlayerStateChange = (event) => {
      console.log({ stageChange: event.data })
    }
    const onPlayerError = (event) => {
      console.log({ error: event })
    }
    window.onYouTubeIframeAPIReady = () => {
      player = new window.YT.Player(playerRef.current, {
        height: '100%',
        width: '100%',
        videoId,
        playerVars: {
          autoplay: 1,
          modestbranding: 1,
          controls: 0,
          disableKb: 1,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
          onError: onPlayerError,
        },
        origin: 'localhost:3000',
      })
    }

    return () => {
      // Cleanup the YouTube player when the component unmounts
      // if (player) {
      //   player.destroy()
      // }
      // window.onYouTubeIframeAPIReady = null
    }
  }, [videoId])

  // const [isAutoplaySupported, setIsAutoplaySupported] = useState(false)

  // useEffect(() => {
  //   const video = document.createElement('video')

  //   const checkAutoplaySupport = async () => {
  //     try {
  //       await video.play()
  //       setIsAutoplaySupported(true)
  //     } catch (error) {
  //       console.error('Autoplay is not allowed:', error)
  //       setIsAutoplaySupported(false)
  //     }
  //   }

  //   checkAutoplaySupport()

  //   return () => {
  //     video.remove()
  //   }
  // }, [])

  // console.log(isAutoplaySupported)
  console.log('rendering')

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        height: '100%',
        width: '100%',
      }}
    >
      <div
        id="youtube-player-container"
        style={{
          display: loading ? 'none' : 'block',
          position: 'relative',
          height: '100%',
          width: '100%',
        }}
      >
        <div id="youtube-player" ref={playerRef} />
        <div
          style={{
            position: 'absolute',
            top: '75%',
            left: '75%',
            transform: 'translate(-50%, -50%)',
            border: '2px solid #1F4D25',
            padding: '0.5rem 1rem',
            borderRadius: '25px',
            zIndex: 100,
            color: '#1F4D25',
            background: '#A5CC7A',
            cursor: 'pointer',
          }}
          onClick={() => {
            if (showPauseText) {
              playerRef.current.pauseVideo()
            } else {
              playerRef.current.playVideo()
            }
            setShowPauseText(!showPauseText)
          }}
        >
          {showPauseText ? 'Pause' : 'Play'}
        </div>
      </div>
      {/* <div id="youtube-player" ref={playerRef} /> */}
      {loading && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            overflow: 'hidden',
            height: '39px',
            width: '32px',
            WebkitMaskImage:
              'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjggMjA3Ij4KICA8cGF0aCBkPSJNMTQ5LjU4IDQyLjc1MjFDMTM5Ljg4OSAzOS4wODg1IDEzNS4yNDcgMzUuMTA4NyAxMzMuMzk0IDI3LjExODJDMTMzLjEyOCAyNS45NzI5IDEzMi4xMDkgMjUuMTU1MyAxMzAuOTMyIDI1LjE1NTNIMTIzLjM4QzEyMi4zOTIgMjUuMTU1MyAxMjEuNDc3IDI0LjU4ODQgMTIxLjA4MyAyMy42ODIyQzExNi42MjIgMTMuNDM5NiAxMDMuMjY5IDAgODMuMTc4IDBDNjUuNzAzNCAwIDUwLjU3OTEgMTIuOTYxNCA0Ni41NjkzIDIzLjUzOTVDNDYuMTk4OCAyNC41MTUxIDQ1LjI2NDkgMjUuMTUxNCA0NC4yMTkxIDI1LjE1MTRIMzcuMDYwMkMzNS44OTQ3IDI1LjE1MTQgMzQuODc1OSAyNS45NTM2IDM0LjYwNTcgMjcuMDkxMkMzMi44MTUgMzQuNjQ1OSAyOC4wNzIgMzkuMSAxOC40MTYyIDQyLjc1MjFDNy45NjU0NSA0Ni43MDQ5IDAgNTMuNzE5NyAwIDcwLjQ2NDFWMjA0Ljk0NUMwIDIwNi4wNzggMC45MTg0OTcgMjA2Ljk5NiAyLjA1MzExIDIwNi45OTZIMTY1Ljk0N0MxNjcuMDgxIDIwNi45OTYgMTY4IDIwNi4wNzggMTY4IDIwNC45NDVWNzAuNDY0MUMxNjggNTMuNzE1OCAxNjAuMDM1IDQ2LjcwNDkgMTQ5LjU4NCA0Mi43NTIxSDE0OS41OFoiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSIjRkZGRkZGIi8+Cjwvc3ZnPg==)',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskSize: '100% 100%',
          }}
        >
          <Image
            src="/assets/pres1.svg"
            alt="Logo spinner"
            layout="fill"
            style={{
              transition: 'all 1s ease',
              background: `linear-gradient(to top, #A5CC7A ${
                loadingPercentage * 100
              }%, transparent 0)`,
              // opacity: `calc(1 - ${loadingPercentage})`,
            }}
          />
        </div>
      )}
    </div>
  )
}

export default YoutubePlayer
