import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Header = ({ siteTitle }) => {

  const [nav] = useState([
    {
      label: 'About',
      href: '/'
    },
    {
      label: 'Contact',
      href: '/'
    },
    {
      label: 'Projects',
      href: '/'
    }
  ])
  return (
    <header >
      <div className='header-wrapper'>
        <div className='logo-cont'>
          <Link to="/" className='logo'>
            {siteTitle}
          </Link>
        </div>
        <nav className='Nav'>
          {
            nav.map((link, index) => (
              <Link 
              key={index} 
              to={link.href} 
              className='Nav-link'>
                {link.label}
              </Link>
              )
            )
          }
          <Link to='/' >
            About
        </Link>
        </nav>
        <div>
          <button>...</button>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
