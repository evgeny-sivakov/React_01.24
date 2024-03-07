import ContentCard from '../components/layouts/ContentCard'
import QuizResult from '../components/QuizResult'
import { AnimatePresence, motion } from 'framer-motion'

const QuizResultPage = () => {
  return (
    <AnimatePresence>
      <motion.section
        key="quizResultPage"
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
        exit={{ x: 300, opacity: 0, transition: { duration: 0.5 } }}
        className="main-section">
        <h1>Result Page!</h1>
        <ContentCard>
          <QuizResult />
        </ContentCard>
      </motion.section>
    </AnimatePresence>
  )
}

export default QuizResultPage
