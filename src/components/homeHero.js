import React, { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { GatsbyImage } from 'gatsby-plugin-image'
import useOnScreen from '../utils/useOnScreen'
import ReactPlayer from 'react-player'
import useWindowSize from '../utils/useWindowSize'

const HomeHero = ({ videoId, poster }) => {
  const { height, width } = useWindowSize()
  const [playing, setPlaying] = useState(0)
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
            style={
              height / width >= 1.77
                ? { minHeight: height, minWidth: minVerticalWidth }
                : { minHeight: minVerticalHeight, minWidth: width }
            }
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
            style={
              height / width >= 0.56
                ? { minHeight: height, minWidth: minHorizontalWidth }
                : { minHeight: minHorizontalHeight, minWidth: width }
            }
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
