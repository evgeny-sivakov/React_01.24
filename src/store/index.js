import { configureStore } from '@reduxjs/toolkit'

import configReducer from './config'
import quizReducer from './quiz'

const store = configureStore({
  reducer: {
    config: configReducer,
    quiz: quizReducer
  }
})

export default store
