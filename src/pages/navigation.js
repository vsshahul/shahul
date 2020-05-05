import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const Nav = () => (
  <Layout>
    <SEO title="ui8.dev" />
    <h1>
      <a href='https://www.ui8.dev/'>ui8.dev</a> Components</h1>
    <div>
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

  </Layout>
)

export default Nav
