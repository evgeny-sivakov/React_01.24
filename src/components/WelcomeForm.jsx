import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { configActions } from '../store/config'

import SelectInput from './SelectInput'
import Button from './Button'

import classes from './WelcomeForm.module.css'

const WelcomeForm = ({ inputs }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function quizConfigSubmitHandler(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries())

    const currentCategoryID = inputs
      .find((input) => input.inputID === 'category')
      .options.find((opt) => opt.name === data.category).id
    const convertedType = data.type === 'Multiple Choice' ? 'multiple' : 'boolean'
    const convertedDif = data.difficulty.toLowerCase()
    const configData = {
      ...data,
      type: convertedType,
      categoryID: currentCategoryID + '',
      difficulty: convertedDif
    }

    dispatch(configActions.set(configData))
    navigate('quiz')
  }

  return (
    <form className={classes.form} onSubmit={quizConfigSubmitHandler}>
      {inputs.map(({ inputID, options, label, key }) => {
        return <SelectInput key={key} inputID={inputID} options={options} label={label} />
      })}
      <Button className={classes.button} text="Start Quiz" type="submit"></Button>
    </form>
  )
}

export default WelcomeForm
