import Button from './Button'

import classes from './QuizResult.module.css'

const QuizResult = ({ result, quizConfig, time }) => {
  return (
    <div className={classes['quiz-result-grid']}>
      <p>Thank you for completing this quiz! Here are your results.</p>
      <p>
        You answered {result} out of {quizConfig.questionsAmount} questions for {time} minutes
      </p>
      <div className={classes['quiz-config-list']}>
        <h2>Quiz configuration:</h2>
        <ul>
          <li className={classes['category__name']}>
            Category: <span>{quizConfig.category}</span>
          </li>
          <li className={classes['category__name']}>
            Type: <span>{quizConfig.type}</span>
          </li>
          <li className={classes['category__name']}>
            Time: <span>{quizConfig.duration}</span>
          </li>
          <li className={classes['category__name']}>
            Difficulty: <span>{quizConfig.difficulty}</span>
          </li>
        </ul>
      </div>

      <a href="#">Choose another quiz</a>
      <Button text="Restart" />
    </div>
  )
}

export default QuizResult
