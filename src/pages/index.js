import React from 'react'
import { Link, graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'
import HomeTile from '../components/homeTile'

const Index = ({ data, location }) => {
  const tiles = data.contentfulStudioHome.tiles
  return (
    <Layout location={location}>
      {tiles.map((tile) => (
        <HomeTile key={tile.id} project={tile}></HomeTile>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulStudioHome {
      tiles {
        id
        tileImage {
          gatsbyImageData(layout: FULL_WIDTH)
          description
        }
        mobileTileImage {
          gatsbyImageData(layout: FULL_WIDTH)
          description
        }
        mobilePosterImage {
          gatsbyImageData(layout: FULL_WIDTH)
          description
        }
        videoPosterImage {
          gatsbyImageData(layout: FULL_WIDTH)
          description
        }
        type
        fontColor
        tileText {
          childMarkdownRemark {
            html
          }
        }
        vimeoId
        mobileVimeoId
      }
    }
  }
`

export const Head = () => <Seo title='Home' />

export default Index
