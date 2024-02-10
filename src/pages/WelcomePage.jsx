import Welcome from '../components/Welcome'
import PageContent from '../components/layouts/PageContent'
import ContentCard from '../components/layouts/ContentCard'

const inputs = [
  {
    id: 'number',
    options: ['5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
    label: 'How many questions?',
    key: 'i0'
  },
  {
    id: 'category',
    options: ['Entertainment: Books', 'Entertainment: Music', 'Entertainment: Film'],
    label: 'Choose a category',
    key: 'i1'
  },
  {
    id: 'difficulty',
    options: ['Easy', 'Medium', 'Hard'],
    label: 'Choose a difficulty',
    key: 'i2'
  },
  {
    id: 'type',
    options: ['Multiple Choice', 'True / False'],
    label: 'Choose type of answer',
    key: 'i3'
  },
  {
    id: 'time',
    options: ['1 minute', '2 minutes', '5 minutes'],
    label: 'Define quiz duration',
    key: 'i4'
  }
]

const WelcomePage = () => {
  return (
    <PageContent title="Choose Your Quiz!">
      <ContentCard>
        <Welcome inputs={inputs} />
      </ContentCard>
    </PageContent>
  )
}

export default WelcomePage
