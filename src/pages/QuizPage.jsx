import ContentCard from '../components/layouts/ContentCard'
import Quiz from '../components/Quiz'

const QuizPage = () => {
  return (
    <section className="main-section">
      <h1>Quiz Page!</h1>
      <ContentCard>
        <Quiz />
      </ContentCard>
    </section>
  )
}

export default QuizPage
