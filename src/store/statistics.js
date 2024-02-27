import { createSlice } from '@reduxjs/toolkit'

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

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    updateStats(state, { payload }) {
      const { type, difficulty, category } = payload.config

      if (type === 'Any') {
        payload.questions.forEach(({ type }) => {
          const currentStateType = state.type.byName.find((stateType) => stateType.name === type)
          currentStateType.quantity += 1
        })
      } else {
        const currentStateType = state.type.byName.find((stateType) => stateType.name === type)

        currentStateType.quantity += payload.quantity
      }

      if (difficulty === 'Any') {
        payload.questions.forEach(({ difficulty }) => {
          const currentStateDifficulty = state.difficulty.byName.find(
            (stateDifficulty) => stateDifficulty.name === difficulty
          )
          currentStateDifficulty.quantity += 1
        })
      } else {
        const currentStateDifficulty = state.difficulty.byName.find(
          (stateDifficulty) => stateDifficulty.name === difficulty
        )

        currentStateDifficulty.quantity += payload.quantity
      }

      if (category === 'Any') {
        payload.questions.forEach(({ category }) => {
          const currentStateCategory = state.categories.allNames.includes(category)

          if (currentStateCategory) {
            const existedCategory = state.categories.byName.find((obj) => obj.name === category)

            existedCategory.quantity += 1
          } else {
            state.categories.byName.push({
              name: category,
              quantity: 1
            })
            state.categories.allNames.push(category)
          }
        })
      } else {
        const currentCategory = state.categories.allNames.includes(category)

        if (currentCategory) {
          const category = state.categories.byName.find((category) => category.name === category)

          category.quantity += payload.quantity
        } else {
          state.categories.byName.push({
            name: category,
            quantity: payload.quantity
          })
          state.categories.allNames.push(category)
        }
      }

      state.totalQuantity += payload.quantity
    }
  },
  extraReducers: (builder) => {
    builder.addCase('quiz/countCorrectAnswer', (state) => {
      state.correctAnswers += 1
    })
  }
})

export const statisticsActions = statisticsSlice.actions
export default statisticsSlice.reducer
