import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { IWeatherValues } from '../../pages/Today/interfaces'
import { formatWeather } from '../../pages/Today/utils'
import { UnitSystemType } from '../../utils/types'

export interface ITodayWeatherSlice {
    weather: IWeatherValues
    loaded: boolean
    error: string
}

const initialState: ITodayWeatherSlice = {
    weather: {} as IWeatherValues,
    loaded: false,
    error: '',
}

export const TodayWeatherSlice = createSlice({
    name: 'todayWeather',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(
            fetchWeather.fulfilled,
            (state, action: PayloadAction<IWeatherValues>) => {
                return {
                    ...state,
                    weather: { ...action.payload },
                    loaded: true,
                    error: '',
                }
            }
        ),
            builder.addCase(fetchWeather.pending, (state) => {
                return {
                    ...state,
                    loaded: false,
                }
            }),
            builder.addCase(fetchWeather.rejected, (state, action) => {
                return {
                    ...state,
                    loaded: true,
                    error: action.error.message || 'An error has occured',
                }
            })
    },
})

export const fetchWeather = createAsyncThunk(
    'todayWeather/fetchWeather',
    async (unit: UnitSystemType) => {
        const weatherRaw = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=45.7537&lon=21.2257&units=${unit}&appid=354e28e030dab0e004f7986f2ab9b413`
        )

        const formattedWeather = formatWeather(weatherRaw.data, unit)

        return formattedWeather
    }
)

export default TodayWeatherSlice.reducer
