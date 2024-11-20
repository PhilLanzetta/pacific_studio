import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Fade } from 'react-awesome-reveal'
import VideoHomeTile from './videoHomeTile'

const HomeTile = ({ project }) => {
  return (
    <Fade triggerOnce>
      <div className='featured-tile'>
        {project.type === 'Image' && (
          <GatsbyImage
            image={project.tileImage.gatsbyImageData}
            alt={project.tileImage.description}
            className='featured-image'
          ></GatsbyImage>
        )}
        {project.type === 'Video' && (
          <VideoHomeTile project={project}></VideoHomeTile>
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
