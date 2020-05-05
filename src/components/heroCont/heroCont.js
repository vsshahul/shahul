import React from 'react'
import styled from 'styled-components'

const HeroCont = (props) => {

  const Heading = styled.h2`
    padding-top: 64px;
    color: inherit;
    font-size: 46px;
    font-weight: 600;
    font-family: helvetica, sans-serif;
    text-align: center;
    @media only screen and (max-width: 600px){
      font-size: 36px;
    }
  `

  const Paragraph = styled.p`
    max-width: 980px;
    margin: auto;
    padding: 14px 20px;
    text-align: center;
    font-size: 16px;
    color: inherit;
    font-family: helvetica, sans-serif;
    line-height: 1.6;

    @media only screen and (max-width: 600px){
      font-size: 14px;
      padding: 14px 30px;
    }
  `
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `

  return <Wrapper>
    <Heading>{props.heading}</Heading>
    <Paragraph>
      {props.subHeading}
    </Paragraph>
    {props.children}
  </Wrapper>
}

export default HeroCont