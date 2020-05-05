import React from 'react'
import styled from 'styled-components'

const ButtonCont = (props) => {

  const ButtonCont = styled.div`
    padding: 50px;
    display: flex;
    justify-content: center;
    font-size: 18px;
    @media only screen and (max-width: 600px){
      font-size: 14px;
      padding:10px
    }
  `

  return (
    <ButtonCont>
      {props.children}
    </ButtonCont>
  )
}

export default ButtonCont