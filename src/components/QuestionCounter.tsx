import { FC } from 'react'

import { useAppSelector } from '../hooks/reduxHooks'

import classes from './QuestionCounter.module.css'

interface QuestionCounterProps {
  questionsLength: number
}

const QuestionCounter: FC<QuestionCounterProps> = ({ questionsLength }) => {
  const answers = useAppSelector((state) => state.quiz.answers)

  return <div className={classes['question-counter']}>{`${answers} / ${questionsLength}`}</div>
}

export default QuestionCounter
