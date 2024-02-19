import { useSelector } from 'react-redux'

import classes from './QuestionCounter.module.css'

const QuestionCounter = ({ questionsLength }) => {
  const answers = useSelector((state) => state.quiz.answers)

  return <div className={classes['question-counter']}>{`${answers} / ${questionsLength}`}</div>
}

export default QuestionCounter
