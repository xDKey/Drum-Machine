const DramPad = ( { id, soundSrc, playSound } ) => {

    const padKey = id.toUpperCase()
    return (
      <div onClick={playSound} className='dram-pad' id={id}> {padKey}
        <audio className='clip' id={padKey} src={soundSrc}></audio>
      </div>
    )
  }

export default DramPad