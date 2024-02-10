import { QuizContextProvider } from './store/QuizContextProvider'
import QuizResultPage from './pages/QuizResultPage'

function App() {
  return (
    <QuizContextProvider>
      <QuizResultPage />
    </QuizContextProvider>
  )
}

export default App
