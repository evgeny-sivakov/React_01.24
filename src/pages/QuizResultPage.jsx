import PageContent from '../components/layouts/PageContent'
import ContentCard from '../components/layouts/ContentCard'
import QuizResult from '../components/QuizResult'

const QuizResultPage = ({ time, result, quizConfig }) => {
  return (
    <PageContent title="Quiz Result!">
      <ContentCard>
        <QuizResult result={result} quizConfig={quizConfig} time={time} />
      </ContentCard>
    </PageContent>
  )
}

export default QuizResultPage
