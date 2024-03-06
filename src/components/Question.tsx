import { FC, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from './Button'

import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { quizActions } from '../store/quiz'
import { updateStatisticsData } from '../store/statistics'
import { QuestionItem } from './types/components.types'

import classes from './Question.module.css'

function shuffle<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5)
}

interface QuestionProps {
  questions: QuestionItem[]
}

const Question: FC<QuestionProps> = ({ questions }) => {
  const [questionIndex, setQuestionIndex] = useState(0)
  const config = useAppSelector((state) => state.config)

  const { question, correct_answer, incorrect_answers } = questions[questionIndex]
  const answersToDisplay =
    config.type === 'multiple'
      ? shuffle([...incorrect_answers, correct_answer])
      : [...incorrect_answers, correct_answer]

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  function answerSubmitHandler(event: FormEvent) {
    event.preventDefault()

    const {
      currentTarget: { innerHTML }
    } = event

    if (innerHTML === correct_answer) {
      dispatch(quizActions.countCorrectAnswer())
    } else {
      dispatch(quizActions.countAnswer())
    }

    if (questionIndex < questions.length - 1) {
      setQuestionIndex((prev) => prev + 1)
    } else {
      dispatch(updateStatisticsData({ questions, quantity: questionIndex + 1 }))
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
