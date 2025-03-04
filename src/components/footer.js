import React, { useState } from 'react'
import { Link } from 'gatsby'
import { AiOutlineClose } from 'react-icons/ai'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import CustomForm from './customForm'
import Logo from '../images/logo.svg'

const postUrl = process.env.GATSBY_MAIL_KEY

const Footer = () => {
  const [emailOpen, setEmailOpen] = useState(false)

  return (
    <footer>
      <div className='footer-link-container'>
        <div>
          <p>Office:</p>
          <a>
            161 Water St, Suite 2203
            <br />
            New York, NY 10038
          </a>
        </div>
        <div>
          <p>Contact:</p>{' '}
          <a href='mailto:studio@pacificpacific.pub'>
            studio@pacificpacific.pub
          </a>{' '}
          <br />
          <a href='mailto:business@pacificpacific.pub'>
            business@pacificpacific.pub
          </a>
        </div>
        <div>
          <p>Social:</p>
          <a
            href='https://www.instagram.com/pacific_pacific'
            target='_blank'
            rel='noreferrer'
          >
            Instagram: @pacific_pacific
          </a>{' '}
          <br />
          <a
            href='https://www.linkedin.com/company/pacificpacific/'
            target='_blank'
            rel='noreferrer'
          >
            LinkedIn: @pacific_pacific
          </a>
        </div>

        <button onClick={() => setEmailOpen(true)} className='newsletter-button'>
          <p>Newsletter:</p>
          <p>Sign Up Here</p>
        </button>
        <div>&copy; Pacific {new Date().getFullYear()}</div>
      </div>
      <div className={`email-pop-up ${emailOpen ? 'email-pop-up-show' : ''}`}>
        <div className='email-pop-up-container'>
          <button className='email-pop-up-close'>
            <AiOutlineClose
              onClick={() => setEmailOpen(false)}
            ></AiOutlineClose>
          </button>
          <MailchimpSubscribe
            url={postUrl}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
                setEmailOpen={setEmailOpen}
              ></CustomForm>
            )}
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
