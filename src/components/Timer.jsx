import { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

import { quizActions } from '../store/quiz'
import convertSecondsToDisplay from '../utils/convertSecondsToDisplay'

import classes from './Timer.module.css'

const twoDigits = (num) => String(num).padStart(2, '0')

const Timer = ({ time, onTimeExpired }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(time * 60)

  const { minutes, seconds } = convertSecondsToDisplay(secondsRemaining)

  const interval = useRef()
  const dispatch = useDispatch()

  useEffect(() => {
    if (secondsRemaining > 0) {
      interval.current = setInterval(() => {
        setSecondsRemaining((prev) => prev - 1)
      }, 1000)
    } else {
      onTimeExpired()
    }

    return () => {
      dispatch(quizActions.setRemainingTime(secondsRemaining))
      clearInterval(interval.current)
    }
  }, [secondsRemaining, onTimeExpired, dispatch])

  return (
    <div className={classes.timer}>
      {twoDigits(minutes)}:{twoDigits(seconds)}
    </div>
  )
}

export default Timer
