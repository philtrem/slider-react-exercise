import React from 'react'
import styled from 'styled-components'
import StyledSlider from './Slider/Slider'

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

function App() {
  return (
    <Wrapper>
      <StyledSlider/>
    </Wrapper>
  )
}

export default App;
