import { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { decode } from 'html-entities'

import Question from './Question'
import Button from './Button'
import Timer from './Timer'
import EndQuizModal from './EndQuizModal'
import QuestionCounter from './QuestionCounter'
import { useConfigData } from '../hooks/useConfigData'
import { quizActions } from '../store/quiz'

import classes from './Question.module.css' // split style file

const Quiz = () => {
  const [questions, setQuestions] = useState([
    {
      type: '',
      difficulty: '',
      category: '',
      question: '',
      correct_answer: '',
      incorrect_answers: []
    }
  ])
  const time = useSelector((state) => state.config.time)
  const correctAnswers = useSelector((state) => state.quiz.correctAnswers)
  const { url } = useConfigData()

  const modal = useRef()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error('Error!')
      }

      const responseData = await response.json()
      const newQuestions = responseData.results
      const decodedQuestions = newQuestions.map((question) => {
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
    modal.current.open()
  }

  function onTimerExpired() {
    dispatch(quizActions.reset(correctAnswers))
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
