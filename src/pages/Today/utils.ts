import moment from 'moment'
import { UNIT_DISTANCE, UNIT_SYMBOL } from '../../utils/constants'
import { UnitSystemType } from '../../utils/types'
import {
    weatherConditions,
    weatherConditionsTimed,
    weatherPatterns,
} from '../../utils/weatherPatterns'
import { IWeatherValues } from './interfaces'

export const formatWeather = (
    weatherRaw: any,
    unit: UnitSystemType
): IWeatherValues => {
    let imagePath = ''
    let date = new Date(weatherRaw.dt * 1000).toLocaleString()
    date = moment().format('Do MMMM YYYY, HH:mm:ss a')
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
    sunrise = sunrise.split(',')[1]
    let sunset = new Date(weatherRaw.sys.sunset * 1000).toLocaleString()
    sunset = sunset.split(',')[1]

    const weatherToday: IWeatherValues = {
        location: weatherRaw.name,
        date,
        sunrise,
        sunset,
        visibility: `${weatherRaw.visibility} m`,
        windSpeed: `${weatherRaw.wind.speed} ${UNIT_DISTANCE[unit]}`,
        humidity: `${weatherRaw.main.humidity} %`,
        feelsLike: Math.round(weatherRaw.main.feels_like),
        temperature: Math.round(weatherRaw.main.temp),
        temperatureMaxMin: `${Math.round(
            weatherRaw.main.temp_max
        )}/${Math.round(weatherRaw.main.temp_min)} ${UNIT_SYMBOL[unit]} `,
        imagePath,
        description: weatherRaw.weather[0].description,
        clouds: `${weatherRaw.clouds.all} %`,
        pressure: `${weatherRaw.main.pressure} mb`,
    }

    return weatherToday
}
