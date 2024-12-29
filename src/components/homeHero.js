import React, { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { GatsbyImage } from 'gatsby-plugin-image'
import useOnScreen from '../utils/useOnScreen'
import ReactPlayer from 'react-player'

const HomeHero = ({ videoId, poster }) => {
  const isSSR = typeof window !== 'undefined'
  const [width, setWidth] = useState(isSSR ? window.innerWidth : 1200)
  const [height, setHeight] = useState(
    isSSR ? (width < 700 ? window.outerHeight : window.innerHeight) : 800
  )
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

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 700) {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
      } else {
        setWidth(window.innerWidth)
      }
    }
    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  const minHorizontalHeight = (width / 9) * 16

  const minHorizontalWidth = (height * 16) / 9

  const minVerticalHeight = (width / 9) * 16

  const minVerticalWidth = (height * 16) / 9

  return (
    <div
      style={{ height: height, width: width }}
      className='hero-container'
      ref={elementRef}
    >
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
      {width < height / 1.5 ? (
        <div
          className='hero-video-container'
          style={{ height: height, width: width }}
        >
          <ReactPlayer
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              objectFit: 'cover',
              opacity: 1,
            }}
            height={height / width >= 1.77 ? height : minVerticalHeight}
            width={height / width >= 1.77 ? minVerticalWidth : width}
            url={`https://player.vimeo.com/video/${videoId}`}
            controls={false}
            playing={playing}
            playsinline
            loop
            muted
            onStart={() => setIsLoading(false)}
          ></ReactPlayer>
        </div>
      ) : (
        <div
          className='hero-video-container'
          style={{ height: height, width: width }}
        >
          <ReactPlayer
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              objectFit: 'cover',
              opacity: 1,
            }}
            height={height / width >= 0.56 ? height : minHorizontalHeight}
            width={height / width >= 0.56 ? minHorizontalWidth : width}
            url={`https://player.vimeo.com/video/${videoId}`}
            controls={false}
            playing={playing}
            playsinline
            loop
            muted
            onStart={() => setIsLoading(false)}
          ></ReactPlayer>
        </div>
      )}
    </div>
  )
}

export default HomeHero
