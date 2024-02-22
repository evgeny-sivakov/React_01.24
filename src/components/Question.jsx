import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Button from './Button'
import { quizActions } from '../store/quiz'

import classes from './Question.module.css'

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5)
}

const Question = ({ questions }) => {
  const [questionIndex, setQuestionIndex] = useState(0)
  const type = useSelector((state) => state.config.type)

  const { question, correct_answer, incorrect_answers } = questions[questionIndex]
  const answersToDisplay =
    type === 'multiple'
      ? shuffle([...incorrect_answers, correct_answer])
      : [...incorrect_answers, correct_answer]

  const dispatch = useDispatch()
  const navigate = useNavigate()

  function answerSubmitHandler(event) {
    event.preventDefault()

    const {
      target: { innerText }
    } = event

    if (innerText === correct_answer) {
      dispatch(quizActions.countCorrectAnswer())
    } else {
      dispatch(quizActions.countAnswer())
    }

    if (questions.length - 1 > questionIndex) {
      setQuestionIndex((prev) => prev + 1)
    } else {
      navigate('/results')
    }
  }

  return (
    <>
      <p className={classes.question}>{question}</p>
      <form className={classes.grid}>
        {answersToDisplay.map((answer) => (
          <Button
            onClick={answerSubmitHandler}
            className={classes.answerButton}
            key={answer}
            text={answer}
          />
        ))}
      </form>
    </>
  )
}

export default Question
