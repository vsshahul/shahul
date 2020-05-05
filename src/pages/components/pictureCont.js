import React from 'react'
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"

import PictureCont from '../../components/pictureCont/pictureCont'

import DemoImg from '../../components/pictureCont/assets/avatar.jpg'
import DemoImg1 from '../../components/pictureCont/assets/avatar_1.jpg'

const HeroContainer = () => {
    
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

    <PictureCont 
    h='We’ve fetched these pictures from your instagram.' 
    sH='Choose at least 10 pictures that you want to show'
    myPosts={myPosts}
    />
    
    </Layout>
  )
}

export default HeroContainer
