import { configureStore } from '@reduxjs/toolkit'
import TodayWeatherReducer from './slices/todayWeather'
import UserSettingsReducer from './slices/userSettings'

export const store = configureStore({
    reducer: {
        settings: UserSettingsReducer,
        weather: TodayWeatherReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
