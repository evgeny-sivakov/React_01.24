import { useNavigate } from 'react-router-dom'

import Button from './Button'

import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import convertSecondsToDisplay from '../utils/convertSecondsToDisplay'

import { configActions } from '../store/config'
import { quizActions } from '../store/quiz'

import classes from './QuizResult.module.css'


const QuizResult = () => {
  const { correctAnswers, answers, remainingTime } = useAppSelector((state) => state.quiz)
  const quizConfig = useAppSelector((state) => state.config)
  const { minutes, seconds } = convertSecondsToDisplay(quizConfig.time * 60 - remainingTime)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

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
          <li className={classes['category__name']}>
            Category: <span>{quizConfig.category}</span>
          </li>
          <li className={classes['category__name']}>
          Type: <span>{quizConfig.type}</span>
          </li>
          <li className={classes['category__name']}>
          Time: <span>{quizConfig.time}</span>
          </li>
          <li className={classes['category__name']}>
          Difficulty: <span>{quizConfig.difficulty}</span>
          </li>
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
