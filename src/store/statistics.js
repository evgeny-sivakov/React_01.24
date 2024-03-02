import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  totalQuantity: 0,
  correctAnswers: 0,
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

export const updateStatisticsData = createAsyncThunk(
  'statistics/updateStatisticsData',
  async ({ questions, quantity }, { getState }) => {
    const {
      config: { type, difficulty, category }
    } = getState()
    const statistics = getState().statistics
    const newStats = JSON.parse(JSON.stringify(statistics))

    if (type === 'Any') {
      questions.forEach(({ type }) => {
        const currentTypeObj = newStats.type.byName.find((stateType) => stateType.name === type)
        currentTypeObj.quantity += 1
      })
    } else {
      const currentTypeObj = newStats.type.byName.find((stateType) => stateType.name === type)
      currentTypeObj.quantity += quantity
    }

    if (difficulty === 'Any') {
      questions.forEach(({ difficulty }) => {
        const currentDifficultyObj = newStats.difficulty.byName.find(
          (stateDifficulty) => stateDifficulty.name === difficulty
        )
        currentDifficultyObj.quantity += 1
      })
    } else {
      const currentDifficultyObj = newStats.difficulty.byName.find(
        (stateDifficulty) => stateDifficulty.name === difficulty
      )

      currentDifficultyObj.quantity += quantity
    }

    if (category === 'Any') {
      questions.forEach(({ category }) => {
        const currentCategoryObj = newStats.categories.allNames.includes(category)

        if (currentCategoryObj) {
          const existedCategory = newStats.categories.byName.find((obj) => obj.name === category)

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
        const category = newStats.categories.byName.find((category) => category.name === category)

        category.quantity += quantity
      } else {
        newStats.categories.byName.push({
          name: category,
          quantity: quantity
        })
        newStats.categories.allNames.push(category)
      }
    }

    newStats.totalQuantity += quantity
    return newStats
  }
)

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase('quiz/countCorrectAnswer', (state) => {
        state.correctAnswers += 1
      })
      .addCase('quiz/reset', (state, action) => {
        if (action.payload) {
          state.correctAnswers -= action.payload
        } else {
          state.correctAnswers
        }
      })
      .addCase(updateStatisticsData.fulfilled, (state, action) => {
        const { type, difficulty, categories, totalQuantity } = action.payload
        state.type = type
        state.difficulty = difficulty
        state.categories = categories
        state.totalQuantity = totalQuantity
      })
  }
})

export const statisticsActions = statisticsSlice.actions
export default statisticsSlice.reducer
