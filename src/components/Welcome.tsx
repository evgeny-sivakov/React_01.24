import { Link } from 'react-router-dom'

import WelcomeForm from './WelcomeForm'

import classes from './Welcome.module.css'
import { useEffect, useState } from 'react'
import {Input} from './types/components.types'

const initialInputs: Input[] = [
  {
    inputID: 'amount',
    options: ['5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
    label: 'How many questions?',
    key: 'i0'
  },
  {
    inputID: 'category',
    options: [],
    label: 'Choose a category',
    key: 'i1'
  },
  {
    inputID: 'difficulty',
    options: ['Easy', 'Medium', 'Hard'],
    label: 'Choose a difficulty',
    key: 'i2'
  },
  {
    inputID: 'type',
    options: ['Multiple Choice', 'True / False'],
    label: 'Choose type of answer',
    key: 'i3'
  },
  {
    inputID: 'time',
    options: ['1 minute', '2 minutes', '5minutes'],
    label: 'Define quiz duration',
    key: 'i4'
  }
]

const Welcome = () => {
  const [formInputs, setFromInputs] = useState(initialInputs)

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://opentdb.com/api_category.php')

      if (!response.ok) {
        throw new Error('Error!')
      }

      const responseData = await response.json()
      const categoryOptions = responseData.trivia_categories
      const category: Input = {
        inputID: 'category',
        options: categoryOptions,
        label: 'Choose a category',
        key: 'i1'
      }
      initialInputs[1] = category
      const updatedInputs = [...initialInputs]
      setFromInputs(updatedInputs)
    }

    fetchCategories().catch((error) => console.log(error))
  }, [])

  return (
    <div className={classes.container}>
      <WelcomeForm inputs={formInputs} />
      <Link className={classes.link} to="/statistics">
        See my statistics
      </Link>
    </div>
  )
}

export default Welcome
