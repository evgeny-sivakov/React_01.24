import { useContext } from 'react'
import { QuizContext } from '../store/quiz-context'

import Question from './Question'
import Button from './Button'
import Timer from './Timer'

import classes from './Question.module.css' // split style file

const Quiz = () => {
  const { quizConfig } = useContext(QuizContext)

  return (
    <div className={classes.container}>
      <Timer time={quizConfig.time} />
      <div className={classes['question-counter']}>3/6</div>
      <Question />
      <Button className={classes.endButton} text="End Quiz!" />
    </div>
  )
}

export default Quiz
