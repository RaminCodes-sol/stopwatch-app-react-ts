import { useEffect, useRef, useState } from "react"



const StopWatch_One = () => {
  const [time, setTime] = useState(0)
  let intervalTimer = useRef<any>()



  useEffect(() => {
    return () => clearInterval(intervalTimer.current)
  }, [])
  

  const handleTimer = () => {
    intervalTimer.current = setInterval(() => setTime(prevTime => prevTime + 1), 1000)
  }

  
  const startTimer = () => {
    handleTimer()
  }


  const pauseTimer = () => { 
    clearInterval(intervalTimer.current) 
  }

  
  const resetTimer = () => {
    clearInterval(intervalTimer.current)
    setTime(0)
  }


  return (
    <section className="stop-watch-one">
      <h1>{time}</h1>
      <div className="flex gap-3">
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </section>
  )
}

export default StopWatch_One