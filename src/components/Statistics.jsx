import { useSelector } from 'react-redux'

const Statistics = () => {
  const totalQuantity = useSelector((state) => state.statistics.totalQuantity)
  const correctAnswers = useSelector((state) => state.statistics.correctAnswers)
  return (
    <div>
      <p>Number of questions: {totalQuantity}</p>
      <p>Correct answers: {correctAnswers}</p>
    </div>
  )
}

export default Statistics
