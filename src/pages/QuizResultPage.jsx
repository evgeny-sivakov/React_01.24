import ContentCard from '../components/layouts/ContentCard'
import QuizResult from '../components/QuizResult'

const QuizResultPage = () => {
  return (
    <section className="main-section">
      <h1>Result Page!</h1>
      <ContentCard>
        <QuizResult />
      </ContentCard>
    </section>
  )
}

export default QuizResultPage
