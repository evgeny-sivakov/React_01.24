import { useContext } from 'react'
import { QuizContext } from '../store/quiz-context'

import Button from './Button'

import classes from './QuizResult.module.css'

const RESULT_CONFIG = ['Category', 'Type', 'Time', 'Difficulty']

const QuizResult = () => {
  const { quizConfig, correctAnswers, remainingTime } = useContext(QuizContext)

  return (
    <div className={classes['quiz-result-grid']}>
      <p>Thank you for completing this quiz! Here are your results.</p>
      <p>
        You answered {correctAnswers} out of {quizConfig.questionsAmount} questions for{' '}
        {remainingTime} minute{remainingTime >= 1 ? 's' : ''}
      </p>
      <div className={classes['quiz-config-list']}>
        <h2>Quiz configuration:</h2>
        <ul>
          {RESULT_CONFIG.map((charecteristic) => {
            return (
              <li key={charecteristic} className={classes['category__name']}>
                {`${charecteristic}: `}
                <span>{quizConfig[charecteristic.toLowerCase()]}</span>
              </li>
            )
          })}
        </ul>
      </div>

      <a href="#">Choose another quiz</a>
      <Button text="Restart" />
    </div>
  )
}

export default QuizResult
