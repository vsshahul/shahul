import React from 'react'
import styled from 'styled-components'

const ButtonPrimary = (props) => {

  const ButtonPrimary = styled.a`
    margin: 0 10px;
    padding: 14px;
    height: 49px;
    background-color: #ff8896;
    display: flex;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    outline: none;
    color: white;
    font-family: inherit;
    transition: 300ms;
    font-family: helvetica, sans-serif;
    text-transform: capitalize;

    &:hover {
      background-color: #ff6d7f;
    }

    @media only screen and (max-width: 600px){
      margin-bottom: 20px;
    }

  `

  return (
    <ButtonPrimary href={props.href}>
      {props.children}
    </ButtonPrimary>
  )
}

export default ButtonPrimary
