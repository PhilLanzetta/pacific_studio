import React, { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { GatsbyImage } from 'gatsby-plugin-image'
import useOnScreen from '../utils/useOnScreen'
import ReactPlayer from 'react-player'

const HomeHero = ({ videoId, poster, landscape }) => {
  const [playing, setPlaying] = useState(false)
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
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='video-poster'
          >
            <GatsbyImage
              image={poster.gatsbyImageData}
              alt={poster.description}
              className='poster-image'
            ></GatsbyImage>
          </motion.div>
        )}
      </AnimatePresence>
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
          muted
          onStart={() => setIsLoading(false)}
        ></ReactPlayer>
      </div>
    </div>
  )
}

export default HomeHero
