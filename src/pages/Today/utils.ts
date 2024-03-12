import moment from 'moment'
import {
    weatherConditions,
    weatherConditionsTimed,
    weatherPatterns,
} from '../../utils/weatherPatterns'
import { ICurrentWeather } from './interfaces'

export const initializeEmptyWeather = (): ICurrentWeather => {
    const weatherToday: ICurrentWeather = {
        location: '',
        date: new Date().toLocaleString(),
        sunrise: new Date().toLocaleString(),
        sunset: new Date().toLocaleString(),
        visibility: 0,
        windSpeed: 0,
        humidity: 0,
        feelsLike: 0,
        temperature: 0,
        temperatureMax: 0,
        temperatureMin: 0,
        imagePath: 'sun.webp',
        description: '',
    }
    return weatherToday
}

export const formatWeather = (weatherRaw: any): ICurrentWeather => {
    let imagePath = ''
    let date = new Date(weatherRaw.dt * 1000).toLocaleString()
    date = moment().format('LLLL')
    const hours = new Date(weatherRaw.dt * 1000).getHours()
    const dayOrNight = hours > 6 && hours < 19 ? 'Day' : 'Night'
    const mainCondition = weatherRaw.weather[0].main

    const periodFrameCondition = mainCondition + dayOrNight

    imagePath = weatherConditionsTimed.includes(mainCondition)
        ? weatherPatterns[periodFrameCondition]
        : weatherPatterns[mainCondition]

    if (
        !weatherConditions.includes(mainCondition) &&
        (!imagePath || !imagePath.length)
    ) {
        imagePath = 'danger.gif'
    }

    let sunrise = new Date(weatherRaw.sys.sunrise * 1000).toLocaleString()
    sunrise = moment().format('LT')
    let sunset = new Date(weatherRaw.sys.sunset * 1000).toLocaleString()
    sunset = moment().format('LT')

    const weatherToday: ICurrentWeather = {
        location: weatherRaw.name,
        date,
        sunrise,
        sunset,
        visibility: weatherRaw.visibility,
        windSpeed: weatherRaw.wind.speed,
        humidity: weatherRaw.main.humidity,
        feelsLike: Math.round(weatherRaw.main.feels_like),
        temperature: Math.round(weatherRaw.main.temp),
        temperatureMax: Math.round(weatherRaw.temp_max),
        temperatureMin: Math.round(weatherRaw.temp_min),
        imagePath,
        description: weatherRaw.weather[0].description,
    }

    return weatherToday
}
