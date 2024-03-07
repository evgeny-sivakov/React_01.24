import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Questions } from '../components/types/components.types'
import { RootState } from '../store/index'

interface byName {
  name: string
  quantity: number
}

interface StatisticsState {
  totalQuantity: number
  correctAnswers: number
  currentCorrectAnswers: number
  categories: { byName: byName[]; allNames: string[] }
  difficulty: { byName: byName[] }
  type: { byName: byName[] }
}

const initialState: StatisticsState = {
  totalQuantity: 0,
  correctAnswers: 0,
  currentCorrectAnswers: 0,
  categories: {
    byName: [],
    allNames: []
  },
  difficulty: {
    byName: [
      { name: 'easy', quantity: 0 },
      { name: 'medium', quantity: 0 },
      { name: 'hard', quantity: 0 }
    ]
  },
  type: {
    byName: [
      { name: 'multiple', quantity: 0 },
      { name: 'boolean', quantity: 0 }
    ]
  }
}

interface ThunkProps {
  questions: Questions
  quantity: number
}

export const updateStatisticsData = createAsyncThunk<
  StatisticsState,
  ThunkProps,
  { state: RootState }
>('statistics/updateStatisticsData', async ({ questions, quantity }, { getState }) => {
  const {
    config: { type, difficulty, category }
  } = getState()
  const statistics = getState().statistics
  const newStats = JSON.parse(JSON.stringify(statistics)) as StatisticsState

  if (type === 'Any') {
    questions.forEach(({ type }) => {
      const currentTypeObj = newStats.type.byName.find(
        (stateType) => stateType.name === type
      ) as byName
      currentTypeObj.quantity += 1
    })
  } else {
    const currentTypeObj = newStats.type.byName.find(
      (stateType) => stateType.name === type
    ) as byName
    currentTypeObj.quantity += quantity
  }

  if (difficulty === 'Any') {
    questions.forEach(({ difficulty }) => {
      const currentDifficultyObj = newStats.difficulty.byName.find(
        (stateDifficulty) => stateDifficulty.name === difficulty
      ) as byName
      currentDifficultyObj.quantity += 1
    })
  } else {
    const currentDifficultyObj = newStats.difficulty.byName.find(
      (stateDifficulty) => stateDifficulty.name === difficulty
    ) as byName

    currentDifficultyObj.quantity += quantity
  }

  if (category === 'Any') {
    questions.forEach(({ category }) => {
      const currentCategoryObj = newStats.categories.allNames.includes(category)

      if (currentCategoryObj) {
        const existedCategory = newStats.categories.byName.find(
          (obj) => obj.name === category
        ) as byName

        existedCategory.quantity += 1
      } else {
        newStats.categories.byName.push({
          name: category,
          quantity: 1
        })
        newStats.categories.allNames.push(category)
      }
    })
  } else {
    const currentCategoryObj = newStats.categories.allNames.includes(category)

    if (currentCategoryObj) {
      const categoryObj = newStats.categories.byName.find(
        (categoryItem) => categoryItem.name === category
      ) as byName

      categoryObj.quantity += quantity
    } else {
      newStats.categories.byName.push({
        name: category,
        quantity: quantity
      })
      newStats.categories.allNames.push(category)
    }
  }

  newStats.totalQuantity += quantity
  return newStats as StatisticsState
})

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase('quiz/countCorrectAnswer', (state) => {
        state.correctAnswers += 1
        state.currentCorrectAnswers += 1
      })
      .addCase('quiz/reset', (state) => {
        state.correctAnswers -= state.currentCorrectAnswers
      })
      .addCase(updateStatisticsData.fulfilled, (state, action) => {
        const { type, difficulty, categories, totalQuantity } = action.payload
        state.type = type
        state.difficulty = difficulty
        state.categories = categories
        state.totalQuantity = totalQuantity
        state.currentCorrectAnswers = 0
      })
  }
})

export const statisticsActions = statisticsSlice.actions
export default statisticsSlice.reducer
