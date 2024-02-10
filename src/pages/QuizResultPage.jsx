import PageContent from '../components/layouts/PageContent'
import ContentCard from '../components/layouts/ContentCard'
import QuizResult from '../components/QuizResult'

const QuizResultPage = () => {
  return (
    <PageContent title="Quiz Result!">
      <ContentCard>
        <QuizResult />
      </ContentCard>
    </PageContent>
  )
}

export default QuizResultPage
