import React from 'react'
import styled from 'styled-components'

const ButtonCont = (props) => {

  const ButtonCont = styled.div`
    padding: 50px;
    display: flex;
    justify-content: center;
  `

  return (
    <ButtonCont>
      {props.children}
    </ButtonCont>
  )
}

export default ButtonCont