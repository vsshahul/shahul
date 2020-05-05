import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const Nav = () => (
    <Layout>
    <SEO title="ui8.dev" />
    <article className='project'>
      <h1 className=''>
        <a href='https://www.ui8.dev/'>UI8</a> 
      </h1>
      <div className='link-cont'>
        <ul>
          <li>
            <Link to="/components/checkout">Checkout Container</Link>
          </li>
          <li>
            <Link to="/components/heroContainer">HeroContainer</Link>
          </li>
          <li>
            <Link to="/components/pictureCont">Picture Container</Link>
          </li>
          <li>
            <Link to="/">Go back</Link>
          </li>
        </ul>
      </div>
    </article>

  </Layout>
)

export default Nav
