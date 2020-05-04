import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Nav = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/components/checkout">Checkout Container</Link>
    <Link to="/components/heroContainer">HeroContainer</Link>
    <Link to="/components/pictureCont">Picture Container</Link>
    <Link to="/">Go back to the homepage</Link>

  </Layout>
)

export default Nav
