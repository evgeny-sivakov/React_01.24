import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface quizState {
  answers: number
  correctAnswers: number
  remainingTime: number
}

const initialState: quizState = {
  answers: 0,
  correctAnswers: 0,
  remainingTime: 0
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    countCorrectAnswer(state) {
      state.correctAnswers += 1
      state.answers += 1
    },
    countAnswer(state) {
      state.answers += 1
    },
    setRemainingTime(state, action: PayloadAction<number>) {
      state.remainingTime = action.payload
    },
    reset(state) {
      state.answers = 0
      state.correctAnswers = 0
      state.remainingTime = 0
    }
  }
})

export const quizActions = quizSlice.actions
export default quizSlice.reducer
