import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Info = ({ data, location }) => {
  const { aboutText, awards, brandingServices, talksLectures, selectClients } =
    data.contentfulAboutPage
  return (
    <Layout location={location}>
      <div className='info-container'>
        <div className='info-column info-left-column'>
          <div
            className='info-text'
            dangerouslySetInnerHTML={{
              __html: aboutText.childMarkdownRemark.html,
            }}
          ></div>
          <div className='info-contact'>
            <div>
              <p className='info-contact-heading'>Office</p>
              <a
                href='https://maps.app.goo.gl/tx9VpgZexeT4MMAB8'
                target='_blank'
                rel='noreferrer'
              >
                New York <br />
                70 Flushing Avenue <br />
                Brooklyn, NY 11205
              </a>
            </div>
            <div>
              <p className='info-contact-heading'>Contact</p>
              <a href='mailto:studio@pacificpacific.pub'>
                studio@pacificpacific.pub
              </a>
              <a href='mailto:business@pacificpacific.pub'>
                business@pacificpacific.pub
              </a>
              <a
                href='https://www.instagram.com/pacific_pacific'
                target='_blank'
                rel='noreferrer'
              >
                Instagram: pacific_pacific
              </a>
            </div>
            <div>
              <p className='info-contact-heading'>Publishing</p>
              <a
                href='https://www.pacificpacific.pub'
                target='_blank'
                rel='noreferrer'
              >
                pacificpacific.pub
              </a>
            </div>
          </div>
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
            <div>
              <p className='info-heading'>Awards</p>
              <ul className='info-list'>
                {awards.map((award, index) => (
                  <li key={index}>{award}</li>
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
            <p className='info-heading'>Select Press & Interviews</p>
            <div
              className='info-list talks-lectures'
              dangerouslySetInnerHTML={{
                __html: talksLectures.childMarkdownRemark.html,
              }}
            ></div>
          </div>
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
      talksLectures {
        childMarkdownRemark {
          html
        }
      }
      selectClients {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
export const Head = () => <Seo title='About' />

export default Info
