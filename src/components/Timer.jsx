import { useState, useEffect, useRef } from 'react'

import classes from './Timer.module.css'

const twoDigits = (num) => String(num).padStart(2, '0')

const Timer = ({ time }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(time * 60)

  const secondsToDisplay = secondsRemaining % 60
  const minutesToDisplay = (secondsRemaining - secondsToDisplay) / 60

  const interval = useRef()

  useEffect(() => {
    if (secondsRemaining > 0) {
      interval.current = setInterval(() => {
        setSecondsRemaining((prev) => prev - 1)
      }, 1000)
    }

    return () => {
      clearInterval(interval.current)
    }
  }, [secondsRemaining])

  return (
    <div className={classes.timer}>
      {twoDigits(minutesToDisplay)}:{twoDigits(secondsToDisplay)}
    </div>
  )
}

export default Timer
