import { createContext } from 'react'

export const QuizContext = createContext({
  quizConfig: {
    questionsAmount: 0,
    category: '',
    type: '',
    time: '',
    difficulty: ''
  },
  remainingTime: 0,
  changeRemainingTime: () => {},
  answers: 0,
  countAnswer: () => {},
  correctAnswers: 0,
  countCorrectAnswer: () => {}
})
