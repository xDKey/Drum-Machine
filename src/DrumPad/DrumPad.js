import { useState, useEffect } from 'react'
import './DrumPad.css'

const DrumPad = ( { id, soundSrc, playSound } ) => {
  const [className, setClassName] = useState('drum-pad')
  const padKey = id.toUpperCase()
  
  useEffect(() => {
    setTimeout(() => setClassName('drum-pad'), 100)
  }, [className])

  const isPress = () => {
    setClassName('drum-pad onpress')
  }


  return (
    <div onClick={playSound} className={className} id={id}> {padKey}
      <audio className='clip' onPlay={isPress} id={padKey} src={soundSrc}></audio>
    </div>
  )
}

export default DrumPad