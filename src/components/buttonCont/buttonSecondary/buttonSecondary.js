import React from 'react'
import styled from 'styled-components'

const ButtonSecondary = (props) => {

  const ButtonSecondary = styled.a`
    margin: 0 10px;
    padding: 14px;
    height: 49px;
    background-color: transparent;
    border: 1px solid ${props.color ? props.color : 'rebeccapurple'};;
    display: flex;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    outline: none;
    color: ${props.color ? props.color : 'rebeccapurple'};
    font-family: inherit;
    transition: 300ms;
    font-family: helvetica, sans-serif;
    text-transform: capitalize;
    &:hover{
      border-color:  #ff8896;
      color:  #ff8896;
    }
  `

  return (
    <ButtonSecondary href={props.href}>
      {props.children}
    </ButtonSecondary>
  )
}

export default ButtonSecondary
