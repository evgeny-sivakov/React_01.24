import WelcomeForm from '../components/WelcomeForm'
import PageContent from '../components/layouts/PageContent'
import ContentCard from '../components/layouts/ContentCard'

import classes from './Welcome.module.css'

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

const Welcome = () => {
  return (
    <PageContent title="Choose Your Quiz!">
      <ContentCard>
        <div className={classes.container}>
          <WelcomeForm inputs={inputs} />
          <a className={classes.link} href="#">
            See my statistics
          </a>
        </div>
      </ContentCard>
    </PageContent>
  )
}

export default Welcome
