import { useState, useRef, useEffect } from 'react'
import { padList } from './padList'
import DrumPad from '../DrumPad/DrumPad'
import PowerToggle from '../PowerToggle/PowerToggle'
import './DrumMachine.css'


const DrumMachine = () => {
    const [isPowerOn, setIsPowerOn] = useState(true)
    const [pressedKey, setPressedKey] = useState(null)
    
    const mainWindow = useRef()

    useEffect(() => {
      mainWindow.current.focus()
    }, [])

    const playSound = (sound) => {
      if (isPowerOn) {
          sound.currentTime = 0
          sound.play()
        }
        setTimeout(() => setPressedKey(null), 1)
        
    }

    const drumPadList = padList.map(pad => <DrumPad id={pad.key} soundSrc={pad.soundSrc} key={pad.key} playSound={playSound} pressedKey={pressedKey}/>)

    return (
      <div className="App" >
        <div id='drum-machine' onKeyPress={(e) => setPressedKey(e.key)} tabIndex={0} ref={mainWindow}>
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

