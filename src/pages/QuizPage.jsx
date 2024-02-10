import PageContent from '../components/layouts/PageContent'
import ContentCard from '../components/layouts/ContentCard'
import Quiz from '../components/Quiz'

const QuizPage = () => {
  return (
    <PageContent title="Quiz page!">
      <ContentCard>
        <Quiz />
      </ContentCard>
    </PageContent>
  )
}

export default QuizPage
