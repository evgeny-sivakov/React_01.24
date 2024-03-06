/* import { FC } from "react"

interface FormDataProps {
  amount: number | string
  category: string
  categoryID: number
  difficulty: string
  type: string
  time: number
} */
function convertFormData(data) {
  let { amount, category, categoryID, difficulty, type, time } = data

  amount = amount === 'How many questions?' ? 10 : parseInt(amount)
  category = category === 'Choose a category' ? 'Any' : category
  categoryID = categoryID === undefined ? 'Any' : parseInt(categoryID)
  difficulty = difficulty === 'Choose a difficulty' ? 'Any' : difficulty.toLowerCase()
  type =
    type === 'Choose type of answer' ? 'Any' : type === 'Multiple Choice' ? 'multiple' : 'boolean'
  time = time === 'Define quiz duration' ? 5 : parseInt(time)

  return { amount, category, categoryID, difficulty, type, time }
}

export default convertFormData
