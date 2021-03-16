import { useState, useEffect } from 'react'
import './DramPad.css'

const DramPad = ( { id, soundSrc, playSound } ) => {
  const [className, setClassName] = useState('dram-pad')
  const padKey = id.toUpperCase()
  
  useEffect(() => {
    setTimeout(() => setClassName('dram-pad'), 100)
  }, [className])

  const isPress = () => {
    setClassName('dram-pad onpress')

  }


  return (
    <div onClick={playSound} className={className} id={id}> {padKey}
      <audio className='clip' onPlay={isPress} id={padKey} src={soundSrc}></audio>
    </div>
  )
}

export default DramPad