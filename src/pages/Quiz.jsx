import { PageContent } from '../components/layouts/PageContent'
import { ContentCard } from '../components/layouts/ContentCard'
import { Question } from '../components/Question'

export const Quiz = ({ questions }) => {
  return (
    <PageContent title="Quiz page!">
      <ContentCard>
        <Question questions={questions} />
      </ContentCard>
    </PageContent>
  )
}
