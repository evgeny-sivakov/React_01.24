import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { configActions } from '../store/config'

import SelectInput from './SelectInput'
import Button from './Button'
import convertFormData from '../utils/convertFormData'

import classes from './WelcomeForm.module.css'
import { FC, FormEvent } from 'react'
import { Input } from './types/components.types'
import { FormDataType } from './types/components.types'

interface FormProps {
  inputs: Input[]
}

const WelcomeForm: FC<FormProps> = ({ inputs }) => {
  const receivedInputs = inputs

  const navigate = useNavigate()
  const dispatch = useDispatch()

  function quizConfigSubmitHandler(event: FormEvent) {
    event.preventDefault()

    const rawFormData = event.target as HTMLFormElement
    const formData = new FormData(rawFormData)
    const data = Object.fromEntries(formData.entries())

    const currentCategoryObj = receivedInputs.find((input) => input.inputID === 'category') as Input
    const currentCategoryID = currentCategoryObj.options.find((opt) => {
      if (typeof opt !== 'string') {
        opt.name === data.category
      }
    })

    const configData = {
      ...data,
      categoryID: currentCategoryID
    } as FormDataType

    const convertedData = convertFormData(configData)

    dispatch(configActions.set(convertedData))
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
