import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Fade } from 'react-awesome-reveal'

const FeaturedTile = ({ project }) => {
  const { slug, title, subtitle } = project.caseStudy
  return (
    <Fade triggerOnce>
      <Link to={`/${slug}`} className='featured-tile'>
        <GatsbyImage
          image={project.featuredImage.gatsbyImageData}
          alt={project.featuredImage.description}
          className='featured-image'
        ></GatsbyImage>
        <div className='featured-text-container'>
          <h3 className='featured-tile-title'>{title}</h3>
          <h4 className='featured-tile-subtitle'>{subtitle}</h4>
        </div>
      </Link>
    </Fade>
  )
}

export default FeaturedTile
