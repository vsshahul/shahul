import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <Link to='navigation'>
        Nav
      </Link>
       
    </Layout>
  )
}

export default IndexPage
