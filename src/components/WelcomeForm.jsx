import { useNavigate } from 'react-router-dom'

import SelectInput from './SelectInput'
import Button from './Button'

import classes from './WelcomeForm.module.css'

const WelcomeForm = ({ inputs }) => {
  const navigate = useNavigate()
  function quizConfigSubmitHandler(event) {
    event.preventDefault()
    navigate('quiz')
  }
  return (
    <form className={classes.form} onSubmit={quizConfigSubmitHandler}>
      {inputs.map(({ id, options, label, key }) => (
        <SelectInput key={key} id={id} options={options} label={label} />
      ))}
      <Button className={classes.button} text="Start Quiz" type="submit"></Button>
    </form>
  )
}

export default WelcomeForm
