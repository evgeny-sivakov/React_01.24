import { useReducer } from 'react'
import { QuizContext } from './quiz-context'

const defaultQuizState = {
  answers: 0,
  correctAnswers: 0,
  remainingTime: 0
}
function quizReducer(state, action) {
  if (action.type === 'CORRECT_ANSWER') {
    const updatedCorrectAnswers = (state.correctAnswers += 1)
    const updatedAnswers = (state.answers += 1)
    return {
      ...state,
      correctAnswers: updatedCorrectAnswers,
      answers: updatedAnswers
    }
  }

  if (action.type === 'ANSWER') {
    const updatedAnswers = (state.answers += 1)
    return {
      ...state,
      answers: updatedAnswers
    }
  }

  return defaultQuizState
}

export const QuizContextProvider = ({ children }) => {
  const [quizState, dispatchQuizAction] = useReducer(quizReducer, defaultQuizState)

  const changeRemainingTime = () => {
    dispatchQuizAction()
  }

  const countCorrectAnswer = () => {
    dispatchQuizAction({ type: 'CORRECT_ANSWER' })
  }

  const countAnswer = () => {
    dispatchQuizAction({ type: 'ANSWER' })
  }

  const quizContextValue = {
    quizConfig: {
      questionsAmount: 10,
      category: 'Entertainment: Music',
      type: 'Multiple choise',
      time: '5',
      difficulty: 'easy'
    },
    remainingTime: quizState.remainingTime,
    changeRemainingTime: changeRemainingTime,
    correctAnswers: quizState.correctAnswers,
    countCorrectAnswer: countCorrectAnswer,
    answers: quizState.answers,
    countAnswer: countAnswer
  }
  return <QuizContext.Provider value={quizContextValue}>{children}</QuizContext.Provider>
}
