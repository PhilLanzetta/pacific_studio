import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/logo.svg'
import HideOnScroll from './hideOnScroll'

const Header = ({ location }) => {
  console.log(location)
  const info = location?.pathname === '/info/'
  return (
    <header>
      <div>
        {info ? <Link to='/'>Close</Link> : <Link to='/info'>Information</Link>}
      </div>
      <div className='header-logo'>
        <HideOnScroll>
          <Link to='/'>
            <img src={Logo} alt='Pacific'></img>
          </Link>
        </HideOnScroll>
      </div>
      <div></div>
    </header>
  )
}

export default Header
