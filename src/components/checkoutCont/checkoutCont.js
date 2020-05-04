import React from 'react'
import styled from 'styled-components'
import BG from './Bg_checkout.svg'

const CheckoutCont = (props) => {

  const CheckoutCont = styled.div`
    margin: auto;
    height: 449px;
    object-fit: contain;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    color: white;
    background-image: url(${BG});
    background-color: #201d5e;
    border-radius: 40px;
  `
  const H2 = styled.h2`
    font-family: $primaryfont;
    color: $white;
    font-size: 40px;
    padding-top: 32px;
  `
  const H4 = styled.h4`
    font-family: $primaryfont_light;
    color: $white;
    font-size: 20px;
    font-weight: 100;
    opacity: .8;
    padding-top: 32px;
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
