import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" description='' />

      <Link to='navigation'>
        ui8.dev Components
      </Link>
       
    </Layout>
  )
}

export default IndexPage
