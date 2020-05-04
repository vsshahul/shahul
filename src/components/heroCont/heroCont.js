import React from 'react'
import styled from 'styled-components'

const HeroCont = (props) => {

  const Heading = styled.h2`
    padding-top: 65px;
    color: inherit;
    font-size: 46px;
    font-weight: 900;
    font-family: helvetica, sans-serif;
    text-align: center
  `

  const Paragraph = styled.p`
    padding-top: 19px;
    text-align: center;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.56;
    color: inherit;
    font-family: helvetica, sans-serif;
  `

  return <>
    <Heading className='heading' >{props.heading}</Heading>
    <Paragraph className='sub-heading'>
      {props.subHeading}
    </Paragraph>
    {props.children}
  </>
}

export default HeroCont