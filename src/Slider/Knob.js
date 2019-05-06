import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'

const StyledKnob = styled(Knob)`
  left: ${props => props.positionX}px;
  position: relative;
  background: #3c3c3c;
  border-radius: 50%;
  height: 1.5rem;
  width: 1.5rem;
`


function Knob({className, sliderLeft, sliderRight, hasCapture, setHasCapture, setPositionX, positionX}) {
  const knobRef = useRef()
  const offSetRef = useRef()
  const locationRef = useRef()
  const onDown = e => {
    const knobLeft = knobRef.current.getBoundingClientRect().left
    offSetRef.current = e.pageX - knobLeft
    locationRef.current = knobLeft - positionX + offSetRef.current
    e.target.setPointerCapture(e.pointerId)
    setHasCapture(true)
  }
  const onMove = e => {
    const knobWidth = knobRef.current.getBoundingClientRect().width
    const boundaryRight = sliderRight - sliderLeft
    let nextPosition = e.pageX - locationRef.current
    if (nextPosition < 0) {
      nextPosition = 0
    } else if (nextPosition > boundaryRight - knobWidth) {
       nextPosition = boundaryRight - knobWidth
    }
    hasCapture && setPositionX(nextPosition)
  }
  const onUp = e => {
    e.target.releasePointerCapture(e.pointerId)
    setHasCapture(false)
  }
  return (
    <div className={className}
         ref={knobRef}
         onPointerDown={onDown}
         onPointerMove={onMove}
         onPointerUp={onUp}
    > </div>
  )
}

export default StyledKnob