import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroCont from '../components/heroCont/heroCont'
import ButtonCont from '../components/buttonCont/buttonCont'
import ButtonPrimary from '../components/buttonCont/buttonPrimary/buttonPrimary'
import ButtonSecondary from "../components/buttonCont/buttonSecondary/buttonSecondary"
import CheckoutCont from "../components/checkoutCont/checkoutCont"
import PictureCont from '../components/pictureCont/pictureCont'

import DemoImg from '../components/pictureCont/assets/avatar.jpg'
import DemoImg1 from '../components/pictureCont/assets/avatar_1.jpg'

const IndexPage = () => {

  const heading = 'Reach the next billion'
  const subHeading = 'We connect brands with targeted audience through nano influencer marketing. Save time and improve performance.Take the guesswork out of Influencer analysis with data-driven audience insights, managed in one easy to use platform.'
  const href = 'http://f22labs.com/'
  
  const myPosts = [
    {
      imgUrl: DemoImg
    },    {
      imgUrl: DemoImg1
    },    {
      imgUrl: DemoImg
    },    {
      imgUrl: DemoImg1
    }
  ]

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

      <PictureCont 
       h='We’ve fetched these pictures from your instagram.' 
       sH='Choose at least 10 pictures that you want to show'
       myPosts={myPosts}
       />
       
    </Layout>
  )
}

export default IndexPage
