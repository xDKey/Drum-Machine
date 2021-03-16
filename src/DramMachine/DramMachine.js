import { useEffect } from 'react'
import {padList, keyList} from './padList'
import DramPad from '../DramPad/DramPad'
import './DramMachine.css'

const DramMachine = () => {
    useEffect(() => {
        window.addEventListener('keypress', (event) => {
            const key = event.key
            if ( keyList.includes(key) ) playSound(event)
          })
    }, [])


    const playSound = ({ target, key }) => {
        const currentIdx = key ? 
        '#' + key.toUpperCase():
        '#' + target.id.toUpperCase()
        
        const sound = document.querySelector(currentIdx)

        sound.play()
      }

    const dramPadList = padList.map(pad => <DramPad id={pad.key} soundSrc={pad.soundSrc} key={pad.key} playSound={playSound} />)

    return (
      <div className="App">
        <div id='drum-machine'>
          <div id='display'>
            {dramPadList}
          </div>
        </div>
      </div>
    );
}

export default DramMachine

