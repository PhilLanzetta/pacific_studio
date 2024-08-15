import React from 'react'
import { Link, graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'
import FeaturedTile from '../components/featuredTile'

const Index = ({ data, location }) => {
  const featuredProjects = data.contentfulHomePage.featuredProjects
  return (
    <Layout location={location}>
      {featuredProjects.map((project) => (
        <FeaturedTile key={project.id} project={project}></FeaturedTile>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulHomePage {
      featuredProjects {
        id
        featuredImage {
          gatsbyImageData
          description
        }
        caseStudy {
          title
          subtitle
          slug
        }
      }
    }
  }
`

export const Head = () => <Seo title='Home' />

export default Index
