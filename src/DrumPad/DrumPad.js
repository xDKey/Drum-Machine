import { useState, useEffect, useRef } from 'react'
import './DrumPad.css'

const DrumPad = ( { id, soundSrc, playSound, pressedKey } ) => {
  const [className, setClassName] = useState('drum-pad')
  const ref = useRef()
  const padKey = id.toUpperCase()
  useEffect(() => {
    setTimeout(() => setClassName('drum-pad'), 100)
  })

  if (pressedKey === id) playSound(ref.current)

  const isPress = () => {
    setClassName('drum-pad onpress')
  }

  const clickHandle = () => {
    playSound(ref.current)
  }
  

  return (
    <div onClick={clickHandle} className={className} id={id}> {padKey}
      <audio ref={ref} className='clip' onPlay={isPress} id={padKey} src={soundSrc}></audio>
    </div>
  )
}

export default DrumPad