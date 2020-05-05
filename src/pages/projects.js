import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import '../page-styles/projects.scss'

const Nav = () => (
    <Layout>
    <SEO title="ui8.dev" />
    <article className='project'>
      <h1 className='h1'>
        <a href='https://www.ui8.dev/'>UI8</a> 
      </h1>
      <div className='link-cont'>
        <Link to="/components/checkout">Checkout Container</Link>
        <Link to="/components/heroContainer">HeroContainer</Link>
        <Link to="/components/pictureCont">Picture Container</Link>
        <Link to="/">Go back</Link>
      </div>
    </article>

  </Layout>
)

export default Nav
