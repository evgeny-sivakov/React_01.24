import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ConfigState {
  type: string //'boolean' | 'multiple' | 'Any'
  difficulty: string //'easy' | 'meduim' | 'hard' | 'Any'
  category: string 
  categoryID: number
  time: number
  amount: number
}

const initialState: ConfigState = {
  type: 'multiple',
  difficulty: 'easy',
  category: '',
  categoryID: 0,
  time: 0,
  amount: 0
}

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<ConfigState>) => {
      const { time, amount, difficulty, category, type, categoryID } = action.payload

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
