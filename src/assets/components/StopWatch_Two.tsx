
import { useEffect, useRef, useState } from 'react'




const StopWatch_Two = () => {
  const [time, setTime] = useState(0)
  const [timerOn, setTimerOn] = useState(false)
  let intervalTimer = useRef<any>()


  useEffect(() => {
   

    if (timerOn) {
        intervalTimer.current = setInterval(() => setTime(prevTime => prevTime + 10), 10)
    } else {
        clearInterval(intervalTimer.current)
    }

    return () => clearInterval(intervalTimer.current)
  }, [timerOn])

  
  return (
    <section className='stop-watch-two'>

        {/*-------Timer-Numbers-------*/}
        <div>
            <h1>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</h1>
            <h1>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</h1>
            <h1>{("0" + ((time / 10) % 100)).slice(-2)}</h1>
        </div>

        {/*-------Timer-Buttons-------*/}
        <div className="flex gap-3">
            { !timerOn && time === 0 && <button onClick={() => setTimerOn(true)}>Start</button>}

            { timerOn && <button onClick={() => setTimerOn(false)}>Stop</button> }
             
            { !timerOn && time !== 0 && <button onClick={() => setTimerOn(true)}>Resume</button> }
            
            { !timerOn && time > 0 && <button onClick={() => setTime(0)}>Reset</button> }
        </div>

    </section>
  )
}

export default StopWatch_Two