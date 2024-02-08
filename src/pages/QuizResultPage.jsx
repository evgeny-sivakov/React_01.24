import PageContent from '../components/layouts/PageContent'
import ContentCard from '../components/layouts/ContentCard'
import QuizResult from '../components/QuizResult'

const QuizResultPage = ({ resultTime, result, quizConfig }) => {
  return (
    <PageContent title="Quiz Result!">
      <ContentCard>
        <QuizResult result={result} quizConfig={quizConfig} resultTime={resultTime} />
      </ContentCard>
    </PageContent>
  )
}

export default QuizResultPage
