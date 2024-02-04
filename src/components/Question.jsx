import { Button } from './Button'
import classes from './Question.module.css'

export const Question = ({ questions }) => {
  return (
    <div className={classes.container}>
      <p className={classes.timer}>{`Time left: ${2}min`}</p>
      <div className={classes['question-counter']}>3/6</div>
      <p className={classes.question}>{questions[0].question}</p>
      <div className={classes.grid}>
        {questions[0].answers.map((answer) => (
          <Button className={classes.answerButton} key={answer} text={answer} />
        ))}
      </div>
      <Button className={classes.endButton} text="End Quiz!" />
    </div>
  )
}
