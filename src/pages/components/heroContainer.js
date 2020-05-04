import React from 'react'
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import HeroCont from '../../components/heroCont/heroCont'

import ButtonCont from '../../components/buttonCont/buttonCont'
import ButtonPrimary from '../../components/buttonCont/buttonPrimary/buttonPrimary'
import ButtonSecondary from "../../components/buttonCont/buttonSecondary/buttonSecondary"


const HeroContainer = () => {

  const heading = 'Reach the next billion'
  const subHeading = 'We connect brands with targeted audience through nano influencer marketing. Save time and improve performance.Take the guesswork out of Influencer analysis with data-driven audience insights, managed in one easy to use platform.'
  const href = 'http://f22labs.com/'
  
  return (
    <Layout>
    <SEO title="Home" />
    <HeroCont heading={heading} subHeading={subHeading} >
      <ButtonCont>
        <ButtonPrimary href={href}>
          Primary Button
          </ButtonPrimary>
        <ButtonSecondary href={href}>
          Secondary Button
          </ButtonSecondary>
      </ButtonCont>
    </HeroCont>
  </Layout>
    
  )
}

export default HeroContainer
