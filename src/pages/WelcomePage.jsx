import Welcome from '../components/Welcome'
import ContentCard from '../components/layouts/ContentCard'

const WelcomePage = () => {
  return (
    <section className="main-section">
      <h1>Choose your quiz!</h1>
      <ContentCard>
        <Welcome />
      </ContentCard>
    </section>
  )
}

export default WelcomePage
