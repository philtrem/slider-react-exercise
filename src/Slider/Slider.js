import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import StyledKnob from './Knob'


const StyledSlider = styled(Slider)`
  background: #f0f0f0;
  display: flex;
  outline: 1px solid rgba(109,143,255,0.59);
  align-items: center;
  height: 1.5rem;
  width: 25rem;
`

function Slider({className}) {
  const [hasCapture, setHasCapture] = useState(false)
  const [positionX, setPositionX] = useState(0)
  const boundaryLeftRef = React.useRef()
  const boundaryRightRef = React.useRef()
  const sliderRef = React.useRef()
  useEffect(() => {
    boundaryLeftRef.current = sliderRef.current.getBoundingClientRect().left
    boundaryRightRef.current = sliderRef.current.getBoundingClientRect().right
    }, []
  )
  return (
    <div className={className}
         ref={sliderRef}
    >
      <StyledKnob sliderLeft={boundaryLeftRef.current}
                  sliderRight={boundaryRightRef.current}
                  hasCapture={hasCapture} positionX={positionX}
                  setHasCapture={setHasCapture} setPositionX={setPositionX}
      />
    </div>
  )
}

export default StyledSlider