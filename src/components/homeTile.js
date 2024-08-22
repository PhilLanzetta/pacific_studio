import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Fade } from 'react-awesome-reveal'
import VideoHomeTile from './videoHomeTile'

const HomeTile = ({ project }) => {
  const { slug, title, subtitle } = project.caseStudy

  return (
    <Fade triggerOnce>
      <Link to={`/${slug}`} className='featured-tile'>
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
        <div className='featured-text-container'>
          <h3 className='featured-tile-title'>{title}</h3>
          <br />
          <h4 className='featured-tile-subtitle'>{subtitle}</h4>
        </div>
      </Link>
    </Fade>
  )
}

export default HomeTile
