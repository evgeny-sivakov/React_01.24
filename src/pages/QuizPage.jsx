import ContentCard from '../components/layouts/ContentCard'
import Quiz from '../components/Quiz'
import { AnimatePresence, motion } from 'framer-motion'

const QuizPage = () => {
  return (
    <AnimatePresence>
      <motion.section
        key="quizPage"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
        exit={{ x: -300, opacity: 0 }}
        className="main-section">
        <h1>Quiz Page!</h1>
        <ContentCard>
          <Quiz />
        </ContentCard>
      </motion.section>
    </AnimatePresence>
  )
}

export default QuizPage
