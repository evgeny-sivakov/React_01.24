import { useSelector } from 'react-redux'

import StatisticBlock from './StatisticBlock'
import { useAppSelector } from '../hooks/reduxHooks'

import classes from './Statistics.module.css'

const Statistics = () => {
  const totalQuantity = useAppSelector((state) => state.statistics.totalQuantity)
  const correctAnswers = useAppSelector((state) => state.statistics.correctAnswers)
  const statistics = useAppSelector((state) => state.statistics)
  const { categories, difficulty, type } = statistics
  const statsToDisplay = [
    ['Categories', categories.byName],
    ['Difficulty', difficulty.byName],
    ['Type', type.byName]
  ]
  return (
    <section className={classes.container}>
      <article className={classes.article}>
        <p>
          You answered {correctAnswers} out of {totalQuantity} questions
        </p>
        <p>It is {correctAnswers / (totalQuantity * 0.01)}% of correct answers!</p>
      </article>

      <h1>See more detailed statistics below</h1>

      {statsToDisplay.map((stat) => (
        <StatisticBlock key={stat[0]} title={stat[0]} items={stat[1]} />
      ))}
    </section>
  )
}

export default Statistics
