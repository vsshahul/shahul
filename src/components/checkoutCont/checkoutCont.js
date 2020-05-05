import React from 'react'
import styled from 'styled-components'
import BG from './Bg_checkout.svg'

const CheckoutCont = (props) => {

  const CheckoutCont = styled.div`
    height: 449px;
    width: 980px;
    object-fit: contain;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: white;
    background-image: url(${BG});
    background-color: #201d5e;
    border-radius: 40px;
    @media only screen and (max-width: 600px){
      height: 300px;
      border-radius: 20px;
      margin:4px;
    }

  `
  const H2 = styled.h2`
    font-family: helvetica;
    color: white;
    font-size: 40px;
    padding-top: 32px;
    @media only screen and (max-width: 600px){
    padding-top: 25px;
    font-size:30px;
    }
  `
  const H4 = styled.h4`
    font-family: $primaryfont_light;
    color: $white;
    font-size: 20px;
    font-weight: 100;
    opacity: .8;
    padding-top: 32px;
    @media only screen and (max-width: 600px){
    font-size: 16px;
    }
  `
  return (
    <CheckoutCont>
      <H2>{props.heading}</H2>
      <H4>{props.subHeading}</H4>
      {props.children}
    </CheckoutCont>
  )
}

export default CheckoutCont
