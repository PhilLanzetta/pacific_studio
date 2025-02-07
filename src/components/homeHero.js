import React, { useState, useEffect, useRef } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import useOnScreen from '../utils/useOnScreen'
import ReactPlayer from 'react-player'

const HomeHero = ({ videoId, poster, landscape, fontColor, sound }) => {
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const elementRef = useRef(null)
  const isOnScreen = useOnScreen(elementRef)

  useEffect(() => {
    if (isOnScreen) {
      setPlaying(true)
    } else {
      setPlaying(false)
    }
  }, [isOnScreen])

  return (
    <div className='hero-container' ref={elementRef}>
      <GatsbyImage
        image={poster.gatsbyImageData}
        alt={poster.description}
        className={`poster-image ${!isLoading && 'fade-away'}`}
      ></GatsbyImage>
      <div className='hero-video-container'>
        <ReactPlayer
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover',
            opacity: 1,
          }}
          url={`https://player.vimeo.com/video/${videoId}`}
          width={'100vw'}
          height={
            landscape === true ? 'calc(100vw * 9 / 16)' : 'calc(100vw * 16 / 9)'
          }
          controls={false}
          playing={playing}
          playsinline
          loop
          muted={muted}
          volume={1}
          onPlay={() => setIsLoading(false)}
          onError={() => setIsLoading(true)}
        ></ReactPlayer>
      </div>
      {sound === true && (
        <button
          onClick={() => setMuted(!muted)}
          className='home-muted-button'
          style={{ color: fontColor }}
        >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10.906 14.541'>
            <g id='Group_61' data-name='Group 61' transform='translate(0)'>
              <path
                id='Path_2'
                data-name='Path 2'
                d='M-3496-19960.061h3.378l4.777-4.1h1.053v14.541h-1.229l-2.73-2.23-1.872-1.52H-3496Z'
                transform='translate(3496 19964.156)'
                fill='currentColor'
              />
              <ellipse
                id='Ellipse_5'
                data-name='Ellipse 5'
                cx='2.337'
                cy='2.337'
                rx='2.337'
                ry='2.337'
                transform='translate(6.232 4.674)'
                fill='currentColor'
              />
              <ellipse
                id='Ellipse_6'
                data-name='Ellipse 6'
                cx='2.337'
                cy='2.337'
                rx='2.337'
                ry='2.337'
                transform='translate(6.232 4.674)'
                fill='currentColor'
              />
            </g>
          </svg>
        </button>
      )}
    </div>
  )
}

export default HomeHero
