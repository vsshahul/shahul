import React from 'react'

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"

import CheckoutCont from "../../components/checkoutCont/checkoutCont"
import ButtonCont from '../../components/buttonCont/buttonCont'
import ButtonPrimary from '../../components/buttonCont/buttonPrimary/buttonPrimary'
import ButtonSecondary from "../../components/buttonCont/buttonSecondary/buttonSecondary"

const Checkout = () => {
  
  const href = 'http://f22labs.com/'

  return (
    <Layout>
      <SEO title="Home" />
      <CheckoutCont
          heading='Ready to check it out?'
          subHeading='Get started for free, no strings attached' >
          <ButtonCont>
            <ButtonPrimary href={href}>
              Primary Button
            </ButtonPrimary>
            <ButtonSecondary href={href} color='white'>
              Secondary Button
            </ButtonSecondary>
          </ButtonCont>
      </CheckoutCont>
    </Layout>
  )
}

export default Checkout
