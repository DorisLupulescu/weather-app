import { configureStore } from '@reduxjs/toolkit'
import UserSettingsReducer from './slices/userSettings'

export const store = configureStore({
    reducer: {
        settings: UserSettingsReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
