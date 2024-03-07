import { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { decode } from 'html-entities'

import Question from './Question'
import Button from './Button'
import Timer from './Timer'
import EndQuizModal from './EndQuizModal'
import QuestionCounter from './QuestionCounter'

import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { useConfigData } from '../hooks/useConfigData'
import { quizActions } from '../store/quiz'
import { QuestionItem } from './types/components.types'
import { ModalHandle } from './EndQuizModal'

import classes from './Question.module.css'

const Quiz = () => {
  const [questions, setQuestions] = useState<QuestionItem[]>([
    {
      type: 'boolean',
      difficulty: 'easy',
      category: '',
      question: '',
      correct_answer: '',
      incorrect_answers: []
    }
  ])

  const time = useAppSelector((state) => state.config.time)
  const { url } = useConfigData()

  const modal = useRef<ModalHandle>(null)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error('Error!')
      }

      const responseData = await response.json()
      const newQuestions = responseData.results
      const decodedQuestions = newQuestions.map((question: QuestionItem) => {
        const decodedCategory = decode(question.category)
        const decodedQuestion = decode(question.question)
        const decodedCorrectAnswer = decode(question.correct_answer)
        const decodedIncorrectAnswers = question.incorrect_answers.map((item) => decode(item))
        return {
          ...question,
          correct_answer: decodedCorrectAnswer,
          incorrect_answers: decodedIncorrectAnswers,
          question: decodedQuestion,
          category: decodedCategory
        }
      })
      setQuestions(decodedQuestions)
    }
    fetchQuestions().catch((error) => console.log(error))
  }, [url])

  function endQuizHandler() {
    modal!.current!.open()
  }

  function onTimerExpired(): void {
    dispatch(quizActions.reset())
    navigate('/results')
  }

  return (
    <>
      <EndQuizModal ref={modal} />
      <section className={classes.container}>
        <Timer onTimeExpired={onTimerExpired} time={time} />
        <QuestionCounter questionsLength={questions.length} />
        <Question questions={questions} />
        <Button onClick={endQuizHandler} className={classes.endButton} text="End Quiz!" />
      </section>
    </>
  )
}

export default Quiz
