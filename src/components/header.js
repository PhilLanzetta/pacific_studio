import React from 'react'
import { Link } from 'gatsby'
import HideOnScroll from './hideOnScroll'
import Logo from '../images/logo.svg'

const Header = () => {
  return (
    <HideOnScroll>
        <Link to='/about'>Information</Link>
        <Link to='/' className='header-logo'>
          <img src={Logo} alt='Pacific'></img>
        </Link>
    </HideOnScroll>
  )
}

export default Header
