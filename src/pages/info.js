import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { GatsbyImage } from 'gatsby-plugin-image'

const Info = ({ data, location }) => {
  const {
    aboutText,
    brandingServices,
    selectClients,
    lizHeadshot,
    adamHeadshot,
    lizBio,
    adamBio,
  } = data.contentfulAboutPage
  return (
    <Layout location={location}>
      <div className='info-page'></div>
      <div className='info-container'>
        <div className='info-column info-left-column'>
          <div
            className='info-text'
            dangerouslySetInnerHTML={{
              __html: aboutText.childMarkdownRemark.html,
            }}
          ></div>
        </div>
        <div className='info-column'>
          <div className='info-right-column'>
            <div>
              <p className='info-heading'>Services</p>
              <ul className='info-list'>
                {brandingServices.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className='info-right-column'>
            <p className='info-heading'>Select Clients</p>
            <ul
              className='info-list'
              dangerouslySetInnerHTML={{
                __html: selectClients.childMarkdownRemark.html.replace(
                  /href/g,
                  "target='_blank' rel='noreferrer' href"
                ),
              }}
            ></ul>
          </div>
          <div className='info-right-column'>
            <p>
              Office
              <br />
              <a
                href='https://maps.app.goo.gl/8vXst9aKP9nn7rJu5'
                target='_blank'
                rel='noreferrer'
              >
                161 Water St, Suite 2203
                <br />
                New York, NY 10038
              </a>
            </p>
            <p>
              Contact <br />
              <a href='mailto:studio@pacificpacific.pub'>
                studio@pacificpacific.pub
              </a>
              <br />
              <a href='mailto:business@pacificpacific.pub'>
                business@pacificpacific.pub
              </a>
            </p>
            <p>
              Social <br />
              <a
                href='https://www.instagram.com/studio__pacific'
                target='_blank'
                rel='noreferrer'
              >
                Instagram: studio__pacific
              </a>
              <br />
              <a
                href='https://www.linkedin.com/company/pacificpacific/'
                target='_blank'
                rel='noreferrer'
              >
                LinkedIn: @pacific_pacific
              </a>
            </p>
            <p>
              <a
                href='https://www.pacificpacific.pub'
                target='_blank'
                rel='noreferrer'
              >
                Pacific Books &rarr;
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className='info-horizontal-bar'></div>
      <div className='info-partners-container'>
        <div className='info-text'>
          <p>Partners</p>
        </div>
        <div className='info-partners'>
          <div>
            <GatsbyImage
              image={lizHeadshot.gatsbyImageData}
              alt={lizHeadshot.description}
            ></GatsbyImage>
            <p className='info-caption'>Photo: Ned Rogers</p>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: lizBio.childMarkdownRemark.html,
            }}
            className='info-bio'
          ></div>
          <div>
            <GatsbyImage
              image={adamHeadshot.gatsbyImageData}
              alt={adamHeadshot.description}
            ></GatsbyImage>
            <p className='info-caption'>Photo: Nick Brinley</p>
          </div>
          <div
            className='info-bio'
            dangerouslySetInnerHTML={{
              __html: adamBio.childMarkdownRemark.html,
            }}
          ></div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    contentfulAboutPage(title: { eq: "Studio About Page" }) {
      aboutText {
        childMarkdownRemark {
          html
        }
      }
      awards
      brandingServices
      id
      selectClients {
        childMarkdownRemark {
          html
        }
      }
      lizBio {
        childMarkdownRemark {
          html
        }
      }
      adamBio {
        childMarkdownRemark {
          html
        }
      }
      adamHeadshot {
        gatsbyImageData
        description
      }
      lizHeadshot {
        gatsbyImageData
        description
      }
    }
  }
`
export const Head = () => <Seo title='About' />

export default Info
