import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Fade } from 'react-awesome-reveal'
import VideoHomeTile from './videoHomeTile'
import useWindowSize from '../utils/useWindowSize'
import HomeHero from './homeHero'

const HomeTile = ({ project }) => {
  const { height, width } = useWindowSize()
  const isLandscape = height < width
  return (
    <Fade triggerOnce>
      <div className='featured-tile'>
        {isLandscape && project.tileImage && (
          <GatsbyImage
            image={project.tileImage.gatsbyImageData}
            alt={project.tileImage.description}
            className='featured-image'
          ></GatsbyImage>
        )}
        {!isLandscape && project.mobileTileImage && (
          <GatsbyImage
            image={project.mobileTileImage.gatsbyImageData}
            alt={project.mobileTileImage.description}
            className='featured-image'
          ></GatsbyImage>
        )}
        {isLandscape && project.vimeoId && (
          <HomeHero
            videoId={project.vimeoId}
            poster={project.videoPosterImage}
          ></HomeHero>
        )}
        {!isLandscape && project.mobileVimeoId && (
          <HomeHero
            videoId={project.mobileVimeoId}
            poster={project.mobilePosterImage}
          ></HomeHero>
        )}
        <div
          className='featured-text-container'
          style={{ color: project.fontColor }}
          dangerouslySetInnerHTML={{
            __html: project.tileText?.childMarkdownRemark?.html,
          }}
        ></div>
      </div>
    </Fade>
  )
}

export default HomeTile
