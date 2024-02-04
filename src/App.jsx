//import { Welcome } from './pages/Welcome'
import { Quiz } from './pages/Quiz'

const QUESTIONS = [
  {
    question: 'A flashing red traffic light signifies that a driver should do what?',
    answers: ['stop', 'speed up', 'proceed with caution', 'honk the horn']
  }
]

function App() {
  return <Quiz questions={QUESTIONS} />
}

export default App
