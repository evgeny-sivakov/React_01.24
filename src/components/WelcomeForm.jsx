import { SelectInput } from './SelectInput'
import { Button } from './Button'

import classes from './WelcomeForm.module.css'

export const WelcomeForm = ({ inputs }) => {
  return (
    <form className={classes.form}>
      {inputs.map(({ id, options, label, key }) => (
        <SelectInput key={key} id={id} options={options} label={label} />
      ))}
      <Button className={classes.button} text="Start Quiz" type="submit"></Button>
    </form>
  )
}
