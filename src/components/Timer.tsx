import { useState, useEffect, useRef, FC } from 'react'
import { useDispatch } from 'react-redux'

import { quizActions } from '../store/quiz'
import convertSecondsToDisplay from '../utils/convertSecondsToDisplay'

import classes from './Timer.module.css'

const twoDigits = (num: number): string => String(num).padStart(2, '0')

interface TimerProps {
  time: number
  onTimeExpired: () => void
}

const Timer: FC<TimerProps> = ({ time, onTimeExpired }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(time * 60)

  const { minutes, seconds } = convertSecondsToDisplay(secondsRemaining)

  const interval = useRef<number>()
  const dispatch = useDispatch()

  useEffect(() => {
    if (secondsRemaining > 0) {
      interval.current = window.setInterval(() => {
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
