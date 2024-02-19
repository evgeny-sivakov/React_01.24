import { createSlice } from '@reduxjs/toolkit'

const quizSlice = createSlice({
  name: 'quiz',
  initialState: { answers: 0, correctAnswers: 0, remainingTime: 0 },
  reducers: {
    countCorrectAnswer(state) {
      state.correctAnswers += 1
      state.answers += 1
    },
    countAnswer(state) {
      state.answers += 1
    },
    setRemainingTime(state, action) {
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
