import QuizResultPage from './pages/QuizResultPage'

/* const QUESTIONS = [
  {
    question: 'A flashing red traffic light signifies that a driver should do what?',
    answers: ['stop', 'speed up', 'proceed with caution', 'honk the horn']
  }
] */

const QUIZ_CONFIG = {
  questionsAmount: 10,
  category: 'Entertainment: Books',
  type: 'Multiple choise',
  duration: '2',
  difficulty: 'easy'
}

function App() {
  return <QuizResultPage time="1.25" result="5" quizConfig={QUIZ_CONFIG} />
}

export default App
