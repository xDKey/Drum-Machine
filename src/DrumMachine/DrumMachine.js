import { useState, useEffect } from 'react'
import { padList, keyList } from './padList'
import DrumPad from '../DrumPad/DrumPad'
import PowerToggle from '../PowerToggle/PowerToggle'
import './DrumMachine.css'


const DrumMachine = () => {
    const [isPowerOn, setIsPowerOn] = useState(true)

    useEffect(() => {
        const canPlaySound = (event) => {
          if ( keyList.includes(event.key) ) playSound(event)
        }

        window.addEventListener('keypress', canPlaySound)

        return () => window.removeEventListener('keypress', canPlaySound)
    }, [isPowerOn])

    const playSound = ({ target, key }) => {
        if (isPowerOn) {
          const currentIdx = key ? 
          '#' + key.toUpperCase():
          '#' + target.id.toUpperCase()
          
          const sound = document.querySelector(currentIdx)

          sound.load()
          sound.play()
        }
      }

    const drumPadList = padList.map(pad => <DrumPad id={pad.key} soundSrc={pad.soundSrc} key={pad.key} playSound={playSound} />)

    return (
      <div className="App">
        <div id='drum-machine'>
          <div id='display'>
            {drumPadList}
          </div>
          <div id='control'>
              <PowerToggle isPowerOn={isPowerOn} setIsPowerOn={setIsPowerOn}/>
          </div>
        </div>
      </div>
    );
}

export default DrumMachine

