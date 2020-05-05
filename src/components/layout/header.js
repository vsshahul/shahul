import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Header = ({ siteTitle }) => {

  const [nav] = useState([
    {
      label: 'About',
      href: '/about'
    },
    {
      label: 'Contact',
      href: '/contact'
    },
    {
      label: 'Projects',
      href: '/projects'
    }
  ])
  return (
    <header className='header'>
      <div className='header-wrapper'>
        <div className='logo-cont'>
          <Link to="/" className='logo'>
            {siteTitle}
          </Link>
        </div>
        <nav className='nav'>
          {
            nav.map((link, index) => (
              <Link 
              key={index} 
              to={link.href} 
              className='nav-link'>
                {link.label}
              </Link>
              )
            )
          }
        </nav>
        <div className='menu-cont'>
          <button className='menu-button'>...</button>
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
