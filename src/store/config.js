import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  type: 'Type',
  difficulty: 'Difficulty',
  category: 'Category',
  categoryID: 'id',
  time: 0,
  amount: 0
}

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    set: (state, action) => {
      const { time, amount, difficulty, category, type, categoryID } = action.payload
      console.log(action.payload)
      state.amount = amount
      state.time = time
      state.category = category
      state.difficulty = difficulty
      state.type = type
      state.categoryID = categoryID
    },
    reset(state) {
      const { time, type, difficulty, category, amount, categoryID } = initialState
      state.amount = amount
      state.time = time
      state.type = type
      state.difficulty = difficulty
      state.category = category
      state.categoryID = categoryID
    }
  }
})

export const configActions = configSlice.actions
export default configSlice.reducer
