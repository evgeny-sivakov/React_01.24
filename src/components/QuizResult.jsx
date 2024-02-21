import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Button from './Button'
import { configActions } from '../store/config'
import { quizActions } from '../store/quiz'

import convertSecondsToDisplay from '../utils/convertSecondsToDisplay'

import classes from './QuizResult.module.css'

const RESULT_CONFIG = ['Category', 'Type', 'Time', 'Difficulty']

const QuizResult = () => {
  const { correctAnswers, answers, remainingTime } = useSelector((state) => state.quiz)
  const quizConfig = useSelector((state) => state.config)
  const { minutes, seconds } = convertSecondsToDisplay(quizConfig.time * 60 - remainingTime)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onConfigHandler = () => {
    dispatch(configActions.reset())
    dispatch(quizActions.reset())
    navigate('/')
  }

  const onRestartHandler = () => {
    dispatch(quizActions.reset())
    navigate('/quiz')
  }

  return (
    <div className={classes['quiz-result-grid']}>
      <p>Thank you for completing this quiz! Here are your results.</p>
      <p>
        You answered {correctAnswers} out of {answers} questions for {minutes} minute
        {minutes === 1 ? '' : 's'} {seconds} second{seconds === 1 ? '' : 's'}
      </p>
      <div className={classes['quiz-config-list']}>
        <h2>Quiz configuration:</h2>
        <ul>
          {RESULT_CONFIG.map((characteristic) => {
            return (
              <li key={characteristic} className={classes['category__name']}>
                {`${characteristic}: `}
                <span>{quizConfig[characteristic.toLowerCase()]}</span>
              </li>
            )
          })}
        </ul>
      </div>

      <Button
        className={classes['config-button']}
        onClick={onConfigHandler}
        text="Choose another quiz"
      />
      <Button className={classes['restart-button']} onClick={onRestartHandler} text="Restart" />
    </div>
  )
}

export default QuizResult
