import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import generalReducer from './generalReducer'
import APIReducer from './APIReducer'

export default configureStore({
    reducer: {
        general: generalReducer,
        api: APIReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})