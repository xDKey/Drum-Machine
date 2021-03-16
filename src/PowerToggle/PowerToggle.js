import { useState, useEffect } from 'react'
import './PowerToggle.css'

const PowerToggle = ({ isPowerOn, setIsPowerOn }) => {
    const [style, setStyle] = useState({justifyContent: 'flex-start'})

    useEffect(() => {
      isPowerOn ? 
        setStyle({justifyContent: 'flex-start'})
        :
        setStyle({justifyContent: 'flex-end'})
    }, [isPowerOn])
    
    return (
        <div className='toggle' onClick={() => setIsPowerOn(!isPowerOn)}>
          POWER
          <div className='toggle_outer' style={style}>
              <div className='toggle_inner'></div>
          </div>
        </div>
    )
}
export default PowerToggle