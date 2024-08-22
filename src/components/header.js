import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/logo.svg'

const Header = () => {
  return (
    <header>
      <div>
        <Link to='/info'>Information</Link>
      </div>
      <div className='header-logo'>
        <Link to='/'>
          <img src={Logo} alt='Pacific'></img>
        </Link>
      </div>
      <div></div>
    </header>
  )
}

export default Header
