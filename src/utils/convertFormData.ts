import { FormDataType, ConvertedFormData } from '../components/types/components.types'

const convertFormData = (data: FormDataType) => {
  const { amount, category, categoryID, difficulty, type, time } = data

  const convertedAmount = amount === 'How many questions?' ? 10 : parseInt(amount)
  const convertedCategory = category === 'Choose a category' ? 'Any' : category
  const convertedCategoryID = categoryID === undefined ? 'Any' : categoryID
  const convertedDifficulty =
    difficulty === 'Choose a difficulty' ? 'Any' : difficulty.toLowerCase()
  const convertedType =
    type === 'Choose type of answer' ? 'Any' : type === 'Multiple Choice' ? 'multiple' : 'boolean'
  const convertedTime = time === 'Define quiz duration' ? 5 : parseInt(time)

  return {
    amount: convertedAmount,
    category: convertedCategory,
    categoryID: convertedCategoryID,
    difficulty: convertedDifficulty,
    type: convertedType,
    time: convertedTime
  } as ConvertedFormData
}

export default convertFormData
