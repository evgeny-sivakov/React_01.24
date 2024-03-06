import { configureStore, createStore } from '@reduxjs/toolkit'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import configReducer from './config'
import quizReducer from './quiz'
import statisticsReducer from './statistics'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['statistics']
}

const store = configureStore({
  reducer: {
    config: configReducer,
    quiz: quizReducer,
    statistics: statisticsReducer
  }
})

const persistedReducer = persistReducer(persistConfig, statisticsReducer)
let storeToPersist = createStore(persistedReducer)
let persistor = persistStore(storeToPersist)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { store, persistor }
