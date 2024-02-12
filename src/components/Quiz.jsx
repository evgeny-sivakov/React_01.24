import { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { QuizContext } from '../store/quiz-context'

import Question from './Question'
import Button from './Button'
import Timer from './Timer'
import EndQuizModal from './EndQuizModal'

import classes from './Question.module.css' // split style file

const Quiz = () => {
  const { quizConfig } = useContext(QuizContext)
  const modal = useRef()
  const navigate = useNavigate()

  function endQuizHandler() {
    modal.current.open()
  }

  function onTimerExpired() {
    navigate('/results')
  }

  return (
    <>
      <EndQuizModal ref={modal} />
      <section className={classes.container}>
        <Timer onTimeExpired={onTimerExpired} time={quizConfig.time} />
        <div className={classes['question-counter']}>3/6</div>
        <Question />
        <Button onClick={endQuizHandler} className={classes.endButton} text="End Quiz!" />
      </section>
    </>
  )
}

export default Quiz
