import { SelectInput } from './SelectInput'

import classes from './WelcomeForm.module.css'

export const WelcomeForm = ({ inputs }) => {
  return (
    <form className={classes.form}>
      {inputs.map(({ id, options, label, key }) => (
        <SelectInput key={key} id={id} options={options} label={label} />
      ))}
      <button className={classes.button} type="submit">
        Start Quiz
      </button>
    </form>
  )
}
